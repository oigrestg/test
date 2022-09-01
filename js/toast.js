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

button.addEventListener('click', () => createToast())

function createToast(message = null, type = null) {
    let properties

    const notif = document.createElement('div')
    const notifIcon = document.createElement('span')
    const notificationType = type ? type : getRandomType()
    
    properties = setProperties(notificationType)

    notif.classList.add('toast')
    notif.classList.add(notificationType)
    
    notifIcon.classList.add(properties[0])
    notifIcon.classList.add(properties[1])

    notif.innerText = messages[properties[2]]

    toast.appendChild(notif)
    notif.append(notifIcon)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function setProperties(notificationType){
    let propertyList

    switch (notificationType) {
        case 'NOK':
            propertyList = ['fas', 'fa-exclamation-circle', 1]
            break
        case 'OK':
            propertyList = ['fas', 'fa-check-circle', 2]
            break
    }

    return propertyList;
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}