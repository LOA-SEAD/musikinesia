#pragma strict
//script generico para todas as teclas
//define a açao das teclas do teclado

static var teclaDown : boolean; //static para ser acessada em ChecarTrigger.js

var notas : AudioClip; //timbre

var corBranca : boolean;

var tecla : String = "a";
private var animator : Animator; 

var teclaValida : boolean;

var trigger : GameObject; //trigger referente a tecla
var trigger50 : GameObject; //trigger referente a tecla - 50% do valor

function Start () {

	animator = GetComponent(Animator);
	
	teclaDown = false;
	renderer.material.color = Color(1, 1, 1, 1);
	
}

function Update () {
	
	if(corBranca)
		renderer.material.color = Color(1, 1, 1, 1);
	
	if(Input.GetKeyDown(tecla) && teclaValida && Tutorial.proximo == 22)
		teclaApertada();

	if(Input.GetKeyUp(tecla) && teclaValida && Tutorial.proximo == 22)
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
			trigger.transform.collider.enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
			trigger50.transform.collider.enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
			}
		
		yield WaitForSeconds(0.02);
		
		audio.PlayOneShot(notas);
		
		//troca de cor das teclas
		if(ChecarTrigger.maisPontos)
			renderer.material.color = Color(0, 0.7, 0, 1);
		else
			renderer.material.color = Color(0.7, 0, 0, 1);
			
		yield WaitForSeconds(0.1);
				
		trigger.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		trigger50.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		

}

function teclaLevantada () {

		animator.SetTrigger ("UnPress");

		corBranca = true;
		trigger.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		trigger50.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		ChecarTrigger.maisPontos = false;
		teclaDown = false;

}


