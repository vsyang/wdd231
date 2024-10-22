export function validateCheckboxes(formId, checkboxType){
    const form = document.querySelector(formId);
    form.addEventListener('submit', function(event) {

        const checkboxes = document.querySelectorAll(`${checkboxType} input[type="checkbox"]`);
        let checked = false;

        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                checked = true;
                break
            }
        }

        if (!checked) {
            alert('Please select at least 1 service.');
            event.preventDefault();
        }
    }); 
}

