document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyValue = getInputValueById('inputAmount');
    const pinValue = getInputValueById('pin');

    if (pinValue === 1234) {
        const textValueNumber = getTextValueById('accBalance');
        const newBalance = addMoneyValue + textValueNumber;
        document.getElementById('accBalance').innerText = newBalance;

    }
    else {
        alert('Failed to add money. Please try again later.')
    }
})