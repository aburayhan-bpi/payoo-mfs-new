document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyValue = getInputValueById('inputAmount');
    const pinValue = getInputValueById('pin');

    if (isNaN(addMoneyValue)) {
        alert('Failed to add money.')
        return;
    }

    if (pinValue === 1234) {
        const textValueNumber = getTextValueById('accBalance');

        const newBalance = addMoneyValue + textValueNumber;
        document.getElementById('accBalance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Added: ${addMoneyValue}. New Balance: Tk. ${newBalance}`;
        // console.log(p);

        // we should use common function for this
        document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert('Failed to add money. Please try again later.')
    }
})