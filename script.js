
const numberInput = document.getElementById('numberInput');
const displayValue = document.getElementById('displayValue');
const statusIndicator = document.getElementById('connection-status');

const storeValue = () => {
    const enteredValue = numberInput.value;

    if (enteredValue === "") {
        alert("Please enter a number first!");
        return;
    }
    displayValue.innerText = enteredValue;
    
    statusIndicator.innerText = "Status: Local UI Updated";
    statusIndicator.style.color = "#818cf8";

    console.log(`User entered: ${enteredValue}`);
};


const getValue = () => {
    const currentOnScreen = displayValue.innerText;
    
    if (currentOnScreen === "0") {
        alert("No value has been stored yet.");
    } else {
        alert(`The current value shown in your portfolio is: ${currentOnScreen}`);
    }
};

console.log("Portfolio Script Loaded successfully.");