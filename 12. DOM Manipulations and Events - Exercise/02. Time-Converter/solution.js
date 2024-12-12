function attachEventsListeners() {
    let inputElements = document.querySelectorAll('input[type=text]');
    let buttonElements = document.querySelectorAll('input[type=button]');

    for (const button of Array.from(buttonElements)) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let inputElement = event.currentTarget.parentElement.querySelector('input[type=text]');
        let input = Number(inputElement.value);
        let label = event.currentTarget.parentElement.querySelector('label').getAttribute('for');

        const conbertedObj = createConvertedObj(label, input);

        for (const input of Array.from(inputElements)) {
            let currInputLabel = input.getAttribute('id')
            input.value = conbertedObj[currInputLabel];
        }

    }

    function createConvertedObj(label, input) {
        let days, hours, minutes, seconds = '';

        switch (label) {
            case 'days':
                days = input;
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;
            case 'hours':
                hours = input;
                minutes = hours * 60;
                seconds = minutes * 60;
                days = hours / 24;
                break;
            case 'minutes':
                minutes = input;
                seconds = minutes * 60;
                hours = minutes / 60;
                days = hours / 24;
                break;
            case 'seconds':
                seconds = input;
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
                break;
        }

        let obj = {
            days,
            hours,
            minutes,
            seconds
        };
        return obj
    }
}