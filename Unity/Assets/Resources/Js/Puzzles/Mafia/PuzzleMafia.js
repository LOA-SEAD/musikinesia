#pragma strict

static var tempoCerto : boolean; //PuzzleMafiaTeclas.js

static var animTriggerNum : int;

var animTriggerPrefab : GameObject[];

var metronomo : AudioClip[];

function Start () {

	Animacao();

}

function Update () {

	if(Input.GetKeyDown("a"))
		if(tempoCerto)
			print("ok");
	
	if(Input.GetKeyDown("s"))
		{		
		if(animTriggerNum < 3)
			animTriggerNum++;
		
		else
			animTriggerNum = 0;
		
		Animacao();
		}

}

function OnTriggerEnter(other : Collider) {

	tempoCerto = true;

}

function OnTriggerExit(other : Collider) {

	tempoCerto = false;

}

function Animacao() {
	
	yield WaitForSeconds(0.1);
	
	if(animTriggerNum == 0)
		{
		Instantiate(animTriggerPrefab[0], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[0];
		audio.Play();
		audio.loop = true;
		}
		
	if(animTriggerNum == 1)
		{
		Instantiate(animTriggerPrefab[1], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[1];
		audio.Play();
		audio.loop = true;
		}
	
	if(animTriggerNum == 2)
		{
		Instantiate(animTriggerPrefab[2], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[2];
		audio.Play();
		audio.loop = true;
		}
	
}

function OnGUI() {

	if(tempoCerto)
		GUI.Box(Rect(Screen.width*0.85, Screen.height*0.1, Screen.width*0.1, Screen.height*0.1), "");

}