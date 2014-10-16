#pragma strict
//script para os textos dos botoes da tela de escolha

function Start () {

}

function Update () {

	if(Pontuacao.escolhaOK)
		Destroy(gameObject);

}