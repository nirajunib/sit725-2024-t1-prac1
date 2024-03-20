// Purpose: Main JavaScript file for the website

// Function to change the text of the heading
function changeText() {
    var textsArray = ["Zdravstvuyte", "Bonjour", "Hola", "Konnichiwa", "Yassas"];
    var number = getRandomNumberBetween(0, textsArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}
// Function to get a random number between a range
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}