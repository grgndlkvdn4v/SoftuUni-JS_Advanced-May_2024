function lockedProfile() {
    let inputs = document.querySelectorAll('input[type=radio]');
    let showMoreButtons = document.querySelectorAll('button');
    let status = '';

    inputs.forEach(input => input.addEventListener('change', locker));
    showMoreButtons.forEach(button => button.addEventListener('click', showMore));


    function locker(event) {
        let userRadiobuttons = event.currentTarget.parentElement.querySelectorAll('input[type=radio]');
        let condition = userRadiobuttons[0].checked && !userRadiobuttons[1].checked;

        condition ? status = 'Lock' : status = 'Unlock'
    }

    function showMore(event) {
        let hiddenData = event.currentTarget.parentElement.querySelector('div.profile div')
        let button = event.currentTarget

        if (status === 'Unlock') {
            switch (button.textContent) {
                case 'Show more':
                    hiddenData.style.display = 'inline';
                    button.textContent = 'Show less';
                    break;
                case 'Show less':
                    hiddenData.style.display = 'none'; 
                    button.textContent = 'Show more';
                    break;
            }
        }
                
    }
}