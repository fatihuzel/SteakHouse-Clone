(function () {
    'use strict'
    var myName = document.querySelector("#name");
    var myEmail = document.querySelector("#email");
    var myMessage = document.querySelector("#message");
    var myBtn = document.querySelector("#BtnContact");

    if (myMessage.value.length == 0) {
        myBtn.disabled = true;
    }
    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;

    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myMessage.addEventListener("blur", controlMessage);

    function controlName() {
        var myError = document.querySelector("#ErrName");
        if (myName.value.length == 0) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light"> The name field cannot be left blank.</span >';
            return false;
        } else if (myName.value.length < 3) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">Your name cannot be less than 3 characters.</span >';
            return false;
        } else if (myName.value.length > 30) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">Your name cannot be more than 30 characters.</span >';
            return false;
        } else if (!spacePattern.test(myName.value)) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">You left a space in your name.</span >';
            return false;
        } else if (!NumericPattern.test(myName.value)) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">You can\'t use numbers in your name!</span >';
            return false;
        } else {
            myName.classList.remove("is-invalid");
            myName.classList.add("is-valid");
            return true;
        }
    }

    function controlEmail() {
        var myError = document.querySelector("#ErrEmail");
        if (myEmail.value.length == 0) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">Email field cannot be left blank.</span >';
            return false;
        } else if (myEmail.value.length < 4) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            // myError.innerHTML = "Your email cannot be less than 4 characters.";
            myError.innerHTML = '<span class="fs-6 text-light"> Your email cannot be less than 4 characters.</span >';
            return false;
        } else if (myEmail.value.length > 30) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">Your email cannot be more than 30 characters.</span >';
            return false;
        } else if (!spacePattern.test(myEmail.value)) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">You left a space in your email address.</span >';
            return false;
        } else if (!EmailPattern.test(myEmail.value)) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">Your email format is incorrect. Check it again!</span >';
            return false;
        } else {
            myEmail.classList.remove("is-invalid");
            myEmail.classList.add("is-valid");
            return true;
        }
    }

    function controlMessage() {
        var myError = document.querySelector("#ErrMessage");
        if (myMessage.value.length == 0) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">The message field cannot be left blank.</span >';
            return false;
        } else if (myMessage.value.length < 10) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.innerHTML = '<span class="fs-6 text-light">Your message cannot be less than 10 characters.</span >';
            return false;
        } else {
            myMessage.classList.remove("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
        }
    }

    myMessage.addEventListener("keyup", function () {
        document.getElementById("current-character").innerText = myMessage.value.length;
        if (myMessage.value.length >= 10) {
            myBtn.disabled = false;
        } else {
            myBtn.disabled = true;
        }
    });
    var myForms = document.querySelector(".need-validation");
    myForms.addEventListener("submit", function (e) {
        if (!myForms.checkValidity() ||
            !controlName() ||
            !controlEmail() ||
            !controlMessage()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            document.getElementById("FormContact").reset();
        }
    }, false);

})();