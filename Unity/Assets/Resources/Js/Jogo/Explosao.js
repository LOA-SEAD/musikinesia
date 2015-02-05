#pragma strict
//script dentro do prefab da explosao

function Start () {
	
	yield WaitForSeconds (1.5);
	
	Desativar();
	
}

function Update () {

}

function Desativar () {

	gameObject.SetActive(false);

}