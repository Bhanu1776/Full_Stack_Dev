function ValidateForm() {		
    var fname = document.forms.xieform.FName.value;
    var mname = document.forms.xieform.MName.value;
    var lname = document.forms.xieform.LName.value;
    var address = document.forms.xieform.Address.value;
    var email = document.forms.xieform.Email.value;
    var password = document.forms.xieform.Password.value;
    var phone = document.forms.xieform.Mobile.value;
    var sub = document.forms.xieform.Subject.value;
    var password = document.forms.xieform.Password.value;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
    var regPhone=/^\d{10}$/;								
 
    if (fname == null || fname == "") {
        window.alert("Please enter your first name.");
    fname.focus();
    return false;
				}
    
    if (mname == null || mname == "") {
        window.alert("Please enter your middle name.");
        mname.focus();
        return false;
    } 
    if (lname == null || lname == "") {
        window.alert("Please enter your last name.");
        lname.focus();
        return false;
    }

    if (address == null || address == "") {
        window.alert("Please enter your address.");
    address.focus();
    return false;
				}

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
				}

    if (password == "") {
        alert("Please enter your password");
    password.focus();
    return false;
				}

    if(password.length <8){
        alert("Password should be atleast 8 character long");
    password.focus();
    return false;

				}
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
    phone.focus();
    return false;
				}

    if (sub.selectedIndex == -1) {
        alert("Please enter your course.");
    what.focus();
    return false;
				}

    return true;
			}

