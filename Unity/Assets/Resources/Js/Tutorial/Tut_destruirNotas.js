#pragma strict
//destroi as notas instanciadas de acordo com as partes da narrativa (numero do Tutorial.proximo).


function Start () {

}

function Update () {

	if(Tutorial.proximo == 7 || Tutorial.proximo == 17 || Tutorial.proximo == 21)
		Destroy(gameObject);

}