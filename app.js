// catch calculat button 
document.getElementById('calculateButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const foodInput = document.getElementById('foodFor');
  const rentInput = document.getElementById('rentFor');
  const clothesInput = document.getElementById('clothesFor');
  const showTotalExpenses = document.getElementById('totalExpensesInner');
  const showBalance = document.getElementById('balanceInner');

  // error handling
  if(isNaN(parseFloat(incomeInput.value)) || parseFloat(incomeInput.value) <= 0){
    incomeInput.value = 'please type number, minimum 1';
  }

  const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);

  showTotalExpenses.innerText = totalExpenses.toFixed(2);
  showBalance.innerText =  (parseFloat(incomeInput.value) - totalExpenses).toFixed(2);
})

// catch save button 
document.getElementById('saveButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const savingInput = document.getElementById('savingInput');
  const showSaving = document.getElementById('savingInner');
  const showBalance = document.getElementById('balanceInner');
  const showRemaining =document.getElementById('remainingInner');

  const getSavingAmount = parseFloat(incomeInput.value) * (parseFloat(savingInput.value) / 100);

  showSaving.innerText = getSavingAmount.toFixed(2);
  showRemaining.innerText = (parseFloat(showBalance.innerText) - parseFloat(getSavingAmount)).toFixed(2)
})