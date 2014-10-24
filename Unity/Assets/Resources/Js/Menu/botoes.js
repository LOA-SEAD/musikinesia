#pragma strict
//script geral para todos os botoes do menu inicial


var guia : GameObject; //Objeto do lado dos escritos
var planoPreto : GameObject; //plano preto 70%
var loading : GameObject; //escrito do loading
var positionIns : Vector3; //posicao de instantiate

var efeitos : AudioClip[];

var creditos : GameObject; //tela de credito
var btVoltar : GameObject; //botao voltar

function Start () {
	
	guia.renderer.enabled = false;
	planoPreto.renderer.enabled = false;
	//transform.renderer.material.color.a = 0;
	guia.transform.renderer.material.color.a = 0;
	btVoltar.transform.position.y = -10; //botao Voltar fora da tela
	
}

function Update () {
	
	//if(transform.renderer.material.color.a != 1)
		//transform.renderer.material.color.a += 0.05;

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	//renderer.material.color -= Color(0, 0.1, 0.1, 0); //botao fica vermelho
	guia.renderer.enabled = true;
	
	//guia aparece ao lado do escrito
	guia.transform.renderer.material.color.a += 0.2; //animacao de fade
	guia.transform.position.x = transform.position.x - 2.5;
	guia.transform.position.y = transform.position.y;

	

}

function OnMouseExit () {

	//renderer.material.color = Color(1, 1, 1, 1); //botao fica na cor original
	guia.renderer.enabled = false;
	guia.transform.renderer.material.color.a = 0;

}

function OnMouseDown () {

	Jogo();
	audio.PlayOneShot(efeitos[1]);			

}

function Jogo () {

	if(gameObject.tag == "bt1" || gameObject.tag == "bt2")
		{
		guia.transform.renderer.material.color = Color(0, 0, 0, 1); //Guia fica preto ao clicar

		yield WaitForSeconds(0.2);
		planoPreto.renderer.enabled = true;
		planoPreto.renderer.material.color.a = 0.7;

		positionIns = Vector3(0.4, 0.5, -3);
		Instantiate(loading, positionIns, Quaternion.identity);

	
		yield WaitForSeconds(1.5);
	
	
		if(gameObject.tag == "bt1") //botao Jogar
			Application.LoadLevel("Introducao");
	
		if(gameObject.tag == "bt2") //botao Treino
			{
			Application.LoadLevel("Teclados_teste");
			Pontuacao.treino = true;
			}
		
		}
	
	if(gameObject.tag == "bt3") //botao Ranking
		Application.LoadLevel("Ranking");
	
	if(gameObject.tag == "bt4") //botao Creditos
		Application.LoadLevel("Creditos");
		
	if(gameObject.tag == "bt5") //botao Sair
		Application.Quit();	//botao Sair
	
		
}