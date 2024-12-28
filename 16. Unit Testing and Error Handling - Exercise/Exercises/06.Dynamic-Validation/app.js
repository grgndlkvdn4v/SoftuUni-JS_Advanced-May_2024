function validate() {
    const inputRef = document.querySelector('input#email')
    inputRef.addEventListener('change', testEmailField)

    function testEmailField(event) {
        let pattern = /^[^@]+@[^.]+\.[a-zA-Z]{2,}/g;
        
        if (pattern.test(inputRef.value)) {
            inputRef.classList.remove('error');
        } else {
            inputRef.classList.add('error');
            console.warn("Email field is not following the pattern")
        }
    }
}