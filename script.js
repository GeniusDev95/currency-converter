// Fixed Conversion Rates
const conversionRates = {
    USD: { PKR: 277.62, EUR: 0.95 },
    EUR: { PKR: 294.12, USD: 1.06 },
    PKR: { USD: 0.0036, EUR: 0.0034 },
};

// Function to handle conversion
function convertCurrency() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('resultDisplay').innerText = 'Please enter a valid amount.';
        return;
    }

    const rate = conversionRates[sourceCurrency] && conversionRates[sourceCurrency][targetCurrency];

    if (rate) {
        const convertedAmount = amount * rate;
        document.getElementById('resultDisplay').innerText = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency} `;
    } else {
        document.getElementById('resultDisplay').innerText = 'Conversion rate not found.';
    }
}

// Function to clear the input and result
function clearFields() {
    document.getElementById('sourceCurrency').value = "USD";
    document.getElementById('targetCurrency').value = "INR";
    document.getElementById('amount').value = '';
    document.getElementById('resultDisplay').innerText = '';
}

// Event Listeners
document.getElementById('convertButton').addEventListener('click', convertCurrency);
document.getElementById('clearButton').addEventListener('click', clearFields);