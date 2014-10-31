#pragma strict
//script para destruir objetos quando apertado o botao de Voltar no tutorial
//voltar = -1 no inspector eh para anular esse valor

var voltar : int[];

function Start () {

}

function Update () {

	if((Tutorial.voltar == voltar[0] || Tutorial.voltar == voltar[1] || Tutorial.voltar == voltar[2]) && Tutorial.btVoltar)
		Destroy(gameObject);	

}