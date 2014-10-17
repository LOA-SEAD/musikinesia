#pragma strict

var i : int; //var do inspector que destroi o prefab

function Start () {

}

function Update () {

	if(PosMusicas.proximo == i)
		Destroy(gameObject);

}