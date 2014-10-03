#pragma strict
//script dentro do prefab da bolinha azul que sinaliza a tecla apertada errada

function Start () {
	
}

function Update () {

	transform.localScale *= 1.07; //aumenta a bolinha que simboliza o erro do jogador
	Destroy(gameObject, 0.2); //destroi a bolinha

}