#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown() {

	Limpar();

}

function Limpar() {

	if(transform.position.x < -4)
		if(PlayerPrefs.HasKey("HScore" + 1))
			PlayerPrefs.DeleteKey("HScore" + 1);

	else if(transform.position.x > -4 && transform.position.x < 6)
		if(PlayerPrefs.HasKey("HScore" + 5))
			PlayerPrefs.DeleteKey("HScore" + 5);
	
	else if(transform.position.x > 6)
		if(PlayerPrefs.HasKey("HScore" + 3))
			PlayerPrefs.DeleteKey("HScore" + 3);

}