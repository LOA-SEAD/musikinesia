#pragma strict

static var destruir : boolean; //acessada em Instanciar.js

function Start () {

}

function Update () {

	if(destruir)
		Destroy(gameObject);
	
}