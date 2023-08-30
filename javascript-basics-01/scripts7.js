//var shoesize  = prompt("Please enter your shoesize:");
//var birthyear = prompt("please enter you birth year");//
function calculateResult() {
    let shoeSize = parseFloat(document.getElementById("shoe_size").value);
    let birthYear = parseFloat(document.getElementById("year").value);

    if (!isNaN(shoeSize) && !isNaN(birthYear)) {
        let result = ((shoeSize * 2 + 5) * 50 - birthYear + 1766);
        alert("The result is: " + result);
    } else {
        alert("Please enter valid numbers for shoe size and birth year.");
    }
}
