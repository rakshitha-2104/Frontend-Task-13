const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");
const strengthMessage = document.getElementById("strengthMessage");

const matchMessage = document.getElementById("matchMessage");

const resetBtn = document.getElementById("resetBtn");
const checkBtn = document.getElementById("checkBtn");

const requirements = {
    length: document.getElementById("lengthRequirement"),
    uppercase: document.getElementById("uppercaseRequirement"),
    lowercase: document.getElementById("lowercaseRequirement"),
    number: document.getElementById("numberRequirement"),
    special: document.getElementById("specialRequirement")
};
function checkPasswordStrength() {

    const password = passwordInput.value;
    if (password === "") {

        strengthText.textContent = "Not entered";
        strengthText.style.color = "#aaa6bd";

        strengthFill.style.width = "0%";

        strengthMessage.textContent =
            "Enter a password to check its strength.";

        strengthMessage.style.color = "#88849e";

        updateRequirement("length", false);
        updateRequirement("uppercase", false);
        updateRequirement("lowercase", false);
        updateRequirement("number", false);
        updateRequirement("special", false);

        return;
    }
    const hasLength = password.length >= 8;

    const hasUppercase = /[A-Z]/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    updateRequirement("length", hasLength);
    updateRequirement("uppercase", hasUppercase);
    updateRequirement("lowercase", hasLowercase);
    updateRequirement("number", hasNumber);
    updateRequirement("special", hasSpecial);
    let score = 0;

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (score <= 2) {

        strengthText.textContent = "Weak";
        strengthText.style.color = "#e05b65";

        strengthFill.style.width = "25%";
        strengthFill.style.background = "#e05b65";

        strengthMessage.textContent =
            "Your password needs improvement.";

        strengthMessage.style.color = "#e05b65";
    }
    else if (score <= 4) {

        strengthText.textContent = "Medium";
        strengthText.style.color = "#e6a23c";

        strengthFill.style.width = "65%";
        strengthFill.style.background = "#e6a23c";

        strengthMessage.textContent =
            "Good progress! Add all requirements for a strong password.";

        strengthMessage.style.color = "#e6a23c";
    }
    else {

        strengthText.textContent = "Strong";
        strengthText.style.color = "#36a879";

        strengthFill.style.width = "100%";
        strengthFill.style.background = "#36a879";

        strengthMessage.textContent =
            "Excellent! Your password meets all requirements.";

        strengthMessage.style.color = "#36a879";
    }
    checkPasswordMatch();
}
function updateRequirement(name, isValid) {

    const requirement = requirements[name];

    const check = requirement.querySelector(".check");

    if (isValid) {

        requirement.classList.add("valid");

        check.textContent = "✓";

    } else {

        requirement.classList.remove("valid");

        check.textContent = "○";
    }
}

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";
    }

});
toggleConfirm.addEventListener("click", function () {

    if (confirmInput.type === "password") {

        confirmInput.type = "text";

        toggleConfirm.textContent = "Hide";

    } else {

        confirmInput.type = "password";

        toggleConfirm.textContent = "Show";
    }

});
function checkPasswordMatch() {

    const password = passwordInput.value;

    const confirmPassword = confirmInput.value;

    if (confirmPassword === "") {

        matchMessage.textContent = "";

        return;
    }

    if (password === confirmPassword) {

        matchMessage.textContent = "✓ Passwords Match";

        matchMessage.style.color = "#36a879";

    } else {

        matchMessage.textContent = "✗ Passwords Do Not Match";

        matchMessage.style.color = "#e05b65";
    }
}
passwordInput.addEventListener("input", function () {

    checkPasswordStrength();

});

confirmInput.addEventListener("input", function () {

    checkPasswordMatch();

});
checkBtn.addEventListener("click", function () {

    if (passwordInput.value === "") {

        strengthText.textContent = "Empty";

        strengthText.style.color = "#e05b65";

        strengthMessage.textContent =
            "Please enter a password first.";

        strengthMessage.style.color = "#e05b65";

        passwordInput.focus();

    } else {

        checkPasswordStrength();

    }

});
resetBtn.addEventListener("click", function () {
    passwordInput.value = "";

    confirmInput.value = "";
    passwordInput.type = "password";
     confirmInput.type = "password";
     togglePassword.textContent = "Show";
     toggleConfirm.textContent = "Show";
      strengthText.textContent = "Not entered";
      strengthText.style.color = "#aaa6bd";
     strengthFill.style.width = "0%";
      strengthMessage.textContent =
        "Enter a password to check its strength.";

    strengthMessage.style.color = "#88849e";

    matchMessage.textContent = "";
    updateRequirement("length", false);
    updateRequirement("uppercase", false);
    updateRequirement("lowercase", false);
    updateRequirement("number", false);
    updateRequirement("special", false);
    passwordInput.focus();

});