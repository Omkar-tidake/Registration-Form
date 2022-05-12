function checkForm() {
	var nameField = document.getElementById('name');
	var emailField = document.getElementById('email');
	var phoneField = document.getElementById('phone_no');
	var addressField = document.getElementById('address');
	var passwordField = document.getElementById('password');
	var conf_passwordField = document.getElementById('conf_password');
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	// validation for name
	if(nameField.value == ''){
		nameField.parentElement.classList.add("show_error");
	}else {
		nameField.parentElement.classList.remove("show_error");
	}

	// validation for email
	if(emailField.value.match(mailformat)){		
		emailField.parentElement.classList.remove("show_error");
		
	}else{		
		emailField.parentElement.classList.add("show_error");
		
	}	

	// validation for phone number
	var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;	
  	if(!phoneno.test(phoneField.value)){ 
		phoneField.parentElement.classList.add("show_error");
	}else {
		phoneField.parentElement.classList.remove("show_error");
  	}

	// validation for address	
  	if(addressField.value == ''){ 
		addressField.parentElement.classList.add("show_error");
	}else {
		addressField.parentElement.classList.remove("show_error");
  	}

	// validation for Password	
	if(passwordField.value == ''){ 
		passwordField.parentElement.classList.add("show_error");
	}else {
		passwordField.parentElement.classList.remove("show_error");
  	}

	// validation for Confirm Password	
	if(conf_passwordField.value != "" && conf_passwordField.value == passwordField.value){ 
		conf_passwordField.parentElement.classList.remove("show_error");
	}else {
		conf_passwordField.parentElement.classList.add("show_error");
  	}
}

function showHidePassword(val){
	if(val=='show'){
		document.getElementById('hide_img_btn').classList.remove('hide_img');
		document.getElementById('hide_img_btn').classList.add('view_img');		
		document.getElementById('view_img_btn').classList.add('hide_img')	
		document.getElementById('password').setAttribute('type', 'password');
	}else{
		document.getElementById('view_img_btn').classList.remove('hide_img');
		document.getElementById('view_img_btn').classList.add('view_img');		
		document.getElementById('hide_img_btn').classList.add('hide_img')
		document.getElementById('password').setAttribute('type', 'text');
	}

}