//Declares a varible 'speed' where the data will be stored.
//ParseInt is use to ensure that any value passed to the variable is converted to an integer.
let speed = parseInt(prompt("Enter the speed of the car: "));


//Code execution that returns various statements based on the stated conditions.
if (speed < 70) {
  console.log("Ok");
} else {
  let demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}
