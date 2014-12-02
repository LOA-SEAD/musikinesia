#pragma strict

static var tempoCerto : boolean; //PuzzleMafiaTeclas.js

static var animTriggerNum : int;

var animTriggerPrefab : GameObject[];

var metronomo : AudioClip[];

static var perdeu : boolean;

var panela : GameObject[];

function Start () {

	Animacao();
	
	panela[0].GetComponent(Animator).enabled = true;
	panela[1].GetComponent(Animator).enabled = false;
	panela[2].GetComponent(Animator).enabled = false;

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
	
	if(!PuzzleMafiaTeclas.etapaOK)
		perdeu = true;

}

function Animacao() {
	
	//yield WaitForSeconds(0.1);
	
	if(animTriggerNum == 0)
		{
		Instantiate(animTriggerPrefab[0], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[0];
		audio.Play();
		audio.loop = true;
		panela[0].GetComponent(Animator).enabled = true;
		panela[1].GetComponent(Animator).enabled = false;
		panela[2].GetComponent(Animator).enabled = false;
		}
		
	if(animTriggerNum == 1)
		{
		Instantiate(animTriggerPrefab[1], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[1];
		audio.Play();
		audio.loop = true;
		panela[1].GetComponent(Animator).enabled = true;
		panela[0].GetComponent(Animator).enabled = false;
		panela[2].GetComponent(Animator).enabled = false;
		}
	
	if(animTriggerNum == 2)
		{
		Instantiate(animTriggerPrefab[2], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[2];
		audio.Play();
		audio.loop = true;
		panela[2].GetComponent(Animator).enabled = true;
		panela[0].GetComponent(Animator).enabled = false;
		panela[1].GetComponent(Animator).enabled = false;
		}
	
}

function OnGUI() {

	if(tempoCerto)
		GUI.Box(Rect(Screen.width*0.85, Screen.height*0.1, Screen.width*0.1, Screen.height*0.1), "");

}