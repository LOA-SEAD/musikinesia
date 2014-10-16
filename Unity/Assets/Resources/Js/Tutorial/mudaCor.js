#pragma strict
//script inserido no teclado fake (imagem das teclas sem funcionalidade)
//troca a cor de cada tecla de acordo com o numero definido no inspector


var proximo : float;

function Start () {

}

function Update () {

	if(Tutorial.proximo == proximo)
		transform.renderer.material.color = Color(0.9, 0.9, 0, 1); //troca para verde
	
	if(Tutorial.proximo != proximo)
		transform.renderer.material.color = Color(1, 1, 1, 1); //volta a cor original
	
	if(Tutorial.proximo >= 17) //Destroi o teclado quando termina a exibiçao das teclas
		Destroy(gameObject);

}