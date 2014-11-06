#pragma strict
//script geral para todos os botoes do menu inicial


var guia : GameObject; //Objetos do lado dos escritos
var planoPreto : GameObject; //plano preto 70%
var loading : GameObject; //escrito do loading
var positionIns : Vector3; //posicao de instantiate

var efeitos : AudioClip[];

var creditos : GameObject; //tela de credito
var btVoltar : GameObject; //botao voltar

var continuaOK : int; //habilita o botao continua

function Start () {
	
	planoPreto.renderer.enabled = false;
	//transform.renderer.material.color.a = 0;
	btVoltar.transform.position.y = -10; //botao Voltar fora da tela
	
	//save game
	continuaOK = PlayerPrefs.GetInt("Continua"); //botao Continua ativo
	
}

function Update () {
	
	//if(transform.renderer.material.color.a != 1)
		//transform.renderer.material.color.a += 0.05;
	
	//if(gameObject.tag == "bt2" && savedGame == 0) //botao Continuar
		//color = Color(0.7, 0.7, 0.7, 1); //botao fica cinza = inativo
		

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	//renderer.material.color -= Color(0, 0.1, 0.1, 0); //botao fica vermelho

	
	//guia aparece ao lado do escrito
	guia.GetComponent(SpriteRenderer).enabled = true;

}

function OnMouseExit () {

	//renderer.material.color = Color(1, 1, 1, 1); //botao fica na cor original
	guia.GetComponent(SpriteRenderer).enabled = false;
	
}

function OnMouseDown () {

	Jogo();
	audio.PlayOneShot(efeitos[1]);			

}

function Jogo () {

	if(gameObject.tag == "bt1" || (gameObject.tag == "bt2" && continuaOK == 1) || gameObject.tag == "bt3")
		{
		//guia.transform.renderer.material.color = Color(0, 0, 0, 1); //Guia fica preto ao clicar

		yield WaitForSeconds(0.2);
		planoPreto.renderer.enabled = true;
		planoPreto.renderer.material.color.a = 0.7;

		positionIns = Vector3(0.4, 0.5, -3);
		Instantiate(loading, positionIns, Quaternion.identity);

	
		yield WaitForSeconds(1.5);
		
		if(gameObject.tag == "bt1") //botao Novo Jogo
			{
			PlayerPrefs.SetInt("SaveGame", 0); //valor usado pra narrativa
			PlayerPrefs.SetInt("Continua", 0); //botao Continua
			Application.LoadLevel("Introducao");
			}
		
		if(gameObject.tag == "bt2" && continuaOK == 1) //botao Continuar
			{
			PosMusicas.proximo = PlayerPrefs.GetInt("SaveGame");
			Application.LoadLevel("NarrativaSuburbio");
			}
	
		if(gameObject.tag == "bt3") //botao Treino
			{
			Application.LoadLevel("Jogo");
			Pontuacao.treino = true;
			}
			//Application.LoadLevel("Ranking");
		}
	
	if(gameObject.tag == "bt4") //botao Creditos
		Application.LoadLevel("Creditos");
		
	if(gameObject.tag == "bt5") //botao Sair
		Application.Quit();	//botao Sair
	
		
}