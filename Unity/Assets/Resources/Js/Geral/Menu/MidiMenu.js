#pragma strict

static var midiValor : int = 60;
var midiTexto : GameObject;

function Awake () {
	if(PlayerPrefs.HasKey("midiValor")) {
		midiValor = PlayerPrefs.GetInt("midiValor");
		midiTexto.GetComponent(TextMesh).text = "" + midiValor;
		Teclas.noteNumberFirst = midiValor;
		PuzzleMafiaTeclas.noteNumberFirst = midiValor;
		PuzzlePirataTeclas.noteNumberFirst = midiValor;
		teclasTutorial.noteNumberFirst = midiValor;
	}
	else {
		midiValor = 60;
		midiTexto.GetComponent(TextMesh).text = "" + midiValor;
		Teclas.noteNumberFirst = midiValor;
		PuzzleMafiaTeclas.noteNumberFirst = midiValor;
		PuzzlePirataTeclas.noteNumberFirst = midiValor;
		teclasTutorial.noteNumberFirst = midiValor;
		PlayerPrefs.SetInt("midiValor", midiValor);
	}

}

function Update () {

}

function OnMouseUp() {
	switch (gameObject.name) {
		case "MidiMenos":
			midiValor--;
			break;
			
		case "MidiMais":
			midiValor++;
			break;
	}
	
	midiTexto.GetComponent(TextMesh).text = "" + midiValor;
	Teclas.noteNumberFirst = midiValor;
	PuzzleMafiaTeclas.noteNumberFirst = midiValor;
	PuzzlePirataTeclas.noteNumberFirst = midiValor;
	teclasTutorial.noteNumberFirst = midiValor;
	
	PlayerPrefs.SetInt("midiValor", midiValor);
}