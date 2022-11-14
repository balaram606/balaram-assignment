// // form validation
 function SubmitClick(){
  const username  = document.getElementById("fname");
  const emailvalue = document.getElementById("femail");

  
  if(username.value =="" ||emailvalue.value == ""){
    alert("No Blank Values allowed");
  }else{
    alert("Form Submitted");
  }

 };
