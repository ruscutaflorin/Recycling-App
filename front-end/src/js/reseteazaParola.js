let inputs = document.querySelectorAll("input");
let register = document.querySelector("button");
let validareSucces = false;

function verificare() {
    if (inputs[0].value === inputs[1].value && inputs[0].value !== "" && inputs[1].value !== "") {
        validareSucces = true;
    }
    if (validareSucces === true) {
        document.querySelector("a").setAttribute("href", "login.html");
    }
}

register.addEventListener("click", verificare);




