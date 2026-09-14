
const writeBevChoice = () => {
    const bevChoice = document.getElementById("beverages").value;
    const bevMessage = document.getElementById("bev-message")

    bevMessage.innerHTML = bevChoice + ": Nice Choice!";
}

const drawBubble = (event) => {
    event.stopPropagation();
    const speechArea = event.currentTarget;
    const rect = speechArea.getBoundingClientRect();
    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    bubble.textContent = "Hello!";
    bubble.style.left = (event.clientX - rect.left) + 'px';
    bubble.style.top = (event.clientY - rect.top) + 'px';
    speechArea.appendChild(bubble);
}

const drawEmoji = (event) => {
    event.stopPropagation();
    const emojiArea = document.getElementById('emoji-draw');
    const rect = emojiArea.getBoundingClientRect();
    const emoji = document.createElement('span');
    emoji.className = 'emoji-sticker';
    emoji.style.pointerEvents = 'none';
    emoji.innerHTML = "&#127829;";
    emoji.style.left = (event.clientX - rect.left) + 'px';
    emoji.style.top = (event.clientY - rect.top) + 'px';
    emojiArea.appendChild(emoji);
}


window.onload = () => {
    document.getElementById('beverages').onchange= writeBevChoice;
    document.getElementById('speech-area').onclick= drawBubble;
    document.getElementById('emoji-draw').onclick= drawEmoji;
};