
var form = document.getElementById('form');
var username = document.getElementById('username');
var result = document.getElementById('result')

form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
});


function validate() {
    var usernameValue = username.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Escribi tu nombre');

    } else {
        setSuccessFor(username);
    }
}


function calcularPuntaje() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;

    var num1 = parseInt(q1);
    var num2 = parseInt(q2);
    var num3 = parseInt(q3);
    var num4 = parseInt(q4);
    var num5 = parseInt(q5);

    var msj2 = document.querySelector("#message2");
    var res = (num1 + num2 + num3 + num4 + num5);

    if (res >= 5 && res <= 20) {
        msj2.textContent = ("Tu casa es Gryffindor")
        document.querySelector(".container").style.background = "url(https://i.pinimg.com/564x/ee/20/d9/ee20d927427607f2c09b66330189c3e5.jpg)";

    }
    if (res >= 21 && res <= 49) {
        msj2.textContent = ("Tu casa es Slytherin")
        document.querySelector(".container").style.background = "url(https://i.pinimg.com/564x/e4/89/a7/e489a7df471c1b1bcf87fda6083a57d8.jpg)";
    }
    if (res >= 50 && res <= 60) {
        msj2.textContent = ("Tu casa es Ravenclaw")
        document.querySelector(".container").style.background = "url(https://i.pinimg.com/564x/67/cb/fc/67cbfcb5415b5912279db9dc196def5c.jpg)";
    }
    if (res >= 61 && res <= 100) {
        msj2.textContent = ("Tu casa es Hufflepuff")
        document.querySelector(".container").style.background = "url(https://i.pinimg.com/564x/2a/a0/db/2aa0dbc762412b7595e46bd64ce20d23.jpg)";
    }

}

function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    var msj = document.querySelector("#message");
    formControl.className = 'form-control error';
    small.innerText = message;
    msj.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}





