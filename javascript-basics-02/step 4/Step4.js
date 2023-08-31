document.addEventListener("DOMContentLoaded",function(){
  const name= document.querySelector("#name");
  const surname= document.querySelector("#surname");
  const city= document.querySelector("#city");
  const reset= document.querySelector("#reset");


  reset.addEventListener('click',function(){
    const confirmed = confirm("Are you want to reset he fileds?")
    if(confirmed){
      name.value='';
      surname.value='';
      city.value='';
      
    }
  })
})