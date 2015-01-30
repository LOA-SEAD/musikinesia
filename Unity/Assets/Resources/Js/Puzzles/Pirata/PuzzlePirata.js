#pragma strict

var alvo : GameObject;
var canhao : GameObject;
var bola : GameObject;
static var etapa : int; //define em qual parte esta o puzzle

static var pontos: int;
static var chances : int; //define quantas vezes o jogador vai poder acertar o alvo em cada parte do puzzle

function Start () {

	etapa = 0;
	pontos = 0;

	if(etapa == 1)
		{
		novosObjetos();
		canhao.GetComponent(Animator).enabled = true;
		}
	
	
	
}

function Update() {

	if(MovBola.novaBola && chances <= 5 && etapa == 1)
		novosObjetos();
		
}

function ControleFase() { //determina o que acontece em cada etapa

	

}

function novosObjetos() {
	
	MovBola.novaBola = false;
	
	yield WaitForSeconds(0.2);
	
	var respawn = GameObject.FindGameObjectWithTag("Respawn");	
	
	var val = Random.Range(0,3);
	
	if(val < 1)
		Instantiate(alvo, Vector3(6.45, 1.6, 3), Quaternion.identity);
		
	else if(val == 1)
		Instantiate(alvo, Vector3(6.45, 0, 3), Quaternion.identity);
	
	else if(val > 1)
		Instantiate(alvo, Vector3(6.45, -0.9, 3), Quaternion.identity);
		
	
	var val2 = Random.Range(0,3);
	
	if(val2 < 1)
		Instantiate(canhao, Vector2(-6.45, 2), Quaternion.identity);
		
	else if(val2 == 1)
		Instantiate(canhao, Vector2(-6.45, 0.5), Quaternion.identity);
	
	else if(val2 > 1)
		Instantiate(canhao, Vector2(-6.45, -1), Quaternion.identity);
		
	yield WaitForSeconds (0.5);
	
	Instantiate(bola, GameObject.FindGameObjectWithTag("Respawn").transform.position, Quaternion.identity);
	
}