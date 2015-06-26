#pragma strict
//script que define o que acontece quando uma nota eh acertada na posicao central da zona de acerto

//var explosao : GameObject; //explosao da nota quando acertada dentro da zona de acerto

function OnEnable() {
	//DesligaTrigger();
}

function Start () {

}

function FixedUpdate () {
	
}


function OnTriggerEnter (other: Collider) {	
	if(Pontuacao.puzzle == 0 && Teclas.teclasApertadas == 1) { //funciona soh para as musicas
		if(Teclas.notaTag == other.gameObject.tag || other.gameObject.tag == "notaTeclaComum") {
			ChecarTrigger.pontosFeitos += 10*Pontuacao.multiplicador; //soma a pontuacao 10 vezes o multiplicador definido em Pontuacao.js
			ChecarTrigger.pontos += 10*Pontuacao.multiplicador; //soma a pontuacao 10 vezes o multiplicador definido em Pontuacao.js
			//Destroy(other.gameObject); //destroi a nota acertada
			//Instantiate(explosao, other.transform.position, other.transform.rotation); //instancia a explosao da nota acertada
			//gameObject.GetComponent.<Collider>().enabled = false;
			
			//print("triggerFull2");
		}
	}
	
}
/*
function DesligaTrigger() {
	WaitForSeconds(0.1);
	gameObject.SetActive(false);
}*/