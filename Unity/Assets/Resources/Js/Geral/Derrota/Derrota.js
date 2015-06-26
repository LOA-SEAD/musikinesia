#pragma strict
//script inserido na MainCamera da cena Derrota

var som : AudioClip[];

function Start () {

	AudioListener.pause = false;
	
	yield WaitForSeconds(0.1);	

	GetComponent.<AudioSource>().PlayOneShot(som[0]);
	
	yield WaitForSeconds(1.5);
	
	GetComponent.<AudioSource>().PlayOneShot(som[1]);

}

function Update () {

}