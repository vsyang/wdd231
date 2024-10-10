document.addEventListener('DOMContentLoaded', () => {
    const timestamp = document.querySelector('#timestamp');
    const currentTimestamp = new Date();
    
    const year = currentTimestamp.getFullYear();
    const month = currentTimestamp.getMonth();
    const day = currentTimestamp.getDate();
    let hour = currentTimestamp.getHours();
    const minutes = currentTimestamp.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    const newMinutes = minutes < 10 ? '0' + minutes : minutes; 



    timestamp.value = `${month}/${day}/${year} at ${hour}:${newMinutes} ${ampm}`;
});

//Date.now()