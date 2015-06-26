#pragma strict
//script pra desativar textos
//o numero no inspector de cada texto define em qual momento ele deve ser desativado para dar lugar ao proximo texto


var proximo : float;

function Start () {

}

function Update () {

	if(Tutorial.proximo == proximo)
		GetComponent.<GUIText>().enabled = false;

}