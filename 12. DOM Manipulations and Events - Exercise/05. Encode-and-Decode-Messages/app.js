function encodeAndDecodeMessages() {
    let sendMessageDiv = document.querySelector('main div:nth-child(1)');
    let recieveMessageDiv = document.querySelector('main div:nth-child(2)');

    sendMessageDiv.querySelector('button').addEventListener('click', send);
    recieveMessageDiv.querySelector('button').addEventListener('click', recieve);
    

    function send() {
        let encodedMessage = ''
        let text = sendMessageDiv.querySelector('textarea').value;
        
        for (let i = 0; i < text.length; i++) {
            const currChar = text.charCodeAt(i);
            const encodedChar = String.fromCharCode(currChar + 1);
            encodedMessage += encodedChar;
        }
        
        recieveMessageDiv.querySelector('textarea').value = encodedMessage;
        sendMessageDiv.querySelector('textarea').value = '';
    }

    function recieve() {
        let decodedMessage = '';
        let encodedMessage = recieveMessageDiv.querySelector('textarea').value;
        
        for (let i = 0; i < encodedMessage.length; i++) {
            const currChar = encodedMessage.charCodeAt(i);
            const decodedChar = String.fromCharCode(currChar - 1);
            decodedMessage += decodedChar;
        }
        
        console.log(decodedMessage);
        recieveMessageDiv.querySelector('textarea').value = decodedMessage
    }
}