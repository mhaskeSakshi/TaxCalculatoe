function calculateTax(income, extraIncome, deductions, age) {
    let totalIncome = income + extraIncome - deductions;
    let taxAmount = 0;

    if (totalIncome <= 800000) {
        taxAmount = 0;
    } else {
        let taxableIncome = totalIncome - 800000;
        if (age === "<40") {
            taxAmount = taxableIncome * 0.3;
        } else if (age === ">=40&<60") {
            taxAmount = taxableIncome * 0.4;
        } else if (age === ">=60") {
            taxAmount = taxableIncome * 0.1;
        }
    }

    return taxAmount;
}

document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let age = document.getElementById('age').value;
    let income = parseFloat(document.getElementById('income').value) || 0;
    let extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    let deductions = parseFloat(document.getElementById('deductions').value) || 0;

    let taxAmount = calculateTax(income, extraIncome, deductions, age);
    showModal(taxAmount);
});

function showModal(taxAmount) {
    let modal = document.getElementById('modal');
    let modalResult = document.getElementById('modalResult');
    modalResult.innerText = `Tax Amount: $${taxAmount.toFixed(2)}`;
    modal.classList.remove('hidden');
}

document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        closeModal();
    }
});

function closeModal() {
    let modal = document.getElementById('modal');
    modal.classList.add('hidden');
}
