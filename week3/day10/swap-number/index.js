function funSwapNumber() {
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;
    var output = "";
    output = `Your two number is ${numberOne} and ${numberTwo}`;
    [numberOne, numberTwo] = [numberTwo, numberOne]
    output += `, now its ${numberOne} and ${numberTwo}`
    document.getElementById("hasil").innerHTML = output;
}