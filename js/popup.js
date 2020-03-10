var link = document.querySelector(".main-contacts-btn");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=username]");
var password = popup.querySelector("[name=useremail]");
var isStorageSupport = true;
var storage = "";


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-login-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-login-show");
    popup.classList.remove("modal-login-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-login-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-login-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-login-show")) {
            popup.classList.remove("modal-login-show");
            popup.classList.remove("modal-login-error");
        }
    }
})
