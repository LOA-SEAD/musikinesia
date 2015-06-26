#pragma strict
//script dos botoes da cena do tutorial


var efeitos : AudioClip[];

function Start () {

	if(gameObject.tag == "bt1") //botao Pular
		{
		if(Pontuacao.numMusica == 0)
			transform.position.y = 19.42;
		else
			transform.position.y = 40;
		}

}

function Update () {

	if(Input.GetKeyDown("space") && Tutorial.btProximo)
		Acao1();

}

function OnMouseEnter() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	GetComponent.<Renderer>().material.color -= Color(0, 0.1, 0.1, 0); //fica vermelho

}

function OnMouseExit () {

	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1); //volta pra cor natural
	
}

function OnMouseDown () {

	if(gameObject.tag == "bt2") //botao avançar
		Acao1();
	
	else
		Acao2();
	
}

function Acao1() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);

	Tutorial.proximo++;
	Tutorial.chamarAnimacao = true;
	Tutorial.btProximo = true;

}

function Acao2() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);

	if(gameObject.tag == "bt1") //botao Pular
		{
		if(!Pontuacao.treino)
			{
			Introducao.proximo = 26;
			Application.LoadLevel("Introducao");
			}
			
		else
			Application.LoadLevel("Jogo");
		}
	
	if(gameObject.tag == "bt3") //botao voltar
		Tutorial.chamarVoltar = true;

}