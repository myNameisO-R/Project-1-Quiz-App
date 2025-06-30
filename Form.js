const form = document.getElementById("questionForm");
const container = document.getElementById("cardContainer");

form.addEventListener("submit", function(event) {
    event.preventDefault();


const questionText = document.getElementById("questionInput").value;
const answerText = document.getElementById("answerInput").value;
const tagsText = document/getElementById("tagsInput").value;


const newCard = document.createElement("div");
newCard.className = "card";


const questionElem = document.createElement("h3");


const answerElem = document.createElement("p");


const tagsElem = document.createElement("p");

