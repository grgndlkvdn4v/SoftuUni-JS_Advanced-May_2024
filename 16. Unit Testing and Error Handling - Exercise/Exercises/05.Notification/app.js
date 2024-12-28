function notify(message) {
  const buttonRef = document.getElementsByTagName('button');
  const notificationDivRef = document.querySelector('div#notification')

  notificationDivRef.textContent = message;
  notificationDivRef.style.display = 'block'
}
