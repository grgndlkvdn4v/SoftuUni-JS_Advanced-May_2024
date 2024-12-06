function deleteByEmail() {
    let inputRef = document.querySelector('input[name=email]');
    let searchTerm = inputRef.value;
    let resultRef = document.getElementById('result');

    let tdElements = document.querySelectorAll('tbody tr td:nth-child(2n)');
    
    for (const td of Array.from(tdElements)) {
        if (searchTerm === td.textContent) {
            td.parentElement.remove()
            resultRef.textContent = 'Deleted.';
            break;
        } else {
            resultRef.textContent = 'Not found.';
        }
    }
    clearField();
    
    function clearField() {
        inputRef.value = '';
        inputRef.focus();
    }
}