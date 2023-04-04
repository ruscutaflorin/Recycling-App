let btnCreareCont = document.querySelector("button");
let inputs = document.querySelectorAll("input");
let validareSucces = true;


function validare() {
    for (let i = 0; i < 3; i++) {
        if (inputs[i].value === "") {
            validareSucces = false;
        }

    }
    if (inputs[1].value !== inputs[2].value) {
        validareSucces = false;
    }

    if (validareSucces === true) {
        document.querySelector("a").setAttribute("href", "login.html");
    }
}

btnCreareCont.addEventListener("click", validare);
