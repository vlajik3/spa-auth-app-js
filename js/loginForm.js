// buttons & checkbox
const buttonModalOpen = document.querySelector(".btn-modal-open");
const buttonLogout = document.querySelector(".btn-logout")
const buttonModalLogin = document.querySelector(".button-modal-login");
const checkBoxRemember = document.querySelector(".checkbox-remember");
const buttonUserName = document.querySelector(".btn-userName");
// input fields
let inputName = document.querySelector(".userName-change-field");
let inputLogin = document.getElementById('input-login');
let inputPassword = document.getElementById('input-password');
// modal window
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal_content");
const modalCloseElements = document.querySelectorAll(".modal-close");

let user = {
    login: "admin",
    password: "123"
};

let userName = "vlajik3";

let isAuth = !!localStorage.getItem("isAuth");
console.log(isAuth);

isAuth = () => {
    if(localStorage.getItem("isAuth") === "true") {
        return true;
    } return false;

} 

function hideButton(button) {
    button.style.display = "none";
}

function showButton(button) {
    button.style.display = "block";
}

buttonUserName.onclick = (event) => {
    event.stopPropagation();
    hideButton(buttonUserName);
    showButton(inputName);
    inputName.value = buttonUserName.textContent;
    inputName.focus();
}

// Текстовое поля ввода имени. Тап вне поля после изменения имени
inputName.onblur = () => {
    if(inputName.value.trim() !== "") {
        if(isAuth) {
            localStorage.setItem("userName", inputName.value);
        }
        buttonUserName.textContent = inputName.value.trim();
        hideButton(inputName);
        if(buttonModalOpen.style.display == "none") {
            showButton(buttonUserName);
        }
    }
}

if(localStorage.getItem("isAuth") === "true") {
    hideButton(buttonModalOpen);
    showButton(buttonLogout);
    showButton(buttonUserName);
    buttonUserName.textContent = localStorage.getItem("userName");
}

// Войти 1(открытие формы авторизации)

buttonModalOpen.onclick = (event) => {
    modal.classList.remove("hidden");
    modal.classList.add('open');
}

// Войти 2(авторизация)

buttonModalLogin.onclick = (event) => {
    event.preventDefault();

        if(inputLogin.value == user.login && inputPassword.value == user.password) {
            if(checkBoxRemember.checked) {
                localStorage.setItem("isAuth", "true");
                localStorage.setItem("userName", userName);
            }
                buttonUserName.textContent = userName;
                showButton(buttonUserName);
                hideButton(buttonModalOpen);
                showButton(buttonLogout);
                modal.classList.remove('open');

        } else {
            alert("Неверный логин или пароль");
        }
}

// Выход
buttonLogout.onclick = (event) => {
    let isExit = confirm("Вы точно хотите выйти?");
    if(isExit) {
        localStorage.removeItem("isAuth");
        localStorage.removeItem("userName");
        hideButton(buttonUserName);
        hideButton(inputName);
        hideButton(buttonLogout);
        showButton(buttonModalOpen);
        checkBoxRemember.checked = false;
    }
    
}

// Закрытие окна логинации тапом вне поля

modalContent.onclick = (event) => {
    event.stopPropagation();
}

modalCloseElements.forEach((item) => {
    item.onclick = (event) => {
        modal.classList.remove('open');
    }
})






