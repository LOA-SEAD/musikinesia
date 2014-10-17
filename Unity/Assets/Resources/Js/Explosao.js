#pragma strict
//script dentro do prefab da explosao

function Start () {
	
}

function Update () {

	Destroy(gameObject, 1.5); //Destroi a explosao de cada nota 1,5s depois de instanciada

}