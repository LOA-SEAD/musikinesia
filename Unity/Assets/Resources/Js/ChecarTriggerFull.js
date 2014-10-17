#pragma strict
//script que define o que acontece quando uma nota eh acertada na posicao central da zona de acerto

var explosao : GameObject; //explosao da nota quando acertada dentro da zona de acerto

function Start () {

}

function Update () {

}


function OnTriggerEnter (other: Collider) {

	if(Pontuacao.puzzle == 0) //funciona soh para as musicas
		{
		ChecarTrigger.pontosFeitos += 10*Pontuacao.multiplicador; //soma a pontuacao 10 vezes o multiplicador definido em Pontuacao.js
		ChecarTrigger.pontos += 10*Pontuacao.multiplicador; //soma a pontuacao 10 vezes o multiplicador definido em Pontuacao.js
		Destroy(other.gameObject); //destroi a nota acertada
		Instantiate(explosao, other.transform.position, other.transform.rotation); //instancia a explosao da nota acertada
		}
	
}