const currentWindow = window.location.href;
const everything = currentWindow.split('?');
let input = everything[1].split('&');
console.log(input);

function show(info) {
    input.forEach((element) => {
        if (element.startsWith(info)) {
            result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
        }
    });
    return(result);
}


const showInfo = document.querySelector('#results');

showInfo.innerHTML = `
<h3>We'll talk to you soon ${show('fname')} ${show('lname')}!</h3>
<br><p>We have received the following information:</p>
<br><p>Your Email: <a href=mailto:${show('email')} id="email">${show('email')}</a></p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Business: ${show('business')}</p>
<p>Date and Time Completed: ${show('timestamp')}</p>
`
