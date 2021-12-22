
function myFunction(dayOff){
  if(dayOff == true){

      document.write("You're in the right place!!");
  }
  else{
      document.write("No party for you.");
  }

}

let dayOff = confirm("Do you like having days off?");
myFunction(dayOff);

function surveyButton() {
  document.getElementById("demo").innerHTML ="YOU CLICKED ME!";
}







