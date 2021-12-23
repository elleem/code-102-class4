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
      
        document.write ('<br><img height=150 src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwvx2LnhZV5jwCSk8s0b_gTT7JRRKp0yLFg&usqp=CAU"> ');     
        document.write(i + "Vacation Request! ");
    }
}

howManyDaysOff();

