document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyValue = getInputValueById('cashOutAmount');
    const pinValue = getInputValueById('cashOutPin');

    if (isNaN(addMoneyValue)) {
        alert('Failed to add money.')
        return;
    }

    if (pinValue === 1234) {
        const balance = getTextValueById('accBalance');
        if (addMoneyValue > balance) {
            alert('Failed to cash out.');
            return;
        }
        const newBalance = balance - addMoneyValue;
        document.getElementById('accBalance').innerText = newBalance;


        const div = document.createElement('div');
        div.classList.add('bg-amber-200')
        div.innerHTML = `
            <h2 class="font-bold">Cash out</h2>
            <p>${addMoneyValue} withdrawn. Reamining balance: ${newBalance}</p>
        
        `
        document.getElementById('transaction-container').appendChild(div);

    }
    else {
        alert('Failed to cash out.')
    }
})