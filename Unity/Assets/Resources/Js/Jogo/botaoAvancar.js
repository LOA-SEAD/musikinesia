#pragma strict

var efeitos : AudioClip[]; //sons de quando o mouse entra e quando o botao eh clicado

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space"))
		Acao();
	
	if(ChecaPuzzle.proximo == 17)
		if(!Pontuacao.treino)
			PlayerPrefs.SetInt("SaveGame", PosMusicas.proximo);

}

function OnMouseOver() {

	GetComponent.<Renderer>().material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseEnter() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[0]);

}

function OnMouseExit() {

	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);

}

function OnMouseUp() {

	Acao();
			
}

function Acao() {

	if(transform.position.y > -25)
		{
		GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);
		
		if(ChecaPuzzle.proximo != 17)
			{
			ChecaPuzzle.proximo++;	
			ChecaPuzzle.chamaFuncao = true;
			}
		
		else if(ChecaPuzzle.proximo == 17)
			{
			if(!Pontuacao.treino)
				{
				PosMusicas.proximo = 19;
				Application.LoadLevel("NarrativaSuburbio");
				}
				
			else
				{
				Pontuacao.numMusica = 0;
				Pontuacao.puzzle = 0;
				Application.LoadLevel("Treino");
				}
			}
		
		else
			{
			Pontuacao.numMusica2 = 4;
			Pontuacao.puzzle = 0;
			Pontuacao.escolhaOK = false;
			Application.LoadLevel("Treino");
			}
		}

}