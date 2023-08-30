
function submitForm(event) {
   event.preventDefault(); // Prevent form submission
      let  num1=document.forms["form2"]["first_number"].value;
      let num2=document.forms["form2"]["second_number"].value;
      let r = num1%num2;
  
      window.alert(r);
  }
