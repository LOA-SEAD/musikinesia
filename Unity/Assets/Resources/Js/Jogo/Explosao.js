#pragma strict
//script dentro do prefab da explosao

var tempo : float = 0.2;

function OnEnable () {

	Desativar();
	
}

function Update () {

}

function Desativar () {
	yield WaitForSeconds (tempo);
	gameObject.SetActive(false);

}