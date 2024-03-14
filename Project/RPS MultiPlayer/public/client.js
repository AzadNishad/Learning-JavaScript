// const socket = io();

// socket.on('message', function (msg) {
//     console.log(msg);
// });

// document.querySelectorAll('#choices button').forEach(button => {
//     button.addEventListener('click', function () {
//         const choice = this.id;
//         socket.send(choice);
//     });
// });

// Load Socket.IO script asynchronously
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.2.0/socket.io.js';
script.onload = function () {
    // Socket.IO is loaded, execute client.js code
    const socket = io();

    socket.on('opponentName', function (opponentName) {
        // Display opponent's name on the webpage
        document.getElementById('opponentName').textContent = opponentName;
    });
    socket.on('yourName', function (yourName) {
        // Display opponent's name on the webpage
        document.getElementById('yourName').textContent = yourName;
    });

    socket.on('message', function (msg) {
        console.log(msg);
        // Assuming there's a div element with id "gameResult" to display the result
        document.getElementById('result').textContent = msg;
    });

    document.querySelectorAll('#choices button').forEach(button => {
        button.addEventListener('click', function () {
            const choice = this.id;
            socket.send(choice);
        });
    });
};
script.onerror = function () {
    console.error('Failed to load Socket.IO script');
};
document.head.appendChild(script);