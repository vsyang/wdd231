document.getElementById('jokeButton').addEventListener('click', fetchDadJoke);

const jokeDialog = document.querySelector('#joke');

async function fetchDadJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Sorry, network issues is preventing some jokes...')
        }

        const data = await response.json();
        jokeDialog.textContent = data.joke;
        jokeDialog.showModal();
    } catch (error) {
        jokeDialog.textContent = "Oops! Couldn't fetch a joke";
        jokeDialog.showModal();
    }
}

document.getElementById('joke').addEventListener('click', function(event) {
    if (event.target === this) {
        this.close();
    }
});