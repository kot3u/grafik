const biggerButton = document.getElementById('bigger-button-1');
const bigButton = document.getElementById('big-button-1');
const midButton = document.getElementById('medium-button-1');
const smallButton = document.getElementById('small-button-1');
const customInput = document.getElementById('input-1');
const submitBtn = document.getElementById('submit-button-1');
const outputText = document.getElementById('output');
let hour = 0;

let add_hour =  (value) => {
  hour += value;
  outputText.textContent = `${hour} godzin`;
};

let getCustomInput = () =>{
  input = customInput.value;
  convertTime(input)
}

let convertTime = (input) =>{
  let arr = input.split(':');
  let temp = (parseInt(arr[0]) + parseInt(arr[1]) / 60)
  if (typeof temp !== 'number' || isNaN(temp)) {
    temp = 0;
    outputText.textContent = `nie wprowadzono godziny, aktualna wartość - to ${hour} godzin`
  }
  else {
    hour += temp
    outputText.textContent = `${hour} godzin`
  };
};


biggerButton.addEventListener('click', function() {add_hour(10)}
);

bigButton.addEventListener('click', function () {add_hour(8.50)}
);

midButton.addEventListener('click', function () {add_hour(7.50)}
);

smallButton.addEventListener('click', function () {add_hour(6)}
);

submitBtn.addEventListener('click', function() {getCustomInput()});

