export function checkDate(dateInput) {
    const today = new Date().toISOString().split('T')[0];

    document.getElementById(dateInput).setAttribute('min', today);

    document.getElementById(dateInput).addEventListener('change', function() {
        const selectedDayValue = this.value;

        if (selectedDayValue) {
            const selectedDate = new Date(selectedDayValue + 'T00:00:00');
            if (selectedDate.getDay() === 0) {
            
            alert("Sorry! We're closed on Sundays. Please choose a different day");
            this.value = ''; 
            }
        } 
    });
}