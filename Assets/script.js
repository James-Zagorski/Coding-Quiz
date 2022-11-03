const startQuizButton = document.getElementById("startButton")

startQuizButton.addEventListener("click", function() {
    const introDiv = document.getElementById("intro")
    introDiv.classList.add("invisible")

    const firstQuestionDiv = document.getElementById("firstQuestion")
    firstQuestionDiv.classList.remove("invisible")
});