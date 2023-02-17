/*
function isChecked() {
  // Get the checkbox
  var checkbox_one = document.getElementById("checkbox_one");
  var checkbox_two = document.getElementById("checkbox_two");
  var checkbox_two = document.getElementById("checkbox_three");
  var checkbox_two = document.getElementById("checkbox_four");

  // Get the output text
  var text = document.getElementById("error");

  if(checkbox_one.checked == true && checkbox_two.checked == false){
	 window.location.href = "";
}
  else if(checkbox_one.checked == false && checkbox_two.checked == true){
	 window.location.href = "";
}
else if(checkbox_one.checked == false && checkbox_two.checked == true){
   window.location.href = "";
}
else if(checkbox_one.checked == false && checkbox_two.checked == true){
   window.location.href = "";
}
  else{
	error.style.display = "block";
}

}
*/


function myFunction() {
  // Get the checkbox
  var checkBoxOne = document.getElementById("checkbox_one");
  var checkBoxTwo = document.getElementById("checkbox_two");
  var checkBoxThree = document.getElementById("checkbox_three");
  var checkBoxFour= document.getElementById("checkbox_four");

  // Get the output text
  var textOne = document.getElementById("textOne");
  var textTwo = document.getElementById("textTwo");
  var textThree = document.getElementById("textThree");
  var textFour = document.getElementById("textFour");
  let flag = false;

  // If the checkbox is checked, display the output text

  if (checkBoxOne.checked == true){
    window.location.href = "output.js";

  }else if(checkBoxTwo.checked == true){
    window.location.href = "output.js";
  }
  else if(checkBoxThree.checked == true){
    window.location.href = "output.js";
  }
  else if(checkBoxFour.checked == true){
    window.location.href = "output.js";
  }


  


/*
  else{
    textOne.style.display = "none";
  }
   if (checkBoxTwo.checked == true){
    textTwo.style.display = "block";
  } else {
    textTwo.style.display = "none";
  }

  if (checkBoxThree.checked == true){
    textThree.style.display = "block";
  } else {
    textThree.style.display = "none";
  }

  if (checkBoxFour.checked == true){
    textFour.style.display = "block";
  } else {
    textFour.style.display = "none";
  }

*/
}






