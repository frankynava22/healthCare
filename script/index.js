//
function isChecked() {
  // Get the checkbox
  var checkbox_one = document.getElementById("checkbox_one");
  var checkbox_two = document.getElementById("checkbox_two");

  // Get the output text
  var text = document.getElementById("error");

  if(checkbox_one.checked == true && checkbox_two.checked == false){
	 window.location.href = "english.html";
}
  else if(checkbox_one.checked == false && checkbox_two.checked == true){
	 window.location.href = "spanish.html";
}
  else{
	error.style.display = "block";
}

}


