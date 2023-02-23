const bigButton = document.getElementById('big-button-1');
const midButton = document.getElementById('medium-button-1');
const smallButton = document.getElementById('small-button-1');
const customInput = document.getElementById('input-1');
const submitBtn = document.getElementById('submit-button-1');
const outputText = document.getElementById('output');
let hour = 0;

let add_hour =  (value) => {
  hour += value;
  outputText.textContent = `${hour} - godzin`
};

let getCustomInput = () =>{
  input = customInput.value;
  convertTime(input)
}

let convertTime = (input) =>{
  let arr = input.split(':');
  hour += (parseInt(arr[0]) + parseInt(arr[1])/60)
  outputText.textContent = `${hour} - godzin`
}


bigButton.addEventListener('click', function() {add_hour(10)}
);

midButton.addEventListener('click', function () {add_hour(7.50)}
);

smallButton.addEventListener('click', function () {add_hour(6)}
);

submitBtn.addEventListener('click', function() {getCustomInput()})

