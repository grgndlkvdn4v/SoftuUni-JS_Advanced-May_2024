function validate() {
    const submitButtonRef = document.querySelector('button#submit');
    submitButtonRef.addEventListener('click', onSubmit);

    let usernameRef = document.querySelector('input#username');
    let emailRef = document.querySelector('input#email');
    let passwordRef = document.querySelector('input#password');
    let confirmPassRef = document.querySelector('input#confirm-password');
    let isCompanyRef = document.querySelector('input#company');
    
    let companyNumRef = document.querySelector('input#companyNumber');
    isCompanyRef.addEventListener('change', showHideCompany);

    function onSubmit(event) {
        event.preventDefault();
        validateInput.username();
        validateInput.email();
        validateInput.password();
        validateInput.confirmPass();
        validateInput.companyNum();

        areAllFieldsValid(isInputValid)        
    }

    let pattern;
    let isInputValid = {
        username: false,
        email: false,
        password: false,
        confirmPass: false,
        companyNum: false
    }
    let validateInput = {
        username: function () {
            pattern = /([\w\d]{4,19})/g;
            condition = usernameRef.value.match(pattern);
            setBorder(usernameRef, condition, 'username')
        },
        email: function () {
            pattern = /^[^@]+@[^@]+\.[^@]+$/g;
            condition = emailRef.value.match(pattern);
            setBorder(emailRef, condition, 'email');
        },
        password: function () {
            pattern = /^\w{5,15}$/g;
            let condition = passwordRef.value.match(pattern)
            setBorder(passwordRef, condition, 'password')
        },
        confirmPass: function () {
            let condition1 = passwordRef.value === confirmPassRef.value;
            let condition2 = confirmPassRef.value !== ''
            setBorder(confirmPassRef, condition1 && condition2, 'confirmPass');
        },
        companyNum: function () {
            let condition = companyNumRef.value >= 1000 && companyNumRef.value <= 9999;
            setBorder(companyNumRef, condition, 'companyNum')
        }
    }

    function setBorder(field, condition, flag) {
        if ( condition ) {
            field.style.border = 'none';
            isInputValid[flag] = true;
        } else {
            field.style.border = 'solid red';
            isInputValid[flag] = false;
        }
        return field
    }

    function showHideCompany(event) {
        let companyInfo = document.querySelector('fieldset#companyInfo');
        if (isCompanyRef.checked) {
            companyInfo.style.display = 'inline';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function areAllFieldsValid(isInputValid) {
        console.table(isInputValid);

        let validDivRef = document.querySelector('div#valid');
        for (const flag in isInputValid) {
            if (!isInputValid[flag]) {
                validDivRef.style.display = 'none';
                return false
            }
        }
        validDivRef.style.display = 'inline';
        return true
    }
}
