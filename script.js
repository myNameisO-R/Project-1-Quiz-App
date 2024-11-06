function toggleAnswer() {
  const answer = document.getElementById("answer");
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}

function toggleBookmark(event) {
  const bookmark = event.currentTarget;
  bookmark.classList.toggle("active");
  if (bookmark.classList.contains("active")) {
    bookmark.textContent = "★"; // filled star
  } else {
    bookmark.textContent = "☆"; // outline star
  }
}
