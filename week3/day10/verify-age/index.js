function funAge() {
    var umur = document.getElementById("umur").value;
    var output = "";
    if (umur.length === 0) {
        output = "Please insert something before you submit";
    } else if (umur < 18) {
        output = "You are under 18 not old enough";
    } else if (umur >= 18) {
        output = "You are old enough";
    } else {
        output = "Please insert number only";
    }
    document.getElementById("hasil").innerHTML = output;
}