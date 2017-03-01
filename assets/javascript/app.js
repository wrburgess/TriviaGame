// =========
// APP STATE
// =========

// Setup our application state object
var appState = {
  challenges: [
    {
      question: 'This is question 1',
      options: [
        {
          text: 'This is the answer to question 1',
          type: 'answer'
        },
        {
          text: 'The is distractor 1 for question 1',
          type: 'distractor'
        },
        {
          text: 'The is distractor 2 for question 1',
          type: 'distractor'
        },
        {
          text: 'The is distractor 3 for question 1',
          type: 'distractor'
        }
      ]
    }
  ],
  currentChallenge: {},
  answeredChallenges: [],
  phase: 'start', // possible values: started, question, selection, ended
  totalCorrectAnswers: 0,
  totalIncorrectAnswers: 0
}

// =========
// EVENT MANAGEMENT
// =========

// Add an on click listener to all elements that have the class 'something'
$('.something').on('click', function() {
  var buttonValue = this.value;
  handleSomething(buttonValue);
});

// =========
// APP LOGIC
// =========

// Use a function to initialize our calculator.
function initializeApp() {
  // reset the appState values
  appState.something = ''
  appState.phase = 'start'

  // clear the display
  refreshDisplay();
}

// Do something
function handleSomething() {
  if (appState.phase === 'something') return; // if calculated, do nothing

  // update appState phase
  appState.phase = 'something';

  // update the screen
  refreshDisplay();
}

// =========
// APP DISPLAY
// =========

// Function that pushes appState to the display
function refreshDisplay() {
  console.log(appState);
}

// =========
// INITIALIZE APP
// =========

initializeApp();
