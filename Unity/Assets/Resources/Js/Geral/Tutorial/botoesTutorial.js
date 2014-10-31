#pragma strict
//script dos botoes da cena do tutorial


var efeitos : AudioClip[];

function Start () {

	if(transform.position.y > 17) //botao Pular
		{
		if(Pontuacao.numMusica == 0)
			transform.position.y = 19.42;
		else
			transform.position.y = 40;
		}

}

function Update () {

	if(Input.GetKeyDown("space"))
		Acao();

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0); //fica vermelho

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1); //volta pra cor natural
	
}

function OnMouseDown () {

	audio.PlayOneShot(efeitos[1]);
	if(gameObject.tag == "bt1") //botao Pular
		{
		Introducao.proximo = 26;
		Application.LoadLevel("Introducao");
		}
	
	if(gameObject.tag == "bt3") //botao voltar
		Tutorial.chamarVoltar = true;
	
	if(transform.position.y < -10) //botao avançar
		Acao();
	
}

function Acao() {

	if(gameObject.tag == "bt2") //botao avançar
		{
		Tutorial.proximo++;
		Tutorial.chamarAnimacao = true;
		}
	
}