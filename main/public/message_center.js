function sendMessage() {
    let userMessage = document.getElementById("userMessage").value;
    let chatBox = document.getElementById("chatBox");

    if (userMessage.trim() === "") return; // Prevent sending empty messages

    let currentTime = getCurrentTime();

    let userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "sent");
    userMessageElement.innerHTML = `<p><strong>You:</strong> ${userMessage}</p><span class="time">${currentTime}</span>`;

    chatBox.appendChild(userMessageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("userMessage").value = "";

    setTimeout(sendM2FResponse, 1000);
}

function sendM2FResponse() {
    let chatBox = document.getElementById("chatBox");

    let currentTime = getCurrentTime();

    let m2fMessageElement = document.createElement("div");
    m2fMessageElement.classList.add("message", "received");
    m2fMessageElement.innerHTML = `<p><strong>M2F:</strong> Thank you for reaching out us. Our customer support will contact you as soon as possible</p><span class="time">${currentTime}</span>`;

    chatBox.appendChild(m2fMessageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

window.onload = function () {
    document.getElementById("m2fTime").textContent = getCurrentTime();
};