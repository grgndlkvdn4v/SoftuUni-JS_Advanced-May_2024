function addItem() {
    let inputTextRef = document.getElementById('newItemText');
    let inputvalueRef = document.getElementById('newItemValue');
    let dropdown = document.querySelector('select#menu');

    let newOption = document.createElement('option');
    newOption.textContent = inputTextRef.value;
    newOption.value = inputvalueRef.value;

    dropdown.append(newOption)
    
    clearInputs();

    function clearInputs() {
        inputTextRef.value = '';
        inputvalueRef.value = '';
        inputTextRef.focus();
    }
}