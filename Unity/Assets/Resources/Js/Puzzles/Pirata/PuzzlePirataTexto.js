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

var imagemApoioSp : Sprite[];
var imagemApoio : GameObject;
private var imagemApoioGetSp : SpriteRenderer;

var sustenidoApoio : GameObject;
var bemolApoio : GameObject;

var animParabens : GameObject;

function Awake() {

	otherTexts = new String[31];
	
	otherTexts[0] = "MAELZEL: Vamos causar um “meio acidente” neste navio pra assustar \nesse pirata de perna de pau.";
	otherTexts[1] = "MAELZEL: Provavelmente você não sabe como causar acidentes com a \nmusikinésis, não? É simples, olhe para o teclado.";
	otherTexts[2] = "MAELZEL: Você sabe que as notas são divididas em tons (diferenças de \naltura sonora entre duas teclas brancas) ou em semitons (intervalo de \nmeio tom entre uma tecla branca e uma preta), certo?";
	otherTexts[3] = "MAELZEL: Acidentes em música nada mais são do que símbolos que \nmodificam a altura da nota, tornando-as meio tom mais graves \nou meio tom mais agudas.";
	otherTexts[4] = "MAELZEL: Esses símbolos são representados pelo sustenido, que \neleva meio tom da nota, e bemol, que diminui meio tom.";
	otherTexts[5] = "MAELZEL: Também existe o bequadro o qual indica que deve ser \ntocada naturalmente, ou seja, sem acidentes.";
	otherTexts[6] = "MAELZEL: Por exemplo, olhe para o teclado. Toque a nota Ré4.";
	otherTexts[7] = "MAELZEL: Muito bem, garoto! Você tocou Ré4 natural, ou seja, \nsem acidente.";
	otherTexts[8] = "MAELZEL: Para tocar Ré4#, pressione a tecla preta que está ao seu \nlado direito.";
	otherTexts[9] = "MAELZEL: Correto! A nota Ré foi elevada meio tom acima, \ntornando-se Ré4#.";
	otherTexts[10] = "MAELZEL: Agora toque Ré4b.";
	otherTexts[11] = "MAELZEL: Isso, você tocou Ré4b.";
	otherTexts[12] = "MAELZEL: Agora vamos dar um susto nesse pirata sujo.";
	otherTexts[13] = "MAELZEL: Tente acertar os alvos que aparecerem.";
	otherTexts[14] = "MAELZEL: Primeiro atire com o canhão usando Ré3 e em seguida controle a \ndireção da bola movendo-a para cima (Ré3#) ou para baixo (Ré3b)";
	otherTexts[15] = "MAELZEL: Preparar, tocar… FOGO!";
	otherTexts[16] = "MAELZEL: Ré3: disparar | Ré3# mover pra cima | Ré3b mover para baixo. \nTente fazer 30 pontos ou mais.";
	otherTexts[17] = "MAELZEL: Hum... vamos tentar de novo.";
	//otherTexts[18] = espaço vazio
	otherTexts[19] = "MAELZEL: Na mosca! Vamos utilizar outra tecla, agora com mais \nvelocidade.";
	otherTexts[20] = "MAELZEL: Mas atenção! Lembre-se que entre os pares mi/fá e si/dó \nnão existe uma tecla preta, a altura sonora entre elas é naturalmente \num semitom.";
	otherTexts[21] = "MAELZEL: Si3 disparar | Si3# mover pra cima | Si3b mover para baixo. \nTente fazer 30 pontos ou mais.";
	otherTexts[22] = "MAELZEL: Quase lá! Vamos mais uma vez.";
	//otherTexts[23] = espaço vazio
	otherTexts[24] = "MAELZEL: Muito bem, rapaz. Um autêntico Diapasão fazendo seu \ntrabalho digno.";
	otherTexts[25] = "MAELZEL: Agora deixe esse pirata com vontade de caminhar em \nsua própria prancha.";
	otherTexts[26] = "MAELZEL: Fá4 disparar | Fá4# mover pra cima | Fá4b mover para baixo. \nTente fazer 30 pontos ou mais.";
	otherTexts[27] = "MAELZEL: Você precisa treinar melhor esses acidentes.";
	//otherTexts[28] = espaço vazio
	otherTexts[29] = "MAELZEL: Bom trabalho, filho. Você é mais competente do que pensei.";
	//otherTexts[30] = espaço vazio
		
}
 
function Start(){

	imagemApoioGetSp = imagemApoio.GetComponent(SpriteRenderer);
	imagemApoio.SetActive(false);
	sustenidoApoio.SetActive(false);
	bemolApoio.SetActive(false);
	
	Text = otherTexts[i];	
    FirstStep();
    liberaAcao = true;
    passaTexto = false;

}

function Update () {

		if (passaTexto && !pausaAcao && liberaAcao){
			if(i == 17 || i == 22 || i == 27)
				i--;
				
			else
				i++;
				
			TrocaTexto();
			passaTexto = false;
		}

}

function TrocaTexto() {
		GetComponent.<GUIText>().text = "";
		currentPosition = 0;
		//delay = 0.1;

		Text = otherTexts[i];
		
		switch (i) {
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			 break;
		 
		default:
			imagemApoio.SetActive(false);
			sustenidoApoio.SetActive(false);
			bemolApoio.SetActive(false);
			break;
		}
		
		
		switch(i) {
		case 2:
			imagemApoioGetSp.sprite = imagemApoioSp[0];
			imagemApoio.SetActive(true);
			imagemApoio.transform.localScale = Vector3(1.5, 1.5, 1.5);
			imagemApoio.transform.position.y = 2;
			break;
		
		case 4:
			imagemApoioGetSp.sprite = imagemApoioSp[1];
			imagemApoio.SetActive(true);
			imagemApoio.transform.localScale = Vector3(3, 3, 3);
			imagemApoio.transform.position.y = 2.4;
			break;
		
		case 5:
			imagemApoioGetSp.sprite = imagemApoioSp[2];
			imagemApoio.SetActive(true);
			imagemApoio.transform.localScale = Vector3(3, 3, 3);
			imagemApoio.transform.position.y = 2.76;
			break;
		
		case 6:
			imagemApoioGetSp.sprite = imagemApoioSp[3];
			imagemApoio.SetActive(true);
			imagemApoio.transform.localScale = Vector3(1.5, 1.5, 1.5);
			imagemApoio.transform.position.y = 2;
			pausaAcao = true;
			liberaAcao = false;
			break;
			
		case 8:
			sustenidoApoio.SetActive(true);
			imagemApoio.SetActive(true);
			pausaAcao = true;
			liberaAcao = false;
			break;
			
		case 10:
			sustenidoApoio.SetActive(false);
			bemolApoio.SetActive(true);
			imagemApoio.SetActive(true);
			pausaAcao = true;
			liberaAcao = false;
			break;
		
		case 20:
			imagemApoioGetSp.sprite = imagemApoioSp[4];
			imagemApoio.SetActive(true);
			imagemApoio.transform.localScale = Vector3(1.5, 1.5, 1.5);
			imagemApoio.transform.position.y = 2;
			break;
		
		case 13:
			PuzzlePirata.etapa = 1;
			PuzzlePirata.chances = 0;
			PuzzlePirata.pontos = 0;
			PuzzlePirataBala.novaBola = true;
			break;
		
		case 16:		
		case 21:
		case 26:
			pausaAcao = true;
			liberaAcao = false;
			PuzzlePirata.etapa = 1;
			PuzzlePirata.chances = 0;
			PuzzlePirata.pontos = 0;
			PuzzlePirataBala.novaBola = true;
			break;
			
		case 29:
		animParabens.SetActive(true);
			break;
		
		case 30:
			if(!Pontuacao.treino) {
				NarrativaPirataTexto.i = 38;
				Application.LoadLevel("NarrativaPirata");
			} else {
				Application.LoadLevel("Treino");
			}
			break;
		}
		
		if(i < 30) {
			FirstStep();
		}
}

function FirstStep() {

	for ( var S : String in additionalLines )
        	Text += "\n" + S;
    	while (true){
        	if (currentPosition < Text.Length)
            	GetComponent.<GUIText>().text += Text[currentPosition++];
        	yield WaitForSeconds (Delay);
    				}

}

@script RequireComponent(GUIText)