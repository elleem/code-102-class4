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
      
        document.write(i + "Vacation Request: ");
    }
}

howManyDaysOff();