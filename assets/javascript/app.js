// create time remaining countdown
// CREATE OBJECT IN HTML FOR QUESTIONS/ ANSWER {A: 'ANSWER VALUE', B: 'ANSWER'} maybe create <ul> list in html for answer choices
//  create for loop to check through answers and see if right one piecled? code answer choice selectors (bubbles where you can pick a choice)
// javascript needs to see if user picked the right choice
// create counters for correct, incorrect, unanswered
// if correct, then change score counter ++ that appears at the end
// if incorrect, incorrect counter ++
// if unsanswered, unanswered ++
// end game if time up or press Done 

// https://www.sitepoint.com/simple-javascript-quiz/

// create timer
let countDown = 200;

let IntervalId;

function stopTimer (){
    clearInterval(IntervalId);
}

function decrement() {
    countDown--;
    $('.counter').html('Time Remaining: ' + countDown);
    
    if(countDown === 0) {
        stopTimer();
        alert('Yo time is up');
    }
}

function runTimer (){
    clearInterval(IntervalId);
    IntervalId = setInterval(decrement, 1000);
}

runTimer();

// register button clicked


var questions = [
	{
		question: "The Iran-Contra Affair was a secret U.S. arms deal with Iran (where the US had previously placed a trade embargo due to the Iran Hostage Crisis) that traded missiles and other arms to free other Americans held hostage by terrorists, but also used funds from the arms deal to support an anti-communist, cocaine-funded armed militant group in which country?", 
		choice: ["Nicaragua", "Venezuela", "Iraq", "Afghanistan"],
		answer: 0,
	 },
	 {
	 	question: "Approximately how old is Earth?", 
		choice: ["80.6 million years", "2 million years", "4.5 billion years", "25 min"],
		answer: 2,
     }];
     
     
var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var intervalId;
var userGuess ="";

$('.answers').append(questions.choice)

// trying to resolve problem, need to register which button was clicked in html and compare it to the item's position in the array, if button clicked === correct answer's position, correctCount ++
// but unsure about whether I should try to create an on "click" event from html, or create a list of options in javascript
// lopping through an array to find if the correct option was clicked might be easier
// and then would need to make sure my object shows up in html page
// would also need to append radio button to each answer choice 
