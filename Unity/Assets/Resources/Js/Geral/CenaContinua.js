#pragma strict

var currentPosition : int = 0;
var delay : float = 0.5;  // 10 characters per sec.
var Text : String = "";

function Start () {
	guiText.text = "";
	currentPosition = 0;
	delay = 0.07;
	Text = "Continua...";
	FirstStep();
	
	yield WaitForSeconds(4);
	
	Application.LoadLevel("Menu");
}

function Update () {

}

function FirstStep() {

	//for ( var S : String in additionalLines )
        	//Text += "\n" + S;
	while (true) {
		if (currentPosition < Text.Length)
	    	guiText.text += Text[currentPosition++];
		yield WaitForSeconds (delay);
	}
}

@script RequireComponent(GUIText)