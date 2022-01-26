function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        var message = document.getElementById("message");
        var exclamation = document.getElementById("exclamation");
        if ((message.style.display !== 'none') || (exclamation.style.display !== 'none')) {
            message.style.display = 'none';
            exclamation.style.display = 'none';
        }
        else {
            message.style.display = 'block';
            exclamation.style.display = 'block';
        }
        return false;
    }

    return true;

}