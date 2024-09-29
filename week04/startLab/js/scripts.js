const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'something about apples'
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'something about oranges'
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'something about bananas'
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});