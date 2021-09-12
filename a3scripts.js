function validateForm() {
    var fname = document.forms["myForm"]["firstName"].value;
    if (!validateNotBlank(fname, "First Name")) return false;

    var lname = document.forms["myForm"]["lastName"].value;
    if (!validateNotBlank(lname, "Last Name")) return false;

    var staddress = document.forms["myForm"]["streetAddress"].value;
    if (!validateNotBlank(staddress, "Street Address")) return false;

    var phone = document.forms["myForm"]["phoneNumber"].value;
    if (!validateNotBlank(phone, "Phone Number")) return false;

    var email = document.forms["myForm"]["emailAddress"].value;
    if (!validateNotBlank(email, "Email Address")) return false;

    var message = document.forms["myForm"]["customMessage"].value;
    if (!validateNotBlank(message, "Custom Message")) return false;

    
}
function validateNotBlank(value, label) {
    if (value==null || value==""){
        alert("Please enter a value for " + label);
        return false;
    }
    return true;
};