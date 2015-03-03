#pragma strict
//script dentro do prefab da explosao

function Start () {
	
	yield WaitForSeconds (0.2);
	
	Desativar();
	
}

function Update () {

}

function Desativar () {

	gameObject.SetActive(false);

}