
function validateLogin(username, password) {
    if (username === "ABCDE" && password === "1234") {
        return "Login Successful";
    } else {
        return "Invalid Login Credentials";
    }
}

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const user = document.getElementById("Username").value;
    const pass = document.getElementById("Password").value;

    const message = validateLogin(user, pass);
    const messageElement = document.getElementById("message");

    messageElement.textContent = message;

    if (message === "Login Successful") {
        messageElement.style.color = "green";
    } else {
        messageElement.style.color = "red";
    }
});