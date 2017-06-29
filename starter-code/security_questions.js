console.log("security_questions.js loaded");

const securityQuestions = [
  {
    question: 'What is your mother\'s maiden name?',
    expectedAnswer: 'Jean'
  },
  {
    question: 'What is your birth town?',
    expectedAnswer: 'Newark'
  },
  {
    question: 'What is your favorite teacher\'s name?',
    expectedAnswer: 'Wilkins'
  }
];

for (let i = 0; i < securityQuestions.length - 1; i++) {
  let answer = window.prompt(securityQuestions[i].question, '');
  if (answer.trim() !== securityQuestions[i].expectedAnswer) {
    alert('That response was incorrect!');
    break;
  }
}
