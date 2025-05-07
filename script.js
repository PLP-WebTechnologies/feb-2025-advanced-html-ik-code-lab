
window.onload = function () {
    const giveawayText = document.getElementById("giveawayText");
    giveawayText.textContent = "We appreciate our retired teachers and lecturers!";
    giveawayText.style.color = "#008000";

    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", () => {
        const message = document.getElementById("message");
        message.textContent = "Thank you for registering!";
        message.style.color = "#0000FF";
    });

    const newElement = document.createElement("p");
    newElement.textContent = "A new paragraph added dynamically.";
    document.body.appendChild(newElement);
    newElement.style.marginTop = "20px";
    newElement.style.fontWeight = "bold";
};

