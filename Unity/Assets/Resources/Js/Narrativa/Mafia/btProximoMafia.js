#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space") && transform.localPosition.y == -305.7)
		Acao();

}

function OnMouseEnter() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[0]);

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
		
		else if(MafiaNarrativa.proximo >= 13 && MafiaNarrativa.proximo < 32)
			Application.LoadLevel("PuzzleMafia");
		
		else if(MafiaNarrativa.proximo >= 32 && MafiaNarrativa.proximo < 39)
			{		
			Pontuacao.numMusica = 8;
			Application.LoadLevel("Jogo");
			}
		
		else if(MafiaNarrativa.proximo < 64)
			{
			NarrativaPirataTexto.i = 0;		
			Application.LoadLevel("NarrativaPirata");
			}
		}

	if(gameObject.tag == "bt2") //botao Proximo
		{
		GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);
		MafiaNarrativa.proximo++;
		MafiaNarrativa.btProximo = false;
		MafiaNarrativa.chamaFuncao = true;
		}

}