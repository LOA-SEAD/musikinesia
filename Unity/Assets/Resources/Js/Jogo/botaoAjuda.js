#pragma strict
//script do botao ajuda na tela do jogo
//serve para ativar duas telas diferentes, uma por vez

var imagem : Sprite[];
//0 = nota normal
//1 = nota apertada
//2 = tecla normal
//3 = tecla apertada

var ajuda : GameObject[];

function Start () {
	
	ajuda[0].GetComponent.<Renderer>().enabled = false; //notas
	ajuda[1].GetComponent.<Renderer>().enabled = false; //teclas
	
}

function Update () {
					
}

function OnMouseDown() {

	GetComponent(SpriteRenderer).sprite = imagem[1];
	
	if(gameObject.tag == "bt1")
		{
		ajuda[0].GetComponent.<Renderer>().enabled = !ajuda[0].GetComponent.<Renderer>().enabled; //liga ou desliga a imagem das notas	
		ajuda[1].GetComponent.<Renderer>().enabled = false; //desliga a imagem das teclas
		GetComponent(SpriteRenderer).sprite = imagem[1];
		}
		
	else if(gameObject.tag == "bt2")
		{
		ajuda[1].GetComponent.<Renderer>().enabled = !ajuda[1].GetComponent.<Renderer>().enabled; //liga ou desliga a imagem das teclas
		ajuda[0].GetComponent.<Renderer>().enabled = false; //desliga a imagem das notas
		GetComponent(SpriteRenderer).sprite = imagem[3];
		}

}

function OnMouseUp() {

	if(gameObject.tag == "bt1")
		GetComponent(SpriteRenderer).sprite = imagem[0];
		
	else if(gameObject.tag == "bt2")
		GetComponent(SpriteRenderer).sprite = imagem[2];

}