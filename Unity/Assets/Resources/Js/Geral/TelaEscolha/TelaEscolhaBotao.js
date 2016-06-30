#pragma strict
import UnityEngine.UI;

var cena : String;

function ChamaMusica (index : int) {
	Pontuacao.numMusica = index;
	Pontuacao.treino = true;
	Application.LoadLevel(cena);
}

function ChamaPuzzle (index : int) {
	Pontuacao.puzzle = index;
	Pontuacao.treino = true;
	Application.LoadLevel(cena);
}

function ChamaMenu() {
	Application.LoadLevel(cena);
}