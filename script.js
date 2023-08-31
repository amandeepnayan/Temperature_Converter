let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function convertTemperatures() {
    if (celsius.value !== "") {
        let celsiusValue = parseFloat(celsius.value);
        let fahrenheitOutput = (celsiusValue * 9/5) + 32;
        let kelvinOutput = celsiusValue + 273.15;
        
        fahrenheit.value = fahrenheitOutput.toFixed(2);
        kelvin.value = kelvinOutput.toFixed(2);
    }
    
    if (fahrenheit.value !== "") {
        let fahrenheitValue = parseFloat(fahrenheit.value);
        let celsiusOutput = (fahrenheitValue - 32) * 5/9;
        let kelvinOutput = (fahrenheitValue - 32) * 5/9 + 273.15;
        
        celsius.value = celsiusOutput.toFixed(2);
        kelvin.value = kelvinOutput.toFixed(2);
    }
    
    if (kelvin.value !== "") {
        let kelvinValue = parseFloat(kelvin.value);
        let celsiusOutput = kelvinValue - 273.15;
        let fahrenheitOutput = (kelvinValue - 273.15) * 9/5 + 32;
        
        celsius.value = celsiusOutput.toFixed(2);
        fahrenheit.value = fahrenheitOutput.toFixed(2);
    }
}
