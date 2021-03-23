function funOddEven() {
    var number = document.getElementById("number").value;
    var output = "";
    if (number.length === 0) {
        output = "Please insert something";
    } else if (number % 2 === 0) {
        output = "Even";
    } else if (number % 2 === 1) {
        output = "Odd";
    } else {
        output = "That is not a number";
    }
    document.getElementById("hasil").innerHTML = output;
}