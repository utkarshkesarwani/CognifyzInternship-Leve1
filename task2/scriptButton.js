document.addEventListener('DOMContentLoaded', function () {
    const colorButton = document.getElementById('colorButton');

    colorButton.addEventListener('click', () => {
        // Generate a random color in hexadecimal format
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Change the button's background color to the random color
        colorButton.style.backgroundColor = randomColor;
    });
});