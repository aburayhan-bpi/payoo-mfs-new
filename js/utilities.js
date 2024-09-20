function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // return number
    return inputNumber;
}

// for text field
function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    textValueNumber = parseFloat(textValue);
    return textValueNumber;
}


// for toggle options
function showSectionById(id) {
    // hide all the sections
    document.getElementById('addMoneySection').classList.add('hidden');
    document.getElementById('cashOutSection').classList.add('hidden');
    document.getElementById('transactionSection').classList.add('hidden');

    // show section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');

}