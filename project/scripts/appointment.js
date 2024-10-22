import {displayMessage} from "./welcome.js";
import { accept } from "./phone.js";

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

