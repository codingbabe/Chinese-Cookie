var prediction = ["Today it's up to you to create the peacefulness you long for", "A friend asks only for your time not your money", "Your high-minded principles spell success", "Change can hurt, but it leads a path to something better", "Enjoy the good luck a companion brings you", "What ever you're goal is in life, embrace it visualize it, and for it will be yours", "Your shoes will make you happy today", "A dream you have will come true", "You will become great if you believe in yourself", "Wealth awaits you very soon"];

// do not repeat predictions in the same session

function anotherPrediction() {
	console.log("clicked");
	var x = Math.floor(Math.random() * prediction.length);
	console.log(x);
	console.log (prediction[x]);
	document.getElementById("prediction").innerHTML = prediction[x];
	// substract element from prediction array when user gets a prediction >> 
	prediction.splice(x, 1); 
	if (prediction.length >= 1) {
		 // while there are still predictions - user can click on the btn
		document.getElementById("btn").innerHTML = "Another one!";}
	else {
		// when no more predictions left - make the btn inactive
		document.getElementById("btn").disabled=true;
		document.getElementById("btn").innerHTML = "No more predictions";
	}
}

function choosePrediction() {
	console.log("entered number");
	var x = prompt("Enter a number between 1 and 10");
	console.log(x);
	//check if user has entered a number
	if (x!=0) {
		if (isNaN(x)) {
			alert("Not really a number!");
		}
		else
		//check if the number is between 1 and 10
			if ( x>= 1 && x<=10 ) {
				console.log (prediction[x-1]);
				document.getElementById("prediction2").innerHTML = prediction[x-1];
				document.getElementById("btn2").innerHTML = "I chose" + " " + x + ". Try again!"; //change the text on the button to display what number user picked
			}
			else
				alert("Oops... is your number really between 1 and 10 ?");
	}
	else
		alert("Be brave, pick a number!");
}


// show a list of all predictions
// further modifications:
// make them appear one by one
function showPredictions() {
	var str = "<ul>";
	//create a var str that holds an <ul> with every prediction array element as a <li> 
	for (i=0; i<prediction.length; i++) {
		console.log(i);
		str += '<li>'+ (i + 1) + ". " + prediction[i] + '</li>';
	}
	str += "</ul>";
	document.getElementById("list").innerHTML = str;
}