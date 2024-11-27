function editElement(reference, match, replacer) {
    reference.textContent = reference.textContent.replaceAll(match, replacer)
}