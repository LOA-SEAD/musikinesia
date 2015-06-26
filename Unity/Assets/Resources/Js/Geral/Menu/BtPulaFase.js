#pragma strict
/*
static var objectLoaded : boolean;

function Start () {
	if(!objectLoaded) {
		objectLoaded = true;
	}
}

function Awake () {
	if(!objectLoaded) {
		DontDestroyOnLoad(gameObject);
	}
}
*/
function Update () {
	//if(Input.GetKeyUp("q")) {
	//	PulaFase();
	//}
}

function PulaFase() {
	if(Application.loadedLevel == 5) {
		switch(Pontuacao.numMusica2) {
		case 0: 
		case 1:
		case 2:
		case 3:
			PosMusicas.proximo = 34;
			Application.LoadLevel("NarrativaSuburbio");
			break;
			
		case 4:
			PosMusicas.proximo = 0;
			Application.LoadLevel("NarrativaSuburbio");
			break;
			
		case 5:
			PosMusicas.proximo = 56;
			Application.LoadLevel("NarrativaSuburbio");
			break;
			
		case 6:
			PosMusicas.proximo = 48;
			Application.LoadLevel("NarrativaSuburbio");
			break;
			
		case 7:
			MafiaNarrativa.proximo = 14;
			Application.LoadLevel("NarrativaMafia");
			break;
			
		case 8:
		case 9:
			MafiaNarrativa.proximo = 40;
			Application.LoadLevel("NarrativaMafia");
			break;
			
		case 10:
			NarrativaPirataTexto.i = 59;
			Application.LoadLevel("NarrativaPirata");
			break;
			
		case 11:
			NarrativaPirataTexto.i = 78;
			Application.LoadLevel("NarrativaPirata");
			break;
		}
		
		if(Pontuacao.puzzle == 1) {
			PosMusicas.proximo = 19;
			Application.LoadLevel("NarrativaSuburbio");
		}
	}
	
	if(Application.loadedLevel == 10) {
		MafiaNarrativa.proximo = 33;
		Application.LoadLevel("NarrativaMafia");
	}
	
	if(Application.loadedLevel == 11) {
		NarrativaPirataTexto.i = 38;
		Application.LoadLevel("NarrativaPirata");
	}
}