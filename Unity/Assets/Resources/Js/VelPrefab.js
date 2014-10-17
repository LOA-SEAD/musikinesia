#pragma strict
//script inserido nos prefabs das notas das musicas.


static var speed : float; //static para ser acessada em Pontuacao.js

function Start () {

	speed = 0; //prefab começa parado ate ser definida a dificuldade em Pontuacao.js

}

function Update () {

	transform.position.x -= speed*Time.deltaTime; //velocidade do prefab das notas de uma musica

}