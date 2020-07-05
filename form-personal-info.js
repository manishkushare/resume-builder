let formName = document.querySelector(".form-name");
let submitButton = document.querySelector(".personal-info-submit");
// let firstName;
// let middleName;
// let lastName;
var obj = {};
const personalInformation = [];


submitButton.addEventListener("click", () => {
    console.log("test");
    var firstName = document.querySelector(".firstName").value;
    var middleName = document.querySelector(".middleName").value;
    var lastName = document.querySelector(".lastName").value;
    var city = document.querySelector(".city").value;
    var state = document.querySelector(".state").value;
    var zipCode = document.querySelector(".zipCode").value;
    var phone = document.querySelector(".phone").value;
    var email= document.querySelector(".email").value;
    var socialWebsite= document.querySelector(".social-site").value;
    var socialUrl = document.querySelector(".social-url").value;
    console.log(firstName);
    console.log(city);
    console.log(email);
    console.log(phone);
    console.log(zipCode);
    console.log(socialWebsite);
    console.log(socialUrl);
    personalInformation.push(firstName,middleName,lastName,city,state,zipCode,phone,email,socialWebsite,socialUrl);
    console.log(personalInformation)
    
    
})
for (var i=0; i< personalInformation.length; i++) {
    obj['position' + (i+1)] = personalInformation[i];
} 
console.log(obj)
function handleRefresh(event) {
    event.preventDefault();
}


formName.addEventListener("submit", handleRefresh);
