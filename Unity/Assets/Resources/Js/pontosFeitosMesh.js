#pragma strict
//script que mostra os pontos feitos quando uma nota eh acertada
//os pontos aparecem sobre a zona de acerto, na cor verde
//eh instanciado sempre que uma nota eh acertada

function Start () {

	yield WaitForSeconds(0.4);
	
	ChecarTrigger.pontosFeitos = 0; //zera porque a nota acertada em seguida precisa mostrar o valor sem a influencia da anterior
	Destroy(gameObject);
	
}

function Update () {
	
	transform.position.y += 0.7*Time.deltaTime;
	
	var myMesh = GetComponent(TextMesh);
	myMesh.text = ChecarTrigger.pontosFeitos.ToString(); 

}