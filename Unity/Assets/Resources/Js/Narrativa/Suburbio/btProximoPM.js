#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space"))
		if(transform.position.y > -25 && transform.position.y < 0)
			Acao();
			
	//if(gameObject.tag == "bt1" && PosMusicas.proximo >= 56)
		//transform.position.y = 40;

}

function OnMouseEnter() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	GetComponent.<Renderer>().material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	
}

function OnMouseDown () {
	
	if(gameObject.tag == "bt1")
		Pular();
	
	else if(gameObject.tag == "bt2")
		Acao();

}

function Acao() {
	
	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);
	
	if(PosMusicas.proximo == 36)
		{
		PosMusicas.proximo = 370; //tela fora da numeraçao normal
		PosMusicas.chamaAnimacao = true;
		}
	
	else if(PosMusicas.proximo == 370)
		{
		PosMusicas.proximo = 371; //tela fora da numeraçao normal
		PosMusicas.chamaAnimacao = true;
		}
	
	else if(PosMusicas.proximo == 51)
		{
		PosMusicas.proximo = 520; //tela fora da numeraçao normal
		PosMusicas.chamaAnimacao = true;
		}
		
	else
		{
		PosMusicas.proximo++;
		PosMusicas.chamaAnimacao = true;
		}
	
}

function Pular() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);

	PosMusicas.chamaAnimacao = true;

	if(PosMusicas.proximo <= 17)
		PosMusicas.proximo = 18;
	
	else if(PosMusicas.proximo > 17 && PosMusicas.proximo <= 32)
		PosMusicas.proximo = 33;
	
	else if(PosMusicas.proximo > 32 && PosMusicas.proximo <= 46)
		PosMusicas.proximo = 47;
	
	else if(PosMusicas.proximo > 47 && PosMusicas.proximo <= 54)
		PosMusicas.proximo = 55;
		
	else if(PosMusicas.proximo > 54)
		Application.LoadLevel("NarrativaMafia");

}