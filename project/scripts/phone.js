// const phoneNumber = document.querySelector('#phone');
// const form = document.querySelector('form');

export function accept(phoneNumber) {
    const pattern = /^[0-9]{3}-[[0-9]{3}-[0-9]{4}$/;

    if (phoneNumber.length < 10) {
        alert('Please enter 10-digit phone number');
        return false;
    }

    if (!pattern.test(phoneNumber)) {
        alert('Please enter your number as xxx-xxx-xxxx');
        return false;
    }
    return true;
}
