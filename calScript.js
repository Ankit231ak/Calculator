let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', JSON.stringify(calculation));
  const display = document.getElementById('show');
  display.value = calculation;
  display.scrollLeft = display.scrollWidth;
}

function calculateResult() {
  try {
    calculation = eval(calculation).toString();
    localStorage.setItem('calculation', JSON.stringify(calculation));
    const display = document.getElementById('show');
    display.value = calculation;
    display.scrollLeft = display.scrollWidth;
  } catch (e) {
    calculation = '';
    document.getElementById('show').value = 'Error';
  }
}

function clearCalculation() {
  calculation = '';
  localStorage.setItem('calculation', JSON.stringify(calculation));
  document.getElementById('show').value = '';
}

function handleKeyPress(event) {
  event.preventDefault();
  console.log(event)

  const key = event.key;
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+'];

  if (allowedKeys.includes(key)) {
    updateCalculation(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (event.key === 'Backspace' && event.shiftKey){
    clearCalculation()
  } else if (key === 'Backspace') {
    backspace()
  } 
}
  function backspace(){
      calculation = calculation.slice(0, -1);
      localStorage.setItem('calculation', JSON.stringify(calculation));
      document.getElementById('show').value = calculation;
  }

document.getElementById('show').value = calculation;