// catch calculat button 
document.getElementById('calculateButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const foodInput = document.getElementById('foodFor');
  const rentInput = document.getElementById('rentFor');
  const clothesInput = document.getElementById('clothesFor');
  const showTotalExpenses = document.getElementById('totalExpensesInner');
  const showBalance = document.getElementById('balanceInner');

  const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);

  showTotalExpenses.innerText = totalExpenses;
  showBalance.innerText =  parseFloat(incomeInput.value) - totalExpenses;
})