//take care of the form - remember info input from user, welcome message, check input before allowing submit button

import {displayMessage} from "./welcome.js";

const welcome = document.querySelector('#welcome');
welcome.innerHTML = displayMessage();
