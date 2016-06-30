#pragma strict
import UnityEngine.UI;

static var midiValor : int = 60;
var midiSlider : Slider;	
var midiSliderText : Text;

	function Awake () {
		if(PlayerPrefs.HasKey("midiValor")) {
			midiValor = PlayerPrefs.GetInt("midiValor");
			midiSlider.value = midiValor;
			Teclas.noteNumberFirst = midiValor;
			PuzzleMafiaTeclas.noteNumberFirst = midiValor;
			PuzzlePirataTeclas.noteNumberFirst = midiValor;
			teclasTutorial.noteNumberFirst = midiValor;
		}
		else {
			midiValor = 60;
			midiSlider.value = midiValor;
			Teclas.noteNumberFirst = midiValor;
			PuzzleMafiaTeclas.noteNumberFirst = midiValor;
			PuzzlePirataTeclas.noteNumberFirst = midiValor;
			teclasTutorial.noteNumberFirst = midiValor;
			PlayerPrefs.SetInt("midiValor", midiValor);
		}

	}

	function Update () {

	}
	
	function MidiSlider() {
		midiValor = midiSlider.value;
		midiSliderText.text = midiSlider.value.ToString();
		
		Teclas.noteNumberFirst = midiValor;
		PuzzleMafiaTeclas.noteNumberFirst = midiValor;
		PuzzlePirataTeclas.noteNumberFirst = midiValor;
		teclasTutorial.noteNumberFirst = midiValor;
		
		PlayerPrefs.SetInt("midiValor", midiValor);
	}