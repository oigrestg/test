const form_contact = document.getElementById("submit-contact");

form_contact.addEventListener("click", (e) => {
	e.preventDefault();

	var nombre = document.getElementById("contact_name").value;
	var email = document.getElementById("contact_email").value;
	var asunto = document.getElementById("contact_subject").value;
	var telefono = document.getElementById("contact_phone").value;
	var mensaje = document.getElementById("contact_message").value;
	var privacidad = document.getElementById("contact_privacity").checked;
	

	if(nombre!="" && email!="" && mensaje!="" && privacidad){

		var token = "5452726860:AAHH-fAmPN_FkoFgZGnC7XtRzHu0iKf-gmw"
		var chat_id = -631993148

		var result = "Nuevo contacto:%0A - Nombre: "+nombre+"%0A - Email: "+email+"%0A - Asunto: "+asunto+"%0A - Teléfono: "+telefono+"%0A - Mensaje: "+mensaje;

		var url = "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text="+result;


		var api = new XMLHttpRequest();
		api.open("GET",url,true);
		api.send();

		setTimeout(() => {  window.location.href = "formulario_ok.html"; }, 500);
		;

	} else{
		showSnackbarContact();
	}
	document.getElementById("request_name");

})

function showSnackbarContact() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}