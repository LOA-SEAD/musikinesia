#pragma strict
//script para limitar o movimento do quadro
//incorporar em outro script na versao final

function Start () {

}

function Update () {

	if(transform.position.y <= -5.81)
		transform.position.y = -5.7;
	
	if(transform.position.y >= 11.67)
		transform.position.y = 11.5;
	
	if(transform.position.x <= -12.41)
		transform.position.x = -12.35;
	
	if(transform.position.x >= 41.44)
		transform.position.x = 41;

}