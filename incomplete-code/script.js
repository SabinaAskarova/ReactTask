// Task 1: Change the color of the greeting text
document.getElementById('colorButton').addEventListener('click', function() {
    // TODO: Complete the function to change the 'greeting' element's color to a random color
    var color=getRandomColor();
    var greeting = document.getElementById('greeting');
    greeting.style.color = color;
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    // TODO: Complete the function to change the text of the 'greeting' element to "Hello, JavaScript!"
    var greeting = document.getElementById('greeting');
    greeting.textContent="Hello, World :)";
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
