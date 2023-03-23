let marks = parseInt(prompt("Please enter the student's marks (between 0 and 100):"));
const button = document.getElementById("grade");

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

