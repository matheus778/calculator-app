let display = document.querySelector('.calc-display');
let keyboardButtons = document.querySelectorAll('.calc-buttons-container button');
let buttonCalc = document.querySelector(".btn-calc");

const INITIAL_NUMBER_DISPLAY = 0;
display.textContent = INITIAL_NUMBER_DISPLAY

let mathOperation = null;
let number1 = 0 , number2 = 0, numberAux = 0;
let calcResult = 0;


keyboardButtons.forEach( button => {
  button.addEventListener('click', () => {

    if(display.textContent == INITIAL_NUMBER_DISPLAY) {

      let bt = button.textContent;
      if(bt == '+' || bt == '-' || bt == '/' || bt == 'X' || bt == 'RESET' || bt == 'DEL' || bt == '=') {
        return
      }

      display.textContent = button.textContent;
    }

    else {
      switch (button.textContent) {
        case '+':
          mathOperation = 'sum';
          number1 = Number(display.textContent);
          number2 = 0;
          display.textContent = INITIAL_NUMBER_DISPLAY;
          return;
        
        case '-':
          mathOperation = 'subtration';
          number1 = Number(display.textContent);
          number2 = 0;
          display.textContent = INITIAL_NUMBER_DISPLAY;
          return;

        case 'X':
          mathOperation = 'multiplication';
          number1 = Number(display.textContent);
          number2 = 0;
          display.textContent = INITIAL_NUMBER_DISPLAY;
          return;
        
        case '/':
          mathOperation = 'division';
          number1 = Number(display.textContent);
          number2 = 0;
          display.textContent = INITIAL_NUMBER_DISPLAY;
          return;
      
        case 'RESET':
          mathOperation = null;
          number1 = 0;
          number2 = 0;
          calcResult = 0;
          display.textContent = INITIAL_NUMBER_DISPLAY;
          return;
        
        case 'DEL':
          if(display.textContent.length == 1){
            return
          }
          console.log(display.textContent)

          let str = String(display.textContent);
          str = str.slice(0, -1);
          display.textContent = str;
          return;

        case '=':
          return

        default:
          break;
      }

      display.textContent += button.textContent;
    }

  });
});

buttonCalc.addEventListener('click', calculate);

function calculate() {
  if(number2 == 0){
    number2 = Number(display.textContent);
  }

  switch (mathOperation) {
    case 'sum':
      if(calcResult !== 0) {
        calcResult = calcResult + number2
        break
      }
      calcResult = number1 + number2;
      break;
    
    case 'subtration':
      if(calcResult !== 0) {
        calcResult = calcResult - number2
        break
      }
      calcResult = number1 - number2;
      break;

      case 'multiplication':
      if(calcResult !== 0) {
        calcResult = calcResult * number2
        break
      }
      calcResult = number1 * number2;
      break;

      case 'division':
      if(calcResult !== 0) {
        calcResult = calcResult / number2
        break
      }
      calcResult = number1 / number2;
      break;
  }

  display.textContent = calcResult;
  console.log(number1, mathOperation, number2)
}