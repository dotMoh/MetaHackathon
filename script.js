const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

function addMessage(message, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", type === "user" ? "user-message" : "bot-message");
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; 
}

sendButton.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");
    chatInput.value = "";


    setTimeout(() => {
      addMessage("This is a bot response.", "bot");
    }, 1000);
  }
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendButton.click();
  }
});
