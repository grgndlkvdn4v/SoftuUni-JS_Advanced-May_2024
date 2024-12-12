function attachEventsListeners() {
    let inputElements = document.querySelectorAll('input[type=text]');
    let buttonElements = document.querySelectorAll('input[type=button]');

    for (const button of Array.from(buttonElements)) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        // Get the input value and the associated label
        let inputElement = event.currentTarget.parentElement.querySelector('input[type=text]');
        let input = Number(inputElement.value);
        let label = event.currentTarget.parentElement.querySelector('label').getAttribute('for');

        // Conversion factors (base unit: seconds)
        let secondsObj = {
            seconds: 1,
            minutes: 60,
            hours: 3600,
            days: 86400
        };

        // Convert input into seconds
        let totalSeconds = input * secondsObj[label];

        // Derive all time units based on totalSeconds
        let resultObj = {
            seconds: totalSeconds,
            minutes: totalSeconds / 60,
            hours: totalSeconds / 3600,
            days: totalSeconds / 86400
        };

        // Update all input fields
        for (const input of Array.from(inputElements)) {
            let currInputLabel = input.getAttribute('id'); // Match ID with resultObj keys
            input.value = resultObj[currInputLabel];        }
    }
}
