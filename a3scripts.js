function formVal() {
    var firstName = document.forms["form"]["firstName"];
    var lastName = document.forms["form"]["lastName"];
    var phoneNumber = document.forms["form"]["phoneNumber"];
    var email = document.forms["form"]["email"];
    var birthDate = document.forms["form"]["birthDate"];
    var message = document.forms["form"]["message"];
    var confirmation = document.forms["form"]["confirmation"];

    if (firstName.value == "") {
        window.alert("Field cannot be left blank.")
    }
    if (lastName.value == "") {
        window.alert("Field cannot be left blank.")
    }
    if (phoneNumber.value == "") {
        window.alert("Field cannot be left blank.")
    }
    if (email.value == "") {
        window.alert("Field cannot be left blank.")
    }
    if (birthDate.value == "") {
        window.alert("Field cannot be left blank.")
    }
    if (confirmation.value == "") {
        window.alert("Field cannot be left blank.")
    }else if(confirmation.value != "Joe Biden"){
        window.alert("Wrong answer!")
    }
    return true;
}
