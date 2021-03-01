
	function validation() {
    var fname = document.forms["lform"]["fname"].value;
    var lname = document.forms["lform"]["lname"].value;
    var email = document.forms["lform"]["email"].value;
    var age = document.forms["lform"]["age"].value;
    var num1 = document.forms["lform"]["num1"].value;
    var num2 = document.forms["lform"]["num2"].value;
    var num3 = document.forms["lform"]["num3"].value;
    var address = document.forms["lform"]["address"].value;
    var zipcode = document.forms["lform"]["zipcode"].value;

    let namepattern = /([A-Za-z])$/;
    if (fname == "") {
        window.alert("First Name cannot be empty");
        return false;
    }
    else if(fname.match(/\d/) != null) {
        window.alert("First Name cannot have numbers");
        return false;
    }
    else if(!namepattern.test(fname)) {
        window.alert("First Name cannot have Special Characters");
        return false;
    }
    if (lname == "") {
        window.alert("Last Name cannot be empty");
        return false;
    }
    else if(lname.match(/\d/) != null) {
        window.alert("Last Name cannot have numbers");
        return false;
    }
    else if(!namepattern.test(lname)) {
        window.alert("Last Name cannot have Special Characters");
        return false;
    }

    let emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == "") {
        window.alert("Email cannot be empty");
        return false;
    }
    else if(!emailpattern.test(email)) {
        window.alert("Email format is Invalid");
        return false;
    }
    if (age == "") {
        window.alert("Age cannot be empty");
        return false;
    }
    else if(age.match(/\d/) == null) {
        window.alert("Age cannot have text");
        return false;
    }
    if (num1 == "") {
        window.alert("Phone first part cannot be empty");
        return false;
    }
    else if(num1.length !=3) {
        window.alert("Phone first part must have 3 numbers");
        return false;
    }
    if (num2 == "") {
        window.alert("Phone middle part cannot be empty");
        return false;
    }
    else if(num2.length !=3) {
        window.alert("Phone middle part must have 3 numbers");
        return false;
    }
    if (num3 == "") {
        window.alert("Phone last part cannot be empty");
        return false;
    }
    else if(num3.length !=4) {
        window.alert("Phone last must have 4 numbers");
        return false;
    }
    if (address == "") {
        window.alert("Message Subject cannot be empty");
        return false;
    }
    if (zipcode == "") {
        window.alert("zipcode cannot be empty");
        return false;
    }
    else if(zipcode.length !=6) {
        window.alert("zipcode must have 6 numbers");
        return false;
    }
    return true;
}