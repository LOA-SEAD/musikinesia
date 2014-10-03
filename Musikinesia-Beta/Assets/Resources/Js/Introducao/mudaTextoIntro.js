#pragma strict
//destroi objetos nos valores do inspector


var proximo : int[];

function Start () {

}

function Update () {

	if(Introducao.proximo == proximo[0] || Introducao.proximo == proximo[1] || Introducao.proximo == proximo[2])
		Destroy(gameObject);

}