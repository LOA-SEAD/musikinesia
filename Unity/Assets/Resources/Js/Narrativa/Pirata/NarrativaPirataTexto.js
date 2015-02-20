#pragma strict

static var passaTexto : boolean;
static var i : int = 0;
static var chamaFuncao : boolean;
static var liberaTexto : boolean;

var currentPosition : int = 0;
var delay : float = 0.1;  // 10 characters per sec.
var Text : String = "";
var additionalLines : String[];
var otherTexts : String[];

function Awake () {

	otherTexts[0] = "TOM: Onde diabos estamos? Pra onde foi o Seu Macarrão? \nQue lugar é esse?";
	otherTexts[1] = "MAELZEL: Uma praia.";
	otherTexts[2] = "TOM: Ora essa, eu sei que é uma praia. Mas como viemos \nparar aqui?";
	otherTexts[3] = "MAELZEL: Provavelmente quando você usou seu teclado para impedir \n meu metrônomo, provocando um deslocamento de tempo e espaço.";
	otherTexts[4] = "TOM: Então quer dizer que viajamos no tempo?";
	otherTexts[5] = "MAELZEL: Sim.";
	otherTexts[6] = "TOM: E quando a musikinésis é combinada com outro poder ela pode \ngerar algo mais do que levitação?";
	otherTexts[7] = "MAELZEL: Sim.";
	otherTexts[8] = "TOM: Ok, então me empresta seu metrônomo maluco pra nos levar \nde volta?";
	otherTexts[9] = "MAELZEL: Não.";
	otherTexts[10] = "TOM: Não?!";
	otherTexts[11] = "MAELZEL: Não.";
	otherTexts[12] = "TOM: Mas por que?";
	otherTexts[13] = "MAELZEL: Porque devo ter deixado cair enquanto estávamos viajando.";
	otherTexts[14] = "TOM: Então quer dizer que estamos presos aqui para sempre?";
	otherTexts[15] = "MAELZEL: Não se o encontrarmos.";
	otherTexts[16] = "TOM: Hunf…. vamos procurar, talvez tenha caído por perto. E não deve \nser difícil achar aquele trambolho.";
	otherTexts[17] = "TOM: Nunca pensou em usar um metrônomo digital? Já inventaram, se \nninguém te avisou.";
	otherTexts[18] = "MAELZEL: Não, esse metrônomo é especial. Seu avô quem me deu.";
	otherTexts[19] = "TOM: Meu avô??? Que história é essa?";
	otherTexts[20] = "???: Parem aí, vermes!";
	otherTexts[21] = "???: Arrrrrrgh!!!";
	otherTexts[22] = "TOM: Hmm? O que disse?";
	otherTexts[23] = "MAELZEL: Nada.";
	otherTexts[24] = "TOM: Então quem foi?";
	otherTexts[25] = "???: Como ousam invadir as águas de Morgan montados naquele diabo \nverde? Cêis precisam pagar pedágio!";
	otherTexts[26] = "TOM: Pedágio? Diabo? Do que está falando?";
	otherTexts[27] = "MAELZEL: Ele está falando de quando viajamos no tempo. Viemos \nlevitando numa redoma verde luminosa.";
	otherTexts[28] = "TOM: Foi mal, chefe. Não vimos a cancela.";
	otherTexts[29] = "???: Ah, tudo bem. Por que não sentam-se na popa e aproveitam a \nviagem?";
	otherTexts[30] = "TOM: O que?";
	otherTexts[31] = "MORGAN: Errrgh….. digo… yar, joguem essas bestas aos tubarões! \nYar! Yar!";
	otherTexts[32] = "MAELZEL: Eu não faria isso se fosse você.";
	otherTexts[33] = "MORGAN: Arrrrrrrrrrrrrrr…. como ousa desafiar Morgan, o Grande Pirata \ndos 7 Mares e Meio? Tu não tem reputação pra isso, rato de fossa.";
	otherTexts[34] = "MAELZEL: Esse garoto tem poderes especiais e não queremos lhe causar \nnenhum acidente.";
	otherTexts[35] = "MORGAN: O que insinua, almofadinha? Cê me cheira a sereia velha.";
	otherTexts[36] = "MAELZEL: Tom, vê aqueles canhões? Mostre pra esse marujo de água doce \ndo que é capaz.";
	//otherTexts[37] = espaço vazio
	otherTexts[39] = "MORGAN: Arrrrrrrrgh!!!!";
	otherTexts[40] = "MORGAN: ARRRRRRRR!!!!";
	otherTexts[41] = "MAELZEL: O que foi? Não existem palavras em seu vocabulário rebuscado \npara expressar sua indignação?";
	otherTexts[42] = "MORGAN: …";
	otherTexts[43] = "MORGAN: Seus feiticeiros imundos! Tentando impressionar Morgan com esse \nmonte de truque barato.";
	otherTexts[44] = "MORGAN: Se são mágicos mesmo, capturem um barata podre que não tá pagando \nmeus pedágios. Depois liberto ocêis.";
	otherTexts[45] = "TOM: Caramba, até aqui tem.";
	otherTexts[46] = "MORGAN: O navio daquele miserável é tão rápido que ninguém consegue parar, \naye.";
	otherTexts[47] = "MORGAN: E o danado consegue invadir nossas águas, pescar todo peixe fresco \ne sair sem nenhum arranhão. Ladrão grotesco!";
	otherTexts[48] = "TOM: Ok pirata cabelo-azul, fale logo o que quer da gente.";
	otherTexts[49] = "MORGAN: Que usem esse treco mágico docêis para alcançar o barco dele.";
	otherTexts[50] = "TOM: Olha! É o ladrão que está procurando?";
	otherTexts[51] = "MORGAN: É ele! Verme! Macaco adestrado! Rato imundo! Volta aqui com minha \nparte do pedágio!";
	otherTexts[52] = "MAELZEL: Será que o meu metrônomo caiu nas mãos desse sujeito?";
	otherTexts[53] = "TOM: O quê??? Então é por isso que ele está atingindo essa velocidade? Ele \ndeve estar acelerando o tempo.";
	otherTexts[54] = "TOM: Com tanto lugar pro metrônomo cair e ele foi parar justo no barco de um \npirata caloteiro? Não acredito.";
	otherTexts[55] = "MAELZEL: Ao menos agora sabemos onde ele está.";
	otherTexts[56] = "MORGAN: Calem-se! Chega de conversar feito duas sereias e icem as velas com \na magia docêis.";
	otherTexts[57] = "MORGAN: Lá vem ele de novo! Façam o casco dele tremer! Yaaaaaaaaaaaaar!!!!";
	//otherTexts[58] = espaço vazio
	otherTexts[59] = "MORGAN: Arrrrrgh pegamos esse lagarto liso!";
	otherTexts[60] = "MORGAN: Tripulação, mover navio a bombordo.";
	otherTexts[61] = "MORGAN: ATACAR!!!";
	otherTexts[62] = "MORGAN: Então é tu que tá se metendo nas minhas águas e roubando todo nosso \npeixe? Abelhudo fominha!";
	otherTexts[63] = "PIRATA NARIZ-RUIVO: Hohoho, tú que me forçaste a tomar tal atitude quando \nresolveste aumentar o pedágio das águas dos 7 Mares e Meio, mentecapto.";
	otherTexts[64] = "MORGAN: Cale-se filhote de monstro marinho! Me pague logo sua parte do \npedágio que poupo teu destino de perna de pau.";
	otherTexts[65] = "PIRATA NARIZ-RUIVO: Pirata grotesco, consigo sentir teu bafo daqui.";
	otherTexts[66] = "TOM: É… com licença senhores…";
	otherTexts[67] = "TOM: Desculpem por interromper essa conversa tão cordial entre vocês, mas \napenas queria pedir nosso metrônomo de volta.";
	otherTexts[68] = "PIRATA NARIZ-RUIVO: Metrômimo? O quê? Falas de minha bússola de Poseidon? \nJAMAIS!";
	otherTexts[69] = "PIRATA NARIZ-RUIVO: Foste o deus supremo dos mares que me trouxeste essa \ndádiva. Agora meu barco és o mais veloz de todo oceano e tenho todo peixe que quero.";
	otherTexts[70] = "PIRATA NARIZ-RUIVO: Apenas não consigo entender porque essa bússola apenas \nindica leste-oeste…";
	otherTexts[71] = "MAELZEL: Porque não é uma bússola e não foi presente nenhum de Poseidon… \num relez luthier quem o fez!";
	otherTexts[72] = "MAELZEL: E sabe o quê mais? Ela pertence a mim! Devolva-o agora!";
	otherTexts[73] = "PIRATA NARIZ-RUIVO: Não entendi nada do que disseste.";
	otherTexts[74] = "PIRATA NARIZ-RUIVO: E não irei devolver pois agora a bússola é minha. \nPoseidon me escolheu para ser o novo Grande Pirata dos 7 Mares e Meio!";
	otherTexts[75] = "PIRATA NARIZ-RUIVO: Hooooohohohoho (nesse instante ele sai rapidamente \nde cena.";
	otherTexts[76] = "MORGAN: Ele tá subindo pelo mastro! Atrás dele!";
	//otherTexts[77] = espaço vazio
	otherTexts[78] = "TOM: Não consigo levitá-los até ele. O navio está chacoalhando muito.";
	otherTexts[79] = "MAELZEL: Tom, então use a musikinésis e vire o barco de cabeça pra baixo \npara que ele derrube o metrônomo.";
	otherTexts[80] = "MORGAN: Se segurem!";
	otherTexts[81] = "";
	otherTexts[82] = "";
	otherTexts[83] = "";
	otherTexts[84] = "";
	otherTexts[85] = "";
	otherTexts[86] = "";
	otherTexts[87] = "";
	otherTexts[88] = "";
	otherTexts[89] = "";
	otherTexts[90] = "";
}

function Start () {

	Text = otherTexts[i];
	chamaFuncao = false;
	liberaTexto = false;	
    //FirstStep();

}

function Update () {

	if(passaTexto) {
		i++;
		TrocaTexto();
		passaTexto = false;
	}

	if(chamaFuncao) {
		TrocaTexto();
		chamaFuncao = false;
	}

}

function TrocaTexto() {

	if(NarrativaPirata.proximo >= 1) {
		NarrativaPirata.proximo = i;
	}
	
	NarrativaPirata.chamaSprite = true;
	
	if(i == 20)
		NarrativaPirata.atiraCanhao = true;
	
	if(i == 22 || i == 25 || i == 27 || i == 28)
		NarrativaPirata.chamaPosicao = true;		

	if(i == 37)
		Application.LoadLevel("PuzzlePirata");

	guiText.text = "";
	currentPosition = 0;
	Text = otherTexts[i];
	
	FirstStep();
	
	yield WaitForSeconds (0.2);
	
	if(i != 20 && i != 25)
		liberaTexto = true;
		
}

function FirstStep() {

	for ( var S : String in additionalLines )
        	Text += "\n" + S;
	while (true) {
		if (currentPosition < Text.Length)
	    	guiText.text += Text[currentPosition++];
		yield WaitForSeconds (delay);
	}
}

@script RequireComponent(GUIText)