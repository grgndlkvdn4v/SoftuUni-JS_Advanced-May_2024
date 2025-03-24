window.addEventListener('load', solve);

function solve() {
    let formElem = document.querySelector('form');
    let nextBtn = document.querySelector('button#next-btn');
    let vocationInfoULelem = document.querySelector('.info-list');
    let confirmVacationULelem = document.querySelector('.confirm-list');
    let statusH1elem = document.querySelector('h1#status');

    nextBtn.addEventListener('click', addVacation);
    statusH1elem.addEventListener('click', reload);

    let formObj = {
        firstName: formElem.querySelector('#first-name'),
        lastName: formElem.querySelector('#last-name'),
        fromDate: formElem.querySelector('#from-date'),
        toDate: formElem.querySelector('#to-date'),
    };
    let formArr;


    function addVacation(e) {
        e.preventDefault()

        let formHasEmptyField = Object.values(formObj).some(elem => elem.value === '');
        let validDate = new Date(formObj.toDate.value) > new Date(formObj.fromDate.value)

        if (formHasEmptyField || !validDate) {
            console.warn("not valid date or empty field");
            return
        }

        formArr = [
            formObj.firstName.value,
            formObj.lastName.value,
            formObj.fromDate.value,
            formObj.toDate.value
        ];

        let liElem = createLIelem('Vacation info')
        vocationInfoULelem.appendChild(liElem);

        Object.values(formObj).forEach(input => {
            input.value = '';
        });

        nextBtn.setAttribute('disabled', 'disabled')
    }

    function createArticle() {
        let articleElem = document.createElement('article');

        let headingElem = document.createElement('h3');
        headingElem.textContent = `Name: ${formArr[0]} ${formArr[1]}`

        let formDateParagElem = document.createElement('p');
        formDateParagElem.textContent = `From date: ${formArr[2]}`;

        let toDateParagElem = document.createElement('p');
        toDateParagElem.textContent = `To date: ${formArr[3]}`;

        articleElem.appendChild(headingElem);
        articleElem.appendChild(formDateParagElem);
        articleElem.appendChild(toDateParagElem);

        return articleElem
    }

    function createLIelem(forElem) {
        let liElem = document.createElement('li');
        liElem.classList.add('vocaion-content');

        let articleElem = createArticle();

        let firstButton = document.createElement('button');
        let secondButton = document.createElement('button');

        switch (forElem) {
            case 'Vacation info':
                firstButton.textContent = 'Edit';
                firstButton.classList.add('edit-btn');
                firstButton.addEventListener('click', editVacation);

                secondButton.textContent = 'Continue';
                secondButton.classList.add('continue-btn');
                secondButton.addEventListener('click', continueVacation);
                break;

            case 'Confirm Vacation':
                firstButton.textContent = 'Confirm';
                firstButton.classList.add('confirm-btn');
                firstButton.addEventListener('click', confirmVacation);

                secondButton.textContent = 'Cancel';
                secondButton.classList.add('cancel-btn');
                secondButton.addEventListener('click', cancelVacation);
                break;
        }

        liElem.appendChild(articleElem)
        liElem.appendChild(firstButton)
        liElem.appendChild(secondButton)

        return liElem
    }

    function editVacation(e) {

        let liElem = e.currentTarget.parentElement;
        liElem.remove();

        Object.values(formObj).forEach((input, i) => {
            input.value = formArr[i];
        });

        nextBtn.removeAttribute('disabled');
    }

    function continueVacation(e) {
        let removeLI = e.currentTarget.parentElement;
        removeLI.remove();

        let liElem = createLIelem('Confirm Vacation');
        confirmVacationULelem.appendChild(liElem)

    }

    function confirmVacation(e) {
        let removeLI = e.currentTarget.parentElement;
        removeLI.remove();

        statusH1elem.textContent = 'Vacation Requested';
        statusH1elem.classList.add('vacation-confirmed');
    }

    function cancelVacation(e) {
        let removeLI = e.currentTarget.parentElement;
        removeLI.remove();

        statusH1elem.textContent = 'Cancelled Vacation';
        statusH1elem.classList.add('vacation-cancelled');
    }

    function reload(e) {
        e.currentTarget.textContent = '';
        e.currentTarget.classList.remove('vacation-cancelled', 'vacation-confirmed');

        nextBtn.removeAttribute('disabled');
    }

}