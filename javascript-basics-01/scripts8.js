function showmessage() {
    let age = parseInt(document.getElementById("age").value);

    if (!isNaN(age) && age>18 ) {
        alert(" you are over 18");
    } else {
        alert(" you are under 18");
    }
}
