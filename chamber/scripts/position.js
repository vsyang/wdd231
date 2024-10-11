//pattern that only accepts alpha characters, hyphens, and spaces with a minimum of seven characters
const form = document.querySelector('form');
const check = document.querySelector('#title');
const pattern = /^[A-Za-z -]+$/;

function accept(title) {
    
    if (title.length < 7) {
        alert('Title must be at least 7 characters long.')
        return false;
    }
    

    if (!pattern.test(title)) {
        alert('Title can only contain letters, spaces and hyphens');
        return false;
    }
    return true;
}

form.addEventListener('submit', function(event) {
    const value = check.value;
    if(!accept(value)) {
        event.preventDefault();
    }
});

