function focused() {
    let inputElements = Array.from(document.querySelectorAll('input'));

    inputElements.forEach(el => el.addEventListener('focus', highlight));
    inputElements.forEach(el => el.addEventListener('blur', unhighlight));
    

    function highlight(event) {
        event.currentTarget.parentElement.classList.add('focused')
    }
    
    function unhighlight(event) {
        event.currentTarget.parentElement.classList.remove('focused')
    }
}