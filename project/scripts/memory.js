const currentWindow = window.location.href;
const everything = currentWindow.split('?');
let input = everything[1].split('&');

console.log(input);

function show(info) {
    let result = [];
    input.forEach((element) => {
        if (element.startsWith(info)) {
            const value = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
            if (info === 'service') {
                result.push(value);
            
            }
    };
    return info === 'result[]' ? result : result;
};



const showInfo = document.querySelector('#results');
const services = show('service[]')
const appointmentDate = show('date');
const appointmentTime = show('time');
const timestamp = show('timestamp');


showInfo.innerHTML = `
<h3>Can't wait to see you ${show('fname')} ${show('lname')}!</h3>
<br><p>We have received the following information:</p>
<br><p>Your Email: <a href=mailto:${show('email')} id="email">${show('email')}</a></p>
<p>Your Phone: ${show('phone')}</p>
<p>Your appointment for a ${services.join(',')} is set for ${appointmentDate} at ${appointmentTime}</p>
<p>You made this appointment on ${timestamp}</p>
`
