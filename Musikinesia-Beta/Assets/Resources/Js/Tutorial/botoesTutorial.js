#pragma strict
//script dos botoes da cena do tutorial


var efeitos : AudioClip[];

function Start () {

}

function Update () {

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0); //fica vermelho

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1); //volta pra cor natural
	
}

function OnMouseDown () {

	audio.PlayOneShot(efeitos[1]);
	if(transform.position.y > 17) //botao Pular
		{
		Introducao.proximo = 26;
		Application.LoadLevel("Introducao");
		}
	
	if(transform.position.y < 17 && transform.position.y > -10) //botao voltar
		Tutorial.chamarVoltar = true;
	
	if(transform.position.y < -10) //botao avançar
		{
		Tutorial.proximo++;
		Tutorial.chamarAnimacao = true;
		}
	
}