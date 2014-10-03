#pragma strict
//script que mostra os pontos feitos durante a partida, na tela de jogo.


function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;
	
	if(!Pontuacao.treino)
		myMesh.text = Pontuacao.pontuacao.ToString();
		else
			myMesh.text = "--";

}