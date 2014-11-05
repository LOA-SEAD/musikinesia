#pragma strict
//script que mostra os valores do combo na tela do jogo


function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;
	
	if(!Pontuacao.treino && Pontuacao.puzzle == 0)
		{
		if(Pontuacao.combo < 37) //37 eh o numero do combo maximo
			myMesh.text = Pontuacao.combo.ToString() + "/" + Pontuacao.comboRestante.ToString();

		else if(Pontuacao.combo >= 37)
			myMesh.text = "CHEIO";
		}
	
	else if(!Pontuacao.treino && Pontuacao.puzzle == 1)
		myMesh.text = ChecaPuzzle.relogInt.ToString(); //relogio do puzzle
	
	else
		myMesh.text = "--";


}