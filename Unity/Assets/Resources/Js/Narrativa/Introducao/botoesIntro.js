#pragma strict
//script do botao Pular, presente na tela da animacao de introducao

var efeitos : AudioClip[];

function Start () {

	GameObject.FindWithTag("bt1").GetComponent(BoxCollider).enabled = true;
	GameObject.FindWithTag("bt1").GetComponent(SpriteRenderer).enabled = true;

}

function Update () {

	if(Input.GetKeyDown("space"))
		if(transform.position.y > -6 && transform.position.y < 0)
			Acao();
	
	if(Introducao.proximo == 26)
		{
		GameObject.FindWithTag("bt1").GetComponent(BoxCollider).enabled = false;
		GameObject.FindWithTag("bt1").GetComponent(SpriteRenderer).enabled = false;
		}
			

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1);
	
}

function OnMouseDown () {

	if(transform.position.y > 0)
		{
		if(gameObject.tag == "bt1") //26 eh o numero de troca da tela de tutorial para a segunda parte da introduçao
			Application.LoadLevel("Tutorial");
		else if(gameObject.tag == "bt2")
			Application.LoadLevel("TelaJogar");
		}
	
	if(transform.position.y > -6 && transform.position.y < 0)
		Acao();
	
}

function Acao() {
	
	audio.PlayOneShot(efeitos[1]);

	Introducao.proximo++;
	Introducao.chamaAnimacao = true;

}