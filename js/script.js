// Button Convert (mengconvert temperature)
function convertTemperature() {
	var inputField = document.getElementById('inputField');
	var outputDiv = document.getElementById('output');
	var calculationDiv = document.getElementById('calculation');

	var celsius = parseFloat(inputField.value);
	var fahrenheit = (celsius * 9) / 5 + 32;

	outputDiv.textContent = parseInt(fahrenheit).toString();
	calculationDiv.textContent =
		celsius + ' °C * 9/5 + 32 = ' + parseInt(fahrenheit).toString() + ' °F';
}

// Button Reset (mereset input dan output)
function resetFields() {
	var inputField = document.getElementById('inputField');
	var outputDiv = document.getElementById('output');
	var calculationDiv = document.getElementById('calculation');

	inputField.value = '';
	outputDiv.textContent = '';
	calculationDiv.textContent = '';
}

// function reverseConversion() {
// 	var inputField = document.getElementById('inputField');
// 	var outputDiv = document.getElementById('output');
// 	var calculationDiv = document.getElementById('calculation');

// 	if (isCelsiusToFahrenheit) {
// 		var celsius = inputCelsius;
// 		var fahrenheit = outputFahrenheit;

// 		inputField.value = fahrenheit.toString();
// 		calculationDiv.textContent =
// 			celsius + ' °C * 9/5 + 32 = ' + fahrenheit.toString() + ' °F';
// 	} else {
// 		var fahrenheit = outputFahrenheit;
// 		var celsius = inputCelsius;

// 		inputField.value = celsius.toString();
// 		calculationDiv.textContent =
// 			fahrenheit + ' °F - 32 * 5/9 = ' + celsius.toString() + ' °C';
// 	}

// 	// Toggle the conversion mode
// 	isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
// }

var isCelsiusToFahrenheit = true;
var inputCelsius = 90;
var outputFahrenheit = 194;

function reverseConversion() {
	var calculationDiv = document.getElementById('calculation');

	if (isCelsiusToFahrenheit) {
		var celsius = inputCelsius;
		var fahrenheit = outputFahrenheit;

		calculationDiv.textContent =
			celsius + ' °C * 9/5 + 32 = ' + fahrenheit.toString() + ' °F';
	} else {
		var fahrenheit = outputFahrenheit;
		var celsius = inputCelsius;

		calculationDiv.textContent =
			fahrenheit + ' °F - 32 * 5/9 = ' + celsius.toString() + ' °C';
	}

	// Toggle the conversion mode
	isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
}
