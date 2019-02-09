
const calculateBtn = document.getElementById('calculate-btn');

const form = document.getElementById('form');

const gender = document.getElementById('gender-select');

const height = document.getElementById('height-input');

const weight = document.getElementById('weight-input');

const output = document.getElementById('output');

const againBtn = document.getElementById('again-btn');


calculateBtn.addEventListener('click',calculateBmi);

document.getElementById('again-btn').style.visibility = 'hidden';

output.style.visibility = 'hidden';

againBtn.addEventListener('click',calculateAgain);


function calculateBmi() {

  let heightVal = parseInt(height.value) / 100;

  let weightVal = parseInt(weight.value);
  
  let bmi = weightVal / (heightVal * heightVal);

  if(isNaN(bmi)) {
   
    output.innerHTML = `<p class="font-weight-bold text-danger p-2">Please enter correct 
    value! Only numbers are acceptable</p>`;

    output.style.visibility = 'visible';

    document.getElementById('again-btn').style.visibility = 'visible';

  } else {

  if(frm.sel.selectedIndex == 0){
  getMaleWeight();
} else {
  getFemaleWeight();
}
  
  output.style.visibility = 'visible';

  document.getElementById('again-btn').style.visibility = 'visible';

  disableInputs(); 

  }

}

function getMaleWeight() {

  let heightVal = parseInt(height.value) / 100;

  let weightVal = parseInt(weight.value);
  
  let bmi = weightVal / (heightVal * heightVal);

  if(bmi < 18) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">You are malnourished! Increase your body fat.</p>`;  
  }
  
  if(bmi >= 18 && bmi < 25) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">Your body fat is on normal level. Ideal Weight!</p>`; 
  }
  
  if(bmi >= 25 && bmi < 30) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">You are overweight. Reduce body fat.</p>`; 
  }
  
  if(bmi >= 30) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">You have high body fat. You need strict diet!</p>`; 
  }
}

function getFemaleWeight() {

  let heightVal = parseInt(height.value) / 100;

  let weightVal = parseInt(weight.value);
  
  let bmi = weightVal / (heightVal * heightVal);

  if(bmi < 18) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">Increase your body fat. Anorexia.</p>`;
  }
  
  if(bmi >= 18 && bmi < 22) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">Lowest body weight. Ideal.</p>`;
  }
  
  if(bmi >= 22 && bmi < 25) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">Middle normal body weight. Ideal.</p>`;
  }
  
  if(bmi >= 25 && bmi < 30) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">Highest normal body weight.</p>`;
  }
  
  if(bmi >= 30 && bmi < 40) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">You are overweight. Obesity</p>`;
  }
  
  if(bmi >= 40) {
    output.innerHTML = `<p class="font-weight-bold text-success p-2">Morbid Obesity</p>`;
  }
}

function disableInputs() {

  gender.disabled = true;

  height.disabled = true;

  weight.disabled = true;
}

function calculateAgain() {
  
  window.location.reload();
}

