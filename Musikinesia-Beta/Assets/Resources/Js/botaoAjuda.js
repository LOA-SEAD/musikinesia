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

	ajuda[0].renderer.enabled = false; //notas
	ajuda[1].renderer.enabled = false; //teclas
	ajuda[2].renderer.enabled = false; //notas do puzzle
	
}

function Update () {

					
}

function OnMouseDown() {

	GetComponent(SpriteRenderer).sprite = imagem[1];
	
	if(transform.position.y > -9)
		{
		if(Pontuacao.puzzle == 0)
			ajuda[0].renderer.enabled = !ajuda[0].renderer.enabled; //liga ou desliga a imagem das notas
			else
				ajuda[2].renderer.enabled = !ajuda[2].renderer.enabled; //liga ou desliga a imagem das notas do puzzle
				
		ajuda[1].renderer.enabled = false; //desliga a imagem das teclas
		GetComponent(SpriteRenderer).sprite = imagem[1];
		}
		else
			{
			ajuda[1].renderer.enabled = !ajuda[1].renderer.enabled; //liga ou desliga a imagem das teclas
			ajuda[0].renderer.enabled = false; //desliga a imagem das notas
			GetComponent(SpriteRenderer).sprite = imagem[3];
			}

}

function OnMouseUp() {

	if(transform.position.y > -9)
		GetComponent(SpriteRenderer).sprite = imagem[0];
		else
			GetComponent(SpriteRenderer).sprite = imagem[2];

}