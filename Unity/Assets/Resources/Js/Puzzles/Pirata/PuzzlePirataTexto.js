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
	
	if(gameObject.name == "PuzzlePirataTexto")
		{
		otherTexts[0] = "MAELZEL: Vamos causar um “meio acidente” neste navio pra assustar \nesse pirata de perna de pau.";
		otherTexts[1] = "MAELZEL: Provavelmente você não sabe como causar acidentes com a \nmusikinésis, não? É simples, olhe para o teclado.";
		otherTexts[2] = "MAELZEL: Você sabe que as notas são divididas em tons (diferenças de \naltura sonora entre duas teclas brancas) ou em semitons (intervalo de \nmeio tom entre uma tecla branca e uma preta), certo?";
		otherTexts[3] = "MAELZEL: Mas atenção! Como entre os pares mi/fá e si/dó não existe \numa tecla preta, a altura sonora entre elas é naturalmente um \nsemitom.";
		otherTexts[4] = "MAELZEL: Acidentes em música nada mais são do que símbolos que \nmodificam a altura da nota, tornando-as meio tom mais graves \nou meio tom mais agudas.";
		otherTexts[5] = "MAELZEL: Esses símbolos são representados pelo sustenido (#), que \neleva meio tom da nota e bemol (♭) que diminui meio tom.";
		otherTexts[6] = "MAELZEL: Também existe o bequadro () o qual indica que deve ser tocada naturalmente, ou seja, sem acidentes.";
		otherTexts[7] = "MAELZEL: Por exemplo, olhe para o teclado. Toque a nota Ré4.";
		otherTexts[8] = "MAELZEL: Muito bem, garoto! Você tocou Ré4 natural, ou seja, sem acidente.";
		otherTexts[9] = "MAELZEL: Para tocar Ré4#, pressione a tecla preta que está ao seu lado direito.";
		otherTexts[10] = "MAELZEL: Correto! A nota Ré foi elevada meio tom acima, tornando-se Ré#.";
		otherTexts[11] = "MAELZEL: Agora toque Ré4b.";
		otherTexts[12] = "MAELZEL: Isso, você tocou Ré♭.";
		otherTexts[13] = "MAELZEL: Agora vamos dar um susto nesse pirata sujo.";
		otherTexts[14] = "MAELZEL: Tente acertar os alvos que aparecerem.";
		otherTexts[15] = "MAELZEL: Atire usando Ré3 e controle a direção da bola movendo-a para cima (Ré3#) ou baixo (Ré3b).";
		otherTexts[16] = "MAELZEL: Preparar, tocar… FOGO!";
		otherTexts[17] = "MAELZEL: Ré3: disparar | Ré# mover pra cima | Réb mover para baixo.";
		otherTexts[18] = "MAELZEL: Hum... vamos tentar de novo.";
		//otherTexts[19] = espaço vazio
		otherTexts[20] = "MAELZEL: Na mosca!";
		otherTexts[21] = "MAELZEL: Vamos utilizar outra tecla, agora com mais velocidade.";
		otherTexts[22] = "MAELZEL: Si3 disparar | Si# mover pra cima | Sib mover para baixo";
		//otherTexts[23] = espaço vazio
		otherTexts[24] = "MAELZEL: Muito bem, rapaz. Um autêntico Diapasão fazendo seu trabalho digno.";
		otherTexts[25] = "MAELZEL: Agora deixe esse pirata com vontade de caminhar em sua própria prancha.";
		otherTexts[26] = "MAELZEL: Fá4 disparar | Fá# mover pra cima | Fáb mover para baixo";
		//otherTexts[27] = espaço vazio
		otherTexts[28] = "MAELZEL: Bom trabalho, filho. Você é mais competente do que pensei.";

		}
	
	if(gameObject.name == "NarrativaPirataTexto")
		{
		otherTexts[0] = "TOM: Onde diabos estamos? Pra onde foi o Seu Macarrão? Que lugar é esse?";
		otherTexts[1] = "MAELZEL: Uma praia.";
		otherTexts[2] = "TOM: Ora essa, eu sei que é uma praia. Mas como viemos parar aqui?";
		otherTexts[3] = "MAELZEL: Provavelmente quando você usou seu teclado para impedir \n meu metrônomo, provocando um deslocamento de tempo e espaço.";
		otherTexts[4] = "TOM: Então quer dizer que viajamos no tempo?";
		otherTexts[5] = "MAELZEL: Sim.";
		}
		
}
/*
function WriteText(aText : String) {
    guiText.text = "";
    currentPosition = 0;
    Text = aText;
}*/
 
function Start(){
	
	Text = otherTexts[i];	
    FirstStep();
    liberaAcao = true;
    passaTexto = false;

}

function Update () {

		if ((Input.GetKeyDown("space") || passaTexto) && !pausaAcao && liberaAcao){
			if(i == 18 || i == 22 || i == 26)
				i--;
			else
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
		
		if(i == 7 || i == 9 || i == 11 || i == 17 || i == 21 || i == 25)
			{
			pausaAcao = true;
			liberaAcao = false;
			}
		
		if(i == 17 || i == 21 || i == 25)
			{
			PuzzlePirata.etapa = 1;
			PuzzlePirata.chances = 0;
			PuzzlePirata.pontos = 0;
			MovBola.novaBola = true;
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