document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        appendMessage("User", userInput);
        getBotResponse(userInput);
        document.getElementById("user-input").value = "";
    }
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

async function getBotResponse(userInput) {
    try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });

        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        appendMessage("Bot", data.message);
    } catch (error) {
        console.error('Error:', error);
        appendMessage("Bot", "I'm having trouble understanding you right now.");
    }
}
