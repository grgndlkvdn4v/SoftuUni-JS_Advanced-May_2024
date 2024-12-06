function addItem() {
    let inputRef = document.querySelector('input#newItemText');
    let UlistRef = document.querySelector('ul#items');

    // Create new element
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputRef.value;

    // Append the element to the UL
    UlistRef.append(newLiElement)

    // Clear the input
    inputRef.value = '';
    inputRef.focus();
}