// const phoneNumber = document.querySelector('#phone');
// const form = document.querySelector('form');

export function accept(phoneNumber) {
    const pattern = /(?:(\+1)[ -])?\(?\d{3}\)?[ -]?(\d{3})[ -]?(\d{4})/;

    if (phoneNumber.length < 10) {
        alert('Please enter 10-digit phone number');
        return false;
    }

    if (!pattern.test(phoneNumber)) {
        alert('Please enter a valid phone number');
        return false;
    }
    return true;
}
