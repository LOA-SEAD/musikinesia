#pragma strict
//script do botao que aparece apos as 3 musicas terem sido tocadas


var efeitos : AudioClip[]; //sons de quando o mouse entra e quando o botao eh clicado

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space"))
		Acao();

}

function OnMouseOver() {

	renderer.material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseExit() {

	renderer.material.color = Color(1, 1, 1, 1);

}

function OnMouseDown() {

	audio.PlayOneShot(efeitos[1]);
	Acao();
			
}

function Acao() {

	if(transform.position.y > -25)
		{
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
				Application.LoadLevel("Jogo");
				}
			}
		
		else
			{
			Pontuacao.numMusica2 = 4;
			Pontuacao.puzzle = 0;
			Pontuacao.escolhaOK = false;
			Application.LoadLevel("Jogo");
			}
		}

}