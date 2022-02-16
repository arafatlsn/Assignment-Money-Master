// catch calculat button 
document.getElementById('calculateButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const foodInput = document.getElementById('foodFor');
  const rentInput = document.getElementById('rentFor');
  const clothesInput = document.getElementById('clothesFor');
  const showTotalExpenses = document.getElementById('totalExpensesInner');
  const showBalance = document.getElementById('balanceInner');

  // error handling
  if(isNaN(incomeInput.value) || incomeInput.value <= 0 || incomeInput.value == ''){
    document.getElementById('incomeError').style.display = 'block'
    return
  }
  else{
    document.getElementById('incomeError').style.display = 'none'
  }

  const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
  if(totalExpenses > parseFloat(incomeInput.value)){
    alert('your expense over your income. are you kidding me')
  }
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