#pragma strict
//script que mostra o valor do multiplicador na tela do jogo

function Start () {

}

function Update () {
	
	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.red; //cor do texto
	
	if(!Pontuacao.treino)
		myMesh.text = Pontuacao.multiplicador.ToString() + "X";
		else
			myMesh.text = "--";

}