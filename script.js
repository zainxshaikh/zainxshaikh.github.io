document.getElementById("sendBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value;
    
    if (userMessage.trim()) {
        displayMessage(userMessage, "user-message");
        userInput.value = "";
        generateBotResponse(userMessage);
    }
});

function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    document.getElementById("messages").appendChild(messageElement);
    scrollToBottom();
}

function generateBotResponse(userMessage) {
    // Basic responses for demonstration
    let botResponse;
    if (userMessage.toLowerCase() === "hello") {
        botResponse = "Hi there! How can I help you?";
    } else {
        botResponse = "I'm sorry, I don't understand.";
    }
    
    setTimeout(() => {
        displayMessage(botResponse, "bot-message");
    }, 500);
}

function scrollToBottom() {
    const messages = document.getElementById("messages");
    messages.scrollTop = messages.scrollHeight;
}
