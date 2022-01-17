const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    chooseOperation(operation){
        if(this.previusoperand !== ''){
            this.calculate()
        }

        this.operation = operation;

        this.previusoperand = `${this.currentOperand} ${this.operation}`;
        this.currentOperand = '';
    }

    appendNumber(number){
            if( this.currentOperand.includes('.') && number === ".") return;

        this.currentOperand = `${this.currentOperand}${number.toString()}`;
        
    }

    clear(){
        this.currentOperand = "";
        this.previusoperand = "";
        this.operation = undefined;
    }

    updateDisplay(){
        this.previousOperandTextElement.innerText = this.previusoperand;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const calculator =  new Calculator(
    previousOperandTextElement, 
    currentOperandTextElement
);

for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
    
}

for (const operationButton of operationButtons){
    operationButton.addEventListener('click', () => {
        calculator.chooseOperation(operationButton.innerText)
        calculator.updateDisplay()
    })
}

allClearButtons.addEventListener('click',() => {
    calculator.clear();
    calculator.updateDisplay();
})