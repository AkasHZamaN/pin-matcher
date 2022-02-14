// using function for pin mather
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('pin-number').value = pin;
}

// function calculatorButton(){
//     const calcInput = document.getElementById('calc-display');
//     const calcNumber = parseInt(calcInput.value);
// }

document.getElementById('key-pad').addEventListener('click', function(even){
    // calculatorButton();
    const number = even.target.innerText;
    const calcDisplay = document.getElementById('calc-display');

    if(isNaN(number)){
        if(number == 'C'){
            calcDisplay.value = '';
        }
    }
    else{
        const previousDisplay = calcDisplay.value;
        const newDisplay = previousDisplay + number;
        calcDisplay.value = newDisplay;
    }
})

function verifyPin(){
    const pin = document.getElementById('pin-number').value
    const calcDisplay = document.getElementById('calc-display').value;
    const successMsg = document.getElementById('notify-success');
    const errorMsg = document.getElementById('notify-fail');
    if(pin == calcDisplay){
        successMsg.style.display =  'block';
        errorMsg.style.display =  'none';
    }
    else{
        errorMsg.style.display =  'block';
        successMsg.style.display =  'none';
    }
}