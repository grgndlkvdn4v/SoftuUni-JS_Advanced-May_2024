function toggle() {
    let btnElement = document.querySelector('span.button');
    let textElement = document.getElementById('extra');

    switch (btnElement.textContent) {
        case 'More': 
            btnElement.textContent = 'Less';
            textElement.style.display = 'block';
            break;
        case 'Less': 
            btnElement.textContent = 'More'; 
            textElement.style.display = 'none';
            break;
    }
}