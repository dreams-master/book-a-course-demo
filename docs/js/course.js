function isFormValid(form) {
    if (!form.checkValidity()) return false;

    // custom validation

    // ideas
    // is email email   => pattern matching
    // does zip exist   => lookup dataset
    // password         => 2x the same

    return true;
}

function loadConfirmPage() {
    sessionStorage.setItem("firstName", document.getElementById("firstName").value);
    sessionStorage.setItem("lastName", document.getElementById("lastName").value);
    sessionStorage.setItem("email", document.getElementById("email").value);
    sessionStorage.setItem("city", document.getElementById("city").value);
    sessionStorage.setItem("zipCode", document.getElementById("zipCode").value);

    let select = document.getElementById("state");
    let value = select.options[select.selectedIndex].value;
    sessionStorage.setItem("state", value);

    window.location.assign("confirm.html");
}


(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (isFormValid(form)) {
                    loadConfirmPage();
                }

                form.classList.add('was-validated');
            }, false)
        })
})()
