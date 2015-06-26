#pragma strict

var pirata : boolean[];
var contador : int;

function Start () {
	contador = 0;
}

function Update () {
	if(pirata[0]) {
		NarrativaPirataTexto.i = 0;
		Application.LoadLevel("NarrativaPirata");
	}
	
	if(pirata[1] ) {
		NarrativaPirataTexto.i = 38;
		Application.LoadLevel("NarrativaPirata");
	}
	
	if(pirata[2] ) {
		NarrativaPirataTexto.i = 59;
		Application.LoadLevel("NarrativaPirata");
	}
	
	if(pirata[3]) {
		NarrativaPirataTexto.i = 78;
		Application.LoadLevel("NarrativaPirata");
	}
	
	if (Input.GetKeyDown("q")) {
		contador++;
		ChamaCena();
	}
}

function ChamaCena() {
	if(contador > 2) {
		if(Pontuacao.numMusica < 10) {
			NarrativaPirataTexto.i = 38;
			Application.LoadLevel("NarrativaPirata");
		}
		
		else if(Pontuacao.numMusica ==  10) {
			NarrativaPirataTexto.i = 59;
			Application.LoadLevel("NarrativaPirata");
		}
		
		else if(Pontuacao.numMusica ==  11) {
			NarrativaPirataTexto.i = 78;
			Application.LoadLevel("NarrativaPirata");
		}
	}
}