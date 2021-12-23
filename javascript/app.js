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


function howManyDaysOff()
{
    let furloughDay = prompt("How many days do you take off for a holiday?");
    for (let i = 1; i <= furloughDay; i++)
    {
      
        document.write ('<br><img height=150 src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6K28iQr3abR6V4yuuNoD8NCh9-74qdAHOEw&usqp=CAU"> ');     
        document.write(i + "Vacation Request! ");
    }
}

howManyDaysOff();



function getPractice ()

{ 
  let skiGear = 4;
  let expYears =0; 

  for (let i=1; i<= skiGear; i++) { 
  let howMuchGear = prompt ("how many years of experience skiing do you have?");


if (howMuchGear !== expYears) {
  document.write ("You need new gear!");
break;
  }
}
}
getPractice();