#pragma strict
//script inserido nos textos do jogo
//simula alguem digitando

var currentPosition : int = 0;
var Delay : float = 0.1;  // 10 characters per sec.
var Text : String = "";
var additionalLines : String[];
var otherTexts : String[];

static var i : int = 0;
static var pausaAcao : boolean;
static var liberaAcao : boolean;
static var passaTexto : boolean;

function Awake() {
	
	otherTexts[0] = "MAELZEL: Vamos causar um “meio acidente” neste navio pra assustar \nesse pirata de perna de pau.";
	otherTexts[1] = "MAELZEL: Provavelmente você não sabe como causar acidentes com a \nmusikinésis, não? É simples, olhe para o teclado.";
	otherTexts[2] = "MAELZEL: Você sabe que as notas são divididas em tons (diferenças de \naltura sonora entre duas teclas brancas) ou em semitons (intervalo de \nmeio tom entre uma tecla branca e uma preta), certo?";
	otherTexts[3] = "MAELZEL: Mas atenção! Como entre os pares mi/fá e si/dó não existe \numa tecla preta, a altura sonora entre elas é naturalmente um \nsemitom.";
	otherTexts[4] = "MAELZEL: Acidentes em música nada mais são do que símbolos que \nmodificam a altura da nota, tornando-as meio tom mais graves \nou meio tom mais agudas.";
	otherTexts[5] = "MAELZEL: Esses símbolos são representados pelo sustenido (#), que \neleva meio tom da nota e bemol (♭) que diminui meio tom.";
	otherTexts[6] = "MAELZEL: Também existe o bequadro () o qual indica que deve ser \ntocada naturalmente, ou seja, sem acidentes.";
	otherTexts[7] = "MAELZEL: Por exemplo, olhe para o teclado. Toque a nota Ré4.";
	otherTexts[8] = "MAELZEL: Muito bem, garoto! Você tocou Ré4 natural, ou seja, \nsem acidente.";
	otherTexts[9] = "MAELZEL: Para tocar Ré4#, pressione a tecla preta que está ao seu \nlado direito.";
	otherTexts[10] = "MAELZEL: Correto! A nota Ré foi elevada meio tom acima, \ntornando-se Ré#.";
	otherTexts[11] = "MAELZEL: Agora toque Ré4b.";
	otherTexts[12] = "MAELZEL: Isso, você tocou Ré♭.";
	otherTexts[13] = "MAELZEL: Agora vamos dar um susto nesse pirata sujo.";
	otherTexts[14] = "MAELZEL: Tente acertar os alvos que aparecerem.";
	otherTexts[15] = "MAELZEL: Atire usando Ré3 e controle a direção da bola \nmovendo-a para cima (Ré3#) ou baixo (Ré3b).";
	otherTexts[16] = "MAELZEL: Preparar, tocar… FOGO!";
	otherTexts[17] = "MAELZEL: Ré3: disparar | Ré# mover pra cima | Réb mover para baixo. \nTente fazer acima de 30 pontos";
	otherTexts[18] = "MAELZEL: Hum... vamos tentar de novo.";
	//otherTexts[19] = espaço vazio
	otherTexts[20] = "MAELZEL: Na mosca!";
	otherTexts[21] = "MAELZEL: Vamos utilizar outra tecla, agora com mais velocidade.";
	otherTexts[22] = "MAELZEL: La3 disparar | La# mover pra cima | Lab mover para baixo. \nTente fazer acima de 30 pontos";
	otherTexts[23] = "MAELZEL: Quase lá! Vamos mais uma vez.";
	//otherTexts[24] = espaço vazio
	otherTexts[25] = "MAELZEL: Muito bem, rapaz. Um autêntico Diapasão fazendo seu \ntrabalho digno.";
	otherTexts[26] = "MAELZEL: Agora deixe esse pirata com vontade de caminhar em \nsua própria prancha.";
	otherTexts[27] = "MAELZEL: Sol4 disparar | Sol# mover pra cima | Solb mover para baixo. \nTente fazer acima de 30 pontos";
	otherTexts[28] = "MAELZEL: Você precisa treinar melhor esses acidentes.";
	//otherTexts[29] = espaço vazio
	otherTexts[30] = "MAELZEL: Bom trabalho, filho. Você é mais competente do que pensei.";
	//otherTexts[31] = espaço vazio
		
}
 
function Start(){
	
	Text = otherTexts[i];	
    FirstStep();
    liberaAcao = true;
    passaTexto = false;

}

function Update () {

		if (passaTexto && !pausaAcao && liberaAcao){
			if(i == 18 || i == 23 || i == 28)
				i--;
			else //if(i < 30) //tirar if dps que a cena seguinte estiver pronta
				i++;
				
			TrocaTexto();
			passaTexto = false;
		}

}

function TrocaTexto() {
		guiText.text = "";
		currentPosition = 0;
		//delay = 0.1;

		Text = otherTexts[i];
		
		if(i == 7 || i == 9 || i == 11 || i == 17 || i == 22 || i == 27)
			{
			pausaAcao = true;
			liberaAcao = false;
			}
		
		if(i == 17 || i == 22 || i == 27)
			{
			PuzzlePirata.etapa = 1;
			PuzzlePirata.chances = 0;
			PuzzlePirata.pontos = 0;
			PuzzlePirataBala.novaBola = true;
			}
		
		if(i == 31){
			NarrativaPirataTexto.i = 38;
			Application.LoadLevel("NarrativaPirata");
		}

		FirstStep();
}

function FirstStep() {

	for ( var S : String in additionalLines )
        	Text += "\n" + S;
    	while (true){
        	if (currentPosition < Text.Length)
            	guiText.text += Text[currentPosition++];
        	yield WaitForSeconds (Delay);
    				}

}

@script RequireComponent(GUIText)