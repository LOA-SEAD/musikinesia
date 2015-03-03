#pragma strict

static var passaTexto : boolean;
static var i : int = 0;
static var chamaFuncao : boolean;
static var liberaTexto : boolean;

var currentPosition : int = 0;
var delay : float = 0.1;
var Text : String = "";
//var additionalLines : String[];
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
	otherTexts[75] = "PIRATA NARIZ-RUIVO: Hooooohohohoho";
	otherTexts[76] = "MORGAN: Ele tá subindo pelo mastro! Atrás dele!";
	//otherTexts[77] = espaço vazio
	otherTexts[78] = "TOM: Não consigo levitá-los até ele. O navio está chacoalhando muito.";
	otherTexts[79] = "MAELZEL: Tom, então use a musikinésis e vire o barco de cabeça pra baixo \npara que ele derrube o metrônomo.";
	otherTexts[80] = "MORGAN: Se segurem!";
	otherTexts[81] = "MORGAN: Yar!!! Aquele macaco caiu no mar!";
	otherTexts[82] = "MAELZEL: Nós vamos bater!!! Faça alguma coisa Tom!";
	otherTexts[83] = "TOM: Eu não consigo! O navio está fora do meu controle!";
	otherTexts[84] = "MORGAN: Segurem firme!";
	otherTexts[85] = "TODOS: Ahhhhhhhhhhhhhhhhhhhhh!";
	//otherTexts[86] = espaço vazio
	otherTexts[87] = "TOM: Ai... minha cabeça…";
	otherTexts[88] = "TOM: ...";
	otherTexts[89] = "TOM: Aqui é o céu?";
	otherTexts[90] = "TOM: Nossa, quem é você? Deus?";
	otherTexts[91] = "TOM: Que lugar é esse?";
	otherTexts[92] = "MAELZEL: Uma praia.";
	otherTexts[93] = "TOM: Ahhhh! Ora seu…";
	otherTexts[94] = "TOM: Não morremos?";
	otherTexts[95] = "SEREIA: Não, por sorte vocês caíram no mar antes do navio bater.";
	otherTexts[96] = "SEREIA: Eu e minhas companheiras os resgatamos. \nOs outros piratas estão bem.";
	otherTexts[97] = "TOM: Puxa, nem sei como podemos agradecer… essa foi por pouco.";
	otherTexts[98] = "SEREIA: Veja, acho que isso pertence à vocês.";
	otherTexts[99] = "MAELZEL: MEU METRÔNOMO!";
	otherTexts[100] = "SEREIA: Se cuidem rapazes, e venham nos visitar quando voltar.";
	otherTexts[101] = "TOM: Não se vá, fique mais um pouco.";
	otherTexts[102] = "MAELZEL: Vamos Tom, precisamos voltar pra casa.";
	otherTexts[103] = "TOM: Pensando bem acho que vou ficar por aqui…";
	otherTexts[104] = "MAELZEL: Ora essa garoto, não fique aí de namoricos. Não temos tempo \na perder.";
	otherTexts[105] = "TOM: Mas…";
	otherTexts[106] = "MAELZEL: Venha logo, pegue seu teclado e ajuste a musikinésis com o \nmeu metrônomo.";
	otherTexts[107] = "TOM: Tá…";
	otherTexts[108] = "TOM: Mas espera aí… não saio daqui antes de você me contar sobre como \nconheceu meu avô.";
	otherTexts[109] = "MAELZEL: Outra hora, garoto. Preciso voltar logo ao meu restaurante. \nProvavelmente aquele guloso do Macarroni já deve ter roubado toda \nminha clientela.";
	otherTexts[110] = "TOM: Tudo bem, não me importo de passar o resto de minha vida aqui. \nHey sereia… espere!";
	otherTexts[111] = "MAELZEL: Ahhhh tudo bem, garoto teimoso.";
	otherTexts[112] = "MAELZEL: Cansado de viver em Viena, me mudei para Paris com a esperança \nde que meus inventos musicais fossem mais reconhecidos.";
	otherTexts[113] = "MAELZEL: Como estava precisando comprar peças para produzir meu mais novo \ninvento, o metrônomo, fui até uma loja de materiais musicais de um tal \nde Isaac Diapasão. Foi aí que conheci seu avô.";
	otherTexts[114] = "MAELZEL: Tínhamos muitos interesses em comum sobre música e ciência, e \nem pouco tempo nos tornarmos grandes amigos.";
	otherTexts[115] = "MAELZEL: Ele havia me contado que estava trabalhando em um invento que \nrevolucionaria o mundo da música por meio da influência das \nfrequências sonoras no espaço-tempo.";
	otherTexts[116] = "MAELZEL: Foi aí que criou um teclado capaz de manipular objetos através \ndos sons emitidos pelo instrumento. Este mesmo que agora está com você.";
	otherTexts[117] = "TOM: Mas espera aí. Em que ano foi isso?";
	otherTexts[118] = "MAELZEL: 1816.";
	otherTexts[119] = "TOM: O QUE?";
	otherTexts[120] = "MAELZEL: Por que acha que não uso essas imitações baratas de metrônomos \ndigitais?.";
	otherTexts[121] = "TOM: Mas como pode? Como você ainda está vivo???";
	otherTexts[122] = "MAELZEL: Vamos, me deixe terminar, garoto…";
	otherTexts[123] = "MAELZEL: Quando Isaac foi testar o teclado, ele pediu minha ajuda para \nmedir o tempo com o metrônomo.";
	otherTexts[124] = "MAELZEL: Mas por alguma razão desconhecida, o experimento acidentalmente \nalterou os paradigmas de espaço-tempo, influenciando na variação \ntemporal e fazendo-nos viajar no tempo.";
	otherTexts[125] = "MAELZEL: Fui parar na sua cidade e no seu tempo. Tudo que eu tinha era \nminha roupa do corpo e meu metrônomo.";
	otherTexts[126] = "MAELZEL: Foi daí que tive a ideia de abrir o restaurante para sobreviver. \nComo meu metrônomo foi infectado pela magia do teclado, tenho o poder de \nacelerar o tempo. Fiz muito dinheiro com meu Presto Pasta e desbamquei \no velho Macarroni.";
	otherTexts[127] = "MAELZEL: Mas e meu avô? Então quer dizer que ele está vivo?";
	otherTexts[128] = "MAELZEL: Provavelmente seu avô encontra-se preso em alguma fenda temporal \nque foi aberta acidentalmente nessa viagem. \nSe ele está vivo, não posso garantir...";
	otherTexts[129] = "MAELZEL: Lamento, garoto.";
	otherTexts[130] = "TOM: Sim... entendo…";
	otherTexts[131] = "MAELZEL: Venha, agora precisamos voltar pra casa.";
	//otherTexts[132] = espaco vazio
	otherTexts[133] = "TOM: ...";
	otherTexts[134] = "TOM: Hmmmm? Voltei pra casa?";
	otherTexts[135] = "TOM: Ué, cadê meu teclado?";
	otherTexts[136] = "TOM: O que é isso no chão? Uma carta?";
	otherTexts[137] = "TOM: Vovô…";
	otherTexts[138] = "TOM: Ele está vivo…. tenho que salvá-lo!";
	otherTexts[139] = "TOM: Mas preciso do teclado. Onde ele está?";
	otherTexts[140] = "TOM: …";
	otherTexts[141] = "TOM: MAELZEL!";
	otherTexts[142] = "TOM: Ele deve ter o pegado enquanto estávamos viajando no tempo.";
	otherTexts[143] = "TOM: Arrrrgh! Ele me paga!";
	otherTexts[144] = "TOM: Ainda há muita música pela frente…";
	otherTexts[145] = "PAI: Ei filho, volte aqui!";
	otherTexts[146] = "PAI: Hmmmm… e agora? Será que ele vai arrumar toda essa bagunça?";
	
}

function Start () {

	yield WaitForSeconds(0.2);

	Text = otherTexts[i];
	
	if(i == 38)
		passaTexto = true;
	
	else
		passaTexto = false;
	
	chamaFuncao = false;
	liberaTexto = false;
	
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
/*
	if(NarrativaPirata.proximo >= 1) {
		NarrativaPirata.proximo = i;
	}
	
	NarrativaPirata.chamaSprite = true;
	
	if(i == 20)
		NarrativaPirata.atiraCanhao = true;
	
	if(i == 22 || i == 25 || i == 27 || i == 28 || i == 39)
		NarrativaPirata.chamaPosicao = true;		
*/
	if(i == 37)
		Application.LoadLevel("PuzzlePirata");
	
	else {
		guiText.text = "";
		currentPosition = 0;
		Text = otherTexts[i];
		delay = 0.01;
		
		FirstStep();
	}
	/*
	yield WaitForSeconds (0.2);
	
	if(i != 20 && i != 25)
		liberaTexto = true;*/
		
}

function FirstStep() {

	//for ( var S : String in additionalLines )
        	//Text += "\n" + S;
	while (true) {
		if (currentPosition < Text.Length)
	    	guiText.text += Text[currentPosition++];
		yield WaitForSeconds (delay);
	}
}

@script RequireComponent(GUIText)