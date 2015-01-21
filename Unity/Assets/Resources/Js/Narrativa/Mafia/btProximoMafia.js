#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space") && transform.localPosition.y == -305.7)
		Acao();

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseDown() {

	Acao();

}

function Acao() {

	if(gameObject.tag == "bt1") //botao Pular
		{
		if(MafiaNarrativa.proximo < 13)
			{
			Pontuacao.numMusica = 7;
			Application.LoadLevel("Jogo");
			}
		
		if(MafiaNarrativa.proximo < 32)
			Application.LoadLevel("PuzzleMafia");
		
		if(MafiaNarrativa.proximo < 39)
			{		
			Pontuacao.numMusica = 8;
			Application.LoadLevel("Jogo");
			}
		
		/*if(MafiaNarrativa.proximo < 64)
			{		
			Mundo Piratas
			}*/
		}

	if(gameObject.tag == "bt2") //botao Proximo
		{
		audio.PlayOneShot(efeitos[1]);
		MafiaNarrativa.proximo++;
		MafiaNarrativa.btProximo = false;
		MafiaNarrativa.chamaFuncao = true;
		}

}