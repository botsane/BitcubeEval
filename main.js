/*Verification passcode
 User is asked to enter their Name,
followed by a Email
Last a 6 digit passcode must be created
*/

function veRification(){
var Name = prompt("Lecturer Name:");
var  Email = prompt("Email Address:");
var PassCode = prompt("Password:");
if (PassCode == 158964){
    console.log("Access granted");
}
else if(PassCode !== 158964){
    console.log("Wrong pin!")
}
else{
    console.log("We must log you off the system")
}
}
veRification();



//New students Data
const student = document.querySelector(".student"),
       contact_form = student.querySelectorAll(".contact_form"),
       submitInput = contact_form[0].querySelector('input[type="submit"]');

function studentForm(e){

    e.preventDefault();

    var studentData = new StudentData(contact_form[0]);//form data collection
    
    alert( studentData.get("contact-input") );

}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', studentForm, false);
}, false);

