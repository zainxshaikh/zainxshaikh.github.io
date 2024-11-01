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
    const message = userMessage.toLowerCase();
    let botResponse;

    if (message.includes("hello") || message.includes("hi")) {
        botResponse = "Hi there! How can I help you today?";
    } else if (message.includes("how are you")) {
        botResponse = "I'm just a program, but thanks for asking! How can I assist you?";
    } else if (message.includes("help") || message.includes("support")) {
        botResponse = "Sure! What do you need help with?";
    } else if (message.includes("your name")) {
        botResponse = "I am a simple chatbot created to assist you!";
    } else if (message.includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
    } else {
        botResponse = "I'm sorry, I don't understand. Can you please rephrase?";
    }
    
    setTimeout(() => {
        displayMessage(botResponse, "bot-message");
    }, 500);
}

function scrollToBottom() {
    const messages = document.getElementById("messages");
    messages.scrollTop = messages.scrollHeight;
}
