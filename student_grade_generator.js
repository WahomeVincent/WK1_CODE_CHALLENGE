//Declares a variable 'marks' where to store the student grades.
//ParseInt is used to ensure that the value passed is converted to an integer.
let marks = parseInt(prompt("Please enter the student's marks (between 0 and 100):"));
const button = document.getElementById("grade");


//Adds an event listener to the button to display various statements if certain conditions are met.
button.addEventListener("click", function() {
    if (marks > 79) {
        return("Your grade is : A ");
    } else if (marks >= 60 && marks <=79) {
        return("Your grade is : B- ");
    } else if (marks >=49 && marks <=59) {
        return("Your grade is : C- ");
    } else if (marks >=40 && marks <=49) {
        return("Your grade is : D- ");
    } else if (marks < 40) {
        return("Your grade is : E ");
    }
  });

