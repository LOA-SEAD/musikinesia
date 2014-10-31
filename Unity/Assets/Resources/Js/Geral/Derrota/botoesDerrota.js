#pragma strict
//script dos botoes da tela de Derrota

var audios : AudioClip[];

function Start () {

}

function Update () {

}

function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1);
	
}

function OnMouseDown () {

	Escolha();
	audio.PlayOneShot(audios[1]);	

}

function OnMouseEnter() {

	audio.PlayOneShot(audios[0]);

}

function Escolha () {

	if(gameObject.tag == "bt1") //recomeçar
		{
		if(Pontuacao.puzzle == 1)
			{
			ChecaPuzzle.proximo = 15;
			ChecaPuzzle.chamaFuncao = true;
			}
		Application.LoadLevel("Jogo");
		}
		
	if(gameObject.tag == "bt2") //menu inicial
		Application.LoadLevel("Menu");
		
}