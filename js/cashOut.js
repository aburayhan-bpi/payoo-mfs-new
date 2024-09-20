document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyValue = getInputValueById('cashOutAmount');
    const pinValue = getInputValueById('cashOutPin');

    if (pinValue === 1234) {
        const balance = getTextValueById('accBalance');
        const newBalance = balance - addMoneyValue;
        document.getElementById('accBalance').innerText = newBalance;
        // console.log(newBalance);
    }
    else {
        alert('Failed to cash out.')
    }
})