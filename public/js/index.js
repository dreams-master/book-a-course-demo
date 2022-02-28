function loadFormPage(event) {
    let id = event.currentTarget.id;
    let lang;

    switch (id) {
        case "card-en":
            lang = "English";
            break;
        case "card-es":
            lang = "Spanish";
            break;
        case "card-new":
            lang = "Some language";
            break;
        default:
            lang = "a bug occurred";
    }

    sessionStorage.setItem("language", lang);
    window.location.assign("course.html");
}

customElements.define('course-card',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('course-card');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
);

Array.from(document.getElementsByTagName("course-card")).forEach((card) => {
    card.addEventListener("click", loadFormPage);
});
