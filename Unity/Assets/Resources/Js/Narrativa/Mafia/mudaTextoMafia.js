#pragma strict
//script que destroi os textos da narrativa da mafia

var i : int; //var do inspector que destroi o prefab

function Start () {

}

function Update () {

	if(MafiaNarrativa.proximo == i)
		Destroy(gameObject);

}