//On the "thankyou.html" page, you will display the form information entered by the user for all "required" form fields (first name, last name, email, mobile number, business name, and current date timestamp from the hidden field).

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
<h3>Thank you ${show('fname')} ${show('lname')}!</h3>
<br><p>We have received the following information:</p>
<p>Your Email: <a href=mailto:${show('email')} id="email">${show('email')}</a></p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Business: ${show('business')}</p>
<p>Date and Time Completed: ${show('timestamp')}</p>
`

