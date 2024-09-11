// script.js
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('proposalContainer').innerHTML = `
        <h1>I Love Youuuuuuu</h1>
        <p>Thank you for saying yes. I can't wait to spend the rest of my life with you Penguin.</p>
        <button onclick="window.location.reload()">Start Over</button>
    `;
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('proposalContainer').innerHTML = `
        <h1>Why U Click No...</h1>
        <p>You are only mine. You can't Run From me.</p>
        <button onclick="window.location.reload()">Start Over</button>
    `;
});
