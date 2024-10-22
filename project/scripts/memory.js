const currentWindow = window.location.href;
const everything = currentWindow.split('?');
let input = everything[1].split('&');


let services = [];
console.log(input);

function show(info) {
    let result = '';
    input.forEach((element) => {
        if (element.startsWith(info)) {
            result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
            if (info === 'service') {
               getServices(result);
            }
        }
    });
    if (info === 'date') {
        return formatDate(result);
    }

    if (info === 'time') {
        return formatTime(result);
    }

    return(result);  
}

function getServices(value) {
    services.push(value);
}

function formatDate(dateInput) {
    const date = new Date(dateInput);
    const month = (date.getMonth() +1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();


    return `${month}/${day}/${year}`;
}

function formatTime(timeInput) {
    const time = decodeURIComponent(timeInput);
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    const newMinutes = minute < 10 ? '0' + minute : minute; 
    return `${hour}:${newMinutes} ${ampm}`;
}

const selectedService = show('service');
const showInfo = document.querySelector('#results');



showInfo.innerHTML = `
<h3>Excited for your transformation ${show('fname')} ${show('lname')}?</h3>
<br><p>We have received the following information:</p>
<br><p>Your Email: <a href=mailto:${show('email')} id="email">${show('email')}</a></p>
<p>Your Phone: ${show('phone')}</p>
<p>You've selected: ${services.join(', ')} </p>
<p>for ${show('date')} at ${show('time')}</p>
<br><p>You made this appointment on ${show('tstamp')}</p>
`
// <br>is set for ${appointmentDate} at ${appointmentTime}

// const services = show('service[]')
// const appointmentDate = show('date');
// const appointmentTime = show('time');
// const timestamp = show('timestamp');