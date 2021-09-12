function validateForm() {
    var fname = document.forms["myForm"]["firstName"].value;
    if (!validateNotBlank(fname, "First Name")) return false;

    var lname = document.forms["myForm"]["lastName"].value;
    if (!validateNotBlank(lname, "Last Name")) return false;

    var staddress = document.forms["myForm"]["streetAddress"].value;
    if (!validateNotBlank(staddress, "Street Address")) return false;

    var phone = document.forms["myForm"]["phoneNumber"].value;
    if (!validateNotBlank(phone, "Phone Number")) return false;
    if (phone.length < 10 || phone.length > 10) alert("Phone number must be 10 digits");

    var email = document.forms["myForm"]["emailAddress"].value;
    if (!validateNotBlank(email, "Email Address")) return false;

    var message = document.forms["myForm"]["customMessage"].value;
    if (!validateNotBlank(message, "Custom Message")) return false;

    var conFirm = document.forms["myForm"]["confirm"].value;
    if (!validateNotBlank(conFirm, "Confirm You're Human")) return false;

    if (!confirmPrez()) return false;
    return true;
}
function validateNotBlank(value, label) {
    if (value==null || value==""){
        window.alert("Please enter a value for " + label);
        return false;
    }
    return true;
};
function confirmPrez() {
    var userAnswer= document.forms["myForm"]["confirm"].value;
    var correctAnswer = "Biden";

    if (userAnswer != correctAnswer) {
        window.alert("Wrong!")
        return false;
    }
    return true;
}
