const form = document.getElementById("submit-request");
const button = document.getElementById('submit-request')


form.addEventListener("click", (e) => {
	e.preventDefault();

 
	var nombre = document.getElementById("request_name").value;
	var titulo = document.getElementById("request_title").value;
	var artista = document.getElementById("request_author").value;
	var comentarios = document.getElementById("request_comentarios").value;
	var privacidad = document.getElementById("request_privacity").checked;

	if(titulo!="" && nombre!="" && privacidad){

		var token = "5452726860:AAHH-fAmPN_FkoFgZGnC7XtRzHu0iKf-gmw"
		var chat_id = -631993148

		var result = "Nueva petición:%0A - Nombre: "+nombre+"%0A - Título: "+titulo+"%0A - Artista: "+artista+"%0A - Comentarios: "+comentarios;

		var url = "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text="+result;

		var api = new XMLHttpRequest();
		api.open("GET",url,true);
		api.send();

		setTimeout(() => {  window.location.href = "formulario_ok.html"; }, 500);

	} else{
		showSnackbarRequest();
	}
	document.getElementById("request_name");

})

function showSnackbarRequest() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}