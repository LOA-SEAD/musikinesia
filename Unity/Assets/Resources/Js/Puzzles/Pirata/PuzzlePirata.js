#pragma strict

var alvo : GameObject;
var canhao : GameObject;
var bola : GameObject;


function Start () {

	novosObjetos();
	canhao.GetComponent(Animator).enabled = true;
	
}

function Update() {

	if(MovBola.novaBola)
		novosObjetos();
		
}

function novosObjetos() {
	
	MovBola.novaBola = false;
	
	yield WaitForSeconds(0.2);
	
	var respawn = GameObject.FindGameObjectWithTag("Respawn");	
	
	var val = Random.Range(0,2);
	
	if(val == 0)
		Instantiate(alvo, Vector3(6.45, 1.6, 3), Quaternion.identity);
		
	else if(val == 1)
		Instantiate(alvo, Vector3(6.45, 0, 3), Quaternion.identity);
	
	else if(val == 2)
		Instantiate(alvo, Vector3(6.45, -0.9, 3), Quaternion.identity);
		
	
	var val2 = Random.Range(0,2);
	
	if(val2 == 0)
		Instantiate(canhao, Vector2(-6.45, 2), Quaternion.identity);
		
	else if(val2 == 1)
		Instantiate(canhao, Vector2(-6.45, 0.5), Quaternion.identity);
	
	else if(val2 == 2)
		Instantiate(canhao, Vector2(-6.45, -1), Quaternion.identity);
		
	yield WaitForSeconds (0.5);
	
	Instantiate(bola, GameObject.FindGameObjectWithTag("Respawn").transform.position, Quaternion.identity);
	
}