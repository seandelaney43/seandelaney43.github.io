function validate() {
  if(document.regform.firstname.value==""){
    document.getElementById("firstnameerror").innerHTML="Firstname cannot be blank"
    return false;
  }

  if(document.regform.surname.value==""){
    document.getElementById("surnameerror").innerHTML="surname cannot be blank"
    return false;
  }

    return true;
  }
