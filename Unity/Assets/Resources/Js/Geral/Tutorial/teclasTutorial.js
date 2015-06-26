#pragma strict
//script generico para todas as teclas
//define a açao das teclas do teclado

private var csScript : MidiInput;
csScript = this.GetComponent("MidiInput");

var channel : MidiChannel = MidiChannel.All;

private var noteNumber : int; //soma de noteNumberFirst e noteNumberNext;
static var noteNumberFirst : int; //primeira nota, definina no menu inicial;
var noteNumberNext : int; //soma um valor a nota inicial, pra definir só a primeira no inspector

static var teclaDown : boolean; //static para ser acessada em ChecarTrigger.js

var notas : AudioClip; //timbre

var corBranca : boolean;

var tecla : String = "a";
private var animator : Animator; 

var teclaValida : boolean;

var trigger : GameObject; //trigger referente a tecla
var trigger50 : GameObject; //trigger referente a tecla - 50% do valor

function Awake() {
	noteNumber = noteNumberFirst + noteNumberNext;
}

function Start () {

	animator = GetComponent(Animator);
	
	teclaDown = false;
	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	
}

function Update () {
	
	if(corBranca)
		GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	
	if((Input.GetKeyDown(tecla) || csScript.GetKeyDown (channel, noteNumber)) && teclaValida && Tutorial.proximo == 22)
		teclaApertada();

	if((Input.GetKeyUp(tecla)  || csScript.GetKeyUp (channel, noteNumber)) && teclaValida && Tutorial.proximo == 22)
		teclaLevantada();
			
}

function OnMouseDown() {
	
	if(teclaValida && Tutorial.proximo == 22)
		teclaApertada();
	/*else
		{
		audio.PlayOneShot(notas);
		renderer.material.color = Color(0.7, 0, 0, 1);
		}*/

}

function OnMouseUp() {
	
	if(teclaValida && Tutorial.proximo == 22)
		teclaLevantada();
	
}

function teclaApertada () {

		teclaDown = true;
		corBranca = false;
		
		animator.SetTrigger ("DoPress");
		
		if(teclaDown)
			{
			trigger.SetActive(true);
			trigger50.SetActive(true);
			//trigger.transform.GetComponent.<Collider>().enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
			//trigger50.transform.GetComponent.<Collider>().enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
			}
		
		yield WaitForSeconds(0.02);
		
		GetComponent.<AudioSource>().PlayOneShot(notas);
		
		//troca de cor das teclas
		if(ChecarTrigger.maisPontos)
			GetComponent.<Renderer>().material.color = Color(0, 0.7, 0, 1);
		else
			GetComponent.<Renderer>().material.color = Color(0.7, 0, 0, 1);
			
		yield WaitForSeconds(0.1);
		
				
		trigger.SetActive(false);
		trigger50.SetActive(false);		
		//trigger.transform.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		//trigger50.transform.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		

}

function teclaLevantada () {

		animator.SetTrigger ("UnPress");

		corBranca = true;
		trigger.SetActive(false);
		trigger50.SetActive(false);
		//trigger.transform.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		//trigger50.transform.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		ChecarTrigger.maisPontos = false;
		teclaDown = false;

}


