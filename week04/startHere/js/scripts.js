//Grab entire URL for page including GET values
const currentUrl = window.location.href;

//Divide the url into halves
const everything = currentUrl.split('?');

//Grab just the second half
let formData = everything[1].split('&');

//Break form name value pairs into an array
// let valuePair = formData.split('&');
// console.log(valuePair);

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@');
            
        }
    });
    return(result);
}


const showInfo = document.querySelector('#results');
//showInfo.innerHTML = formData[0] + formData[1];

showInfo.innerHTML = `
<p>Appointment for ${show('first')} ${show('last')}</p>
<p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')}.</p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Email: <a href="mailto:${show('email')}" id="email">${show('email')}</a></p>
`