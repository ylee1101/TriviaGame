var status = "done";
var total_seconds = 10*1;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
document.getElementById("quiz-time-left").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;

if(total_seconds <=0){
setTimeout("check()",1);
} 

else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);
}};

setTimeout("CheckTime()",1000);

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;

	if (question1 == "Muhammad-Ali") {
		correct++;
	}

	if (question2 == "Mike-Tyson") {
		correct++;
	}

	if (question3 == "Floyd-Mayweather") {
		correct++;
	}

	if (question4 == "Conor-McGregor") {
		correct++;
	}

	var messages = ["Hey You know some boxing!", "hmm ok ok", "Google It!!"];
	var gifs = ["assets/images/best.gif", "assets/images/good.gif", "assets/images/bad.gif"];
	var range;

	if (correct < 1) {
		range = 2;
	}

	if (correct > 0 && correct < 3) {
		range = 1;
	}

	if (correct > 2) {
		range = 0;
	}


	document.getElementById("results").style.visibility="visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("gif").src = gifs[range];

	//when pressed done button change the answer to true//

	if (status === "done") {
		document.getElementById("container").style.display="none";
		document.getElementById("button").innerHTML="Try Again";
		status = "try again";
	}

	else if (status === "try again") {
		total_seconds = 10*1;
		document.getElementById("container").style.display="unset";
		document.getElementById("results").style.visibility="hidden";
		document.getElementById("button").innerHTML="Done!";
		setTimeout("CheckTime()",1);
		status = "done"
	}

}
