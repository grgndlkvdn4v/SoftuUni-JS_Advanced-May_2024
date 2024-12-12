function validate() {
    let emailFieldRef = document.querySelector('input#email');
    
    emailFieldRef.addEventListener('change', validation)
    
    function validation(event) {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]{2,}$/

        let emailInput = emailFieldRef.value;

        if ( pattern.test(emailInput) ) {
            emailFieldRef.classList.remove('error')
        } else {
            emailFieldRef.classList.add('error')
        }
    }
}