import { displayMessage } from "./welcome.js";
import { accept } from "./phone.js";
import { validateCheckboxes } from "./checkbox.js";
import { checkDate } from "./calendar.js";

//welcome message
const welcome = document.querySelector('#welcome');
welcome.innerHTML = displayMessage();

//phone validator
const phoneNumber = document.querySelector('#phone');
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const value = phoneNumber.value;
    if(!accept(value)) {
        event.preventDefault();
    }
});

//checkbox validator
validateCheckboxes('#make-appointment', '.checkboxes');

//date checker
document.addEventListener('DOMContentLoaded', () => {
    checkDate('date');
})
