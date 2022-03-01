function fillData() {
    document.getElementById("language").innerText = sessionStorage.getItem("language");
    document.getElementById("firstName").innerText = sessionStorage.getItem("firstName");
    document.getElementById("lastName").innerText = sessionStorage.getItem("lastName");
    document.getElementById("email").innerText = sessionStorage.getItem("email");
    document.getElementById("city").innerText = sessionStorage.getItem("city");
    document.getElementById("state").innerText = sessionStorage.getItem("state");
    document.getElementById("zipCode").innerText = sessionStorage.getItem("zipCode");
}

fillData();
//document.addEventListener("onLoaded", "fillData");
