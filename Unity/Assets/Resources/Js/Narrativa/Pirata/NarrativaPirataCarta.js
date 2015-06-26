#pragma strict

var currentPosition : int = 0;
var delay : float;  // 10 characters per sec.
var Text : String = "";
//var additionalLines : String[];
var otherTexts : String[];

function Start () {
	
}

function Update () {

}

function Carta() {

	GetComponent.<GUIText>().text = "";
	currentPosition = 0;
	Text = "Tom, vejo que tem usado meu teclado com sabedoria. O inventei para \najudar as pessoas por meio de música, e você tem feito isso com muito \ntalento. Tens o coração e o dom de um verdadeiro Diapasão. \nTome cuidado com o Maelzel! Ele é ganancioso e quer o instrumento \napenas para enriquecer. Graças a ele estou preso no tempo e não há \ncomo voltar para casa sem meu teclado. \nEstou orgulhoso de você, meu neto. Espero voltar a vê-lo algum dia, \nem algum lugar ou em algum ano. Já deve estar grande. \nCom saudade, \n\nVovô Isaac Diapasão \n22/02/2157";
	
	//delay = 0.1;
	
	FirstStep();
		
}

function FirstStep() {

	while (true) {
		if (currentPosition < Text.Length)
	    	GetComponent.<GUIText>().text += Text[currentPosition++];
		yield WaitForSeconds (delay);
	}
}

@script RequireComponent(GUIText)