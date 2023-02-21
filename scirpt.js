function checkAll(className) {
    let radios = document.getElementsByClassName(className)
    Array.from(radios).map(x => x.checked = "true")
}

function uncheckAll() {
    let radios = document.getElementsByTagName("input")
    Array.from(radios).map(x => x.checked = "")
}

function openLogin() {
    document.getElementById("login-popup").style.display = "block"
    document.getElementById("open-login-button").style.display = "none"
    document.getElementById("login-info").style.display = "none"
}

function closeLogin() {
    document.getElementById("login-popup").style.display = "none"
    document.getElementById("open-login-button").style.display = "block"
    document.getElementById("login-info").style.display = "none"
}

function submitLogin() {
    // make a POST rewuest with login details
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
}
