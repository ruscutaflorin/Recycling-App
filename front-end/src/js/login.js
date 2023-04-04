let btnSignUp = document.querySelector(".btn-signUp");
let btnLogIn = document.querySelector(".btn-logIn");

btnSignUp.addEventListener("click", () =>
    document.querySelector("a.a-signUp").setAttribute("href", "signUp.html")
);

btnLogIn.addEventListener("click", () => {
    verificareLogIn();
    document.querySelector("a.a-logIn").setAttribute("href", "mainPage.html");

}
);

function verificareLogIn() {
    
}