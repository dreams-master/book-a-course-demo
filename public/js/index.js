function loadFormPage(event) {
    let id = event.currentTarget.id;
    let lang = "";

    switch (id) {
        case "card-en":
            lang = "English";
            break;
        case "card-es":
            lang = "Spanish";
            break;
        default:
            lang = "a bug occurred";
    }
    
    sessionStorage.setItem("language", lang);
    window.location.assign("course.html");
}

document.getElementById("card-en").addEventListener("click", loadFormPage);
document.getElementById("card-es").addEventListener("click", loadFormPage);