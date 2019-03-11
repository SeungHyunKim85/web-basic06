var celsiusData = [];
var fahrenheitData = [];

function celsiusToFahrenheit() {
    var celsiusToFahrenheit = prompt("섭씨를 입력해 주세요");
    var celsius = Number(celsiusToFahrenheit);
    var celsiusToFahrenheitResult = celsius * 1.8 + 32;
    var result = document.getElementById("celsiusToFahrenheit");
    result.innerHTML = "섭씨에서 화씨로 결과: " + celsiusToFahrenheitResult;
}

function fahrenheitToCelsius() {
    var fahrenheitToCelsius = prompt("화씨를 입력해 주세요: ");
    var fahrenheit = Number(fahrenheitToCelsius);
    var fahrenheitToCelsiusResult = (fahrenheit - 32) / 1.8;
    var result = document.getElementById("fahrenheitToCelsius");
    result.innerHTML = "화씨에서 섭씨로 결과: " + fahrenheitToCelsiusResult;
}

//while (true) {
//    var number1 = prompt(
//        "섭씨에서 화씨로: 1 \n 화씨에서 섭씨로: 2 \n 프로그램 종료: 3"
//    );
//    var numNum = Number(number1);
//    if (numNum === 1) {
//        if (fahrenheitData.length !== 0) {
//            celsius = Number(fahrenheitData[fahrenheitData.length - 1]);
//            var celsiusToFahrenheitResult = celsius * 1.8 + 32;
//            console.log(celsiusToFahrenheitResult);
//            fahrenheitData.shift();
//        } else {
//            var celsiusToFahrenheit = prompt("섭씨를 입력해 주세요: ");
//            var celsius = Number(celsiusToFahrenheit);
//            var celsiusToFahrenheitResult = celsius * 1.8 + 32;
//            console.log(celsiusToFahrenheitResult);
//            celsiusData.splice(0, 1, celsiusToFahrenheitResult);
//        }
//    } else if (numNum === 2) {
//        if (celsiusData.length !== 0) {
//            fahrenheit = Number(celsiusData[celsiusData.length - 1]);
//            var fahrenheitToCelsiusResult = (fahrenheit - 32) / 1.8;
//            console.log(fahrenheitToCelsiusResult);
//            celsiusData.shift();
//        } else {
//            var fahrenheitToCelsius = prompt("화씨를 입력해 주세요: ");
//            var fahrenheit = Number(fahrenheitToCelsius);
//            var fahrenheitToCelsiusResult = (fahrenheit - 32) / 1.8;
//            console.log(fahrenheitToCelsiusResult);
//            fahrenheitData.splice(0, 1, fahrenheitToCelsiusResult);
//        }
//    } else if (numNum === 3) {
//        console.log("프로그램 종료");
//        break;
//    }
//}
