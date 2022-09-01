const form = document.getElementById("submit-request");
const button = document.getElementById('submit-request')
const toast = document.getElementById('toasts')


const messages = [
    'Petición Enviada',
    'Faltan Datos',
]

const types = [
    'OK',
    'NOK',
]



form.addEventListener("click", (e) => {
	e.preventDefault();

	var message = null
	var type = null


	let properties

    const notif = document.createElement('div')
    const notifIcon = document.createElement('span')

    var nombre = document.getElementById("request_name").value;
	var titulo = document.getElementById("request_title").value;
	

	var notificationType = type ? type : types[1]
	
	var nombre = document.getElementById("request_name").value;
	var titulo = document.getElementById("request_title").value;
	var artista = document.getElementById("request_author").value;
	var comentarios = document.getElementById("request_comentarios").value;

	if(titulo!="" && nombre!=""){

		var token = "5452726860:AAHH-fAmPN_FkoFgZGnC7XtRzHu0iKf-gmw"
		var chat_id = -631993148

		var result = "Nueva petición:%0A - Nombre: "+nombre+"%0A - Título: "+titulo+"%0A - Artista: "+artista+"%0A - Comentarios: "+comentarios;

		var url = "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text="+result;

		var api = new XMLHttpRequest();
		api.open("GET",url,true);
		api.send();

		notificationType = type ? type : types[0]
		console.log(notificationType)

	}
	else{
		notificationType = type ? type : types[1]
		console.log(notificationType)
	}

	properties = setProperties(notificationType)

    notif.classList.add('toast')
    notif.classList.add(notificationType)
    
    notif.innerText = messages[properties[2]]

    toast.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
	document.getElementById("request_name");



})


function setProperties(notificationType){
    let propertyList

    switch (notificationType) {
        case 'OK':
            propertyList = ['fas', 'fa-exclamation-circle', 0]
            break
        case 'NOK':
            propertyList = ['fas', 'fa-check-circle', 1]
            break
    }

    return propertyList;
}
