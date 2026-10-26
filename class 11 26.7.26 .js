var Name = document.querySelector("#name");
var kname = document.querySelector("#kname");
var email = document.querySelector("#email");
var number = document.querySelector("#number");
var profession = document.querySelector("#profession");
var Country = document.querySelector("#Country");
var Age = document.querySelector("#Age");
var School = document.querySelector("#School");
var error = document.querySelector("#error");

function valid(){
    if (Name.value == "") {
        error.innerHTML = "Name is required";
        return false;
    }

    else if (email.value == "") {
        error.innerHTML = "Email is required";
        return false; 
    }

    else if (number.value.length != 11) {
        error.innerHTML = "Mobile Number must have 11 digits";
        return false; 
    }

    else if (profession.value == "") {
        error.innerHTML = "Profession is required";
        return false;
    }

    else if (Country.value == "Choose") {
        error.innerHTML = "Country is required";
        return false; 
    }

    if (kname.value == "") {
        error.innerHTML = "Name is required";
        return false;
    }

    else if (Age.value == "") {
        error.innerHTML = "Age is required";
        return false;
    }

    else if (School.value == "") {
        error.innerHTML = "School is required";
        return false;
    }

    
    
}
