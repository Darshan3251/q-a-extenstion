document.addEventListener('DOMContentLoaded', function () {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const nextQuestionButton = document.getElementById('next-question');
  
    let questions = [];
  
    // Fetch questions from the local JSON file
    fetch('questions.json')
      .then(response => response.json())
      .then(data => {
        questions = data;
        displayRandomQuestion();
      })
      .catch(error => console.error('Error fetching questions:', error));
  
    function displayRandomQuestion() {
      if (questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const currentQuestion = questions[randomIndex];
        questionElement.textContent = currentQuestion.question;
        answerElement.textContent = currentQuestion.answer;
      }
    }
  
    nextQuestionButton.addEventListener('click', displayRandomQuestion);
  });