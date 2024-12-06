function addItem() {
    let inputRef = document.querySelector('input#newItemText');
    let UlistRef = document.querySelector('ul#items');

    // Create new <li> element
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputRef.value;

    // Create new <a> element
    let newAnchorElement = document.createElement('a');
    newAnchorElement.href = '#';
    newAnchorElement.textContent = '[Delete]'
    // Delete by target
    newAnchorElement.addEventListener('click', liDelete);

    // Delete by reference
        // newAnchorElement.addEventListener('click', (event) => {
        //     newLiElement.remove()
        // });

    // Append the element to the UL
    newLiElement.append(newAnchorElement)
    UlistRef.append(newLiElement)

    // Clear the input
    clearField(inputRef)


    function liDelete(event) {
        event.target.parentElement.remove();
    }

    function clearField(field) {
        field.value = '';
        field.focus();
    }
}