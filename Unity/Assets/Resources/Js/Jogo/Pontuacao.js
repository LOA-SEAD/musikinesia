#pragma strict
//script principal


static var pontuacao : int; //acessada em PontosMesh.js
var finalSkin : GUISkin;

//skin de cada botao dessa cena
var btMusicas : GUISkin; //imagem do botao de cada musica da tela de escolha
var btSeguir : GUISkin; //botao para avançar
var hSlider : GUISkin;

var textoMusica : GameObject[]; //nome de cada musica na tela de escolha

var musica : GameObject[]; //prefabs das musicas

var audios : AudioClip[]; //arquivos de audio de cada musica

static var numMusica : int; //define qual musica foi escolhida pelo jogador
static var numMusica2 : int; //copia de numMusica para transforma-la em static sem nenhum problema

static var escolhaOK : boolean; //define se o jogador ja escolheu a musica (True); acessada em botaoAvancar.js

var velMus3 : float; //velocidade do prefab das notas
var velMus2 : float; //velocidade do prefab das notas
var velMus1 : float; //velocidade do prefab das notas
var velMus5 : float; //velocidade do prefab das notas
var velMus4 : float; //velocidade do prefab das notas
var velMus6 : float; //velocidade do prefab das notas
var velMus6p2 : float; //velocidade do prefab das notas
var velMus7 : float; //velocidade do prefab das notas
var velMus8 : float; //velocidade do prefab das notas
var velMus9 : float; //velocidade do prefab das notas

static var relog : float; //relogio para liberar a tela final; acessada em PorcentagemAcerto.js

static var multiplicador : int; //acessada em ChecarTrigger.js e ChecarTriggerFull.js; serve para multiplicar os pontos do jogador
static var combo : int; //acessada em ChecarTrigger.js; serve para somar 1 a cada nota acertada consecutiva, aumentando o multiplicador em valores especificos
static var comboRestante : int; //acessada em comboMesh.js; indica quantos acertos faltam para um novo combo
static var pontuacaoFinal : int; //mostra a pontuaçao final, considerando todos os multiplicadores

var planoPreto : GameObject; //escurece o fundo em 70% para ressaltar alguma mensagem instanciada.

var position : Vector3; //define a posicao dos Instantiates
var regressiva : GameObject; //contagem regressiva antes da musica começar. A animacao eh feita dentro do proprio objeto

//vida
var tecladoVida : GameObject; //teclado que marca as vidas do jogador
var spriteTeclado : Sprite[]; //sprites de cada vida

//pause
static var isPause : boolean; //define se o jogo ta pausado (true) ou nao
var pauseMenu : GameObject; //objeto do menu de pause
static var inGameVolume : float; //define o valor do volume do jogo (variando de 0 a 1)

//animacao Inicial
static var animacaoIn : int; //define o estagio da animacao inicial (antes de começar a parte jogavel)
var objAni : GameObject[]; //objetos da animacao inicial
//objAni[0] = botao Notas
//objAni[1] = pentagrama
//objAni[2] = fundoPuzzleQuadro
//objAni[3] = teclado
//objAni[4] = fundoSotao
//objAni[5] = fundoAnimacao

var spritesC : Sprite[];
//spritesC[0] = sotao
//spritesC[1] = fundoPato
//spritesC[2] = garagem
//spritesC[3] = pentagrama inteiro
//spritesC[4] = pentagrama cortado
//spritesC[5] = show

//derrota
var telaDerrota : GameObject; //objeto da tela de derrota
var derrota : boolean; //indica o game over (true)

//ranking
var hs : int[];
var i : int;

//treino
static var treino : boolean; //define que o jogador estah em modo de treino (true)


//fim do jogo
var textoVitoria : GameObject[];
//as tres static var true ativam a animacao final
static var musicaOK2 : boolean; //NAO ZERAR EM NENHUM MOMENTO; define que a musica ja foi tocada. 
static var musicaOK3 : boolean; //NAO ZERAR EM NENHUM MOMENTO; define que a musica ja foi tocada.
static var musicaOK4 : boolean; //NAO ZERAR EM NENHUM MOMENTO; define que a musica ja foi tocada.
static var musicaOK5 : boolean; //NAO ZERAR EM NENHUM MOMENTO; define que a musica ja foi tocada.
static var musicaOK6 : boolean; //NAO ZERAR EM NENHUM MOMENTO; define que a musica ja foi tocada.
static var travaTeclas : boolean; //acessada em Teclas

//revelar algo escondido - PARA TESTES
var aparecerTeste : boolean;

//puzzles
static var puzzle : int; //acessada em ChecarTrigger.js, ChecarTriggerFull.js e em botaoAvancar.js ;
//puzzle = 1 = suburbio

//puzzle Suburbio
var puzzleSuburbio : GameObject[]; //objetos do puzzle suburbio

//animacoes das fases
var aniFase : GameObject[];
//aniFase[0] = arvore
//anifase[1] = pato
//anifase[2] = senhora
//anifase[3] = tom teclado
//anifase[4] = baterista
//anifase[5] = guitarrista
//anifase[6] = baixista
//anifase[7] = plateia do show
//anifase[8] = tom teclado show
//anifase[9] = baterista show
//anifase[10] = guitarrista show
//anifase[11] = baixista show

var templatePontos : GameObject;
var templatePontosS : Sprite[];

//para teste
var relogTeste : float;


function Start () {

	//ranking
	for(i = 1; i < 16;i++)
		if(!PlayerPrefs.HasKey("HScore" + i.ToString()))
			PlayerPrefs.SetInt("HScore" + i.ToString(), 0);

	relog = 0;
	pontuacao = 0;
	escolhaOK = false; 
	multiplicador = 1;
	planoPreto.renderer.enabled = false;
	planoPreto.renderer.material.color.a = 0.7;
	
	//pause
	isPause = false;
	Time.timeScale = 1;
	AudioListener.pause = false;
	if(puzzle == 0)
		{
		inGameVolume = 0.5;
		AudioListener.volume = 0.5;
		}
	
	//derrota
	derrota = false;
	
	//animacao Inicial
	objAni[1].renderer.material.color.a = 0;
	objAni[3].transform.position.y = -34;
	objAni[4].transform.localScale = Vector2(12, 12);
	objAni[2].renderer.enabled = false;
	objAni[5].renderer.enabled = false;
	animacaoIn = 0;
	
	//teclas do teclado travadas
	travaTeclas = true;

	//puzzle
	puzzleSuburbio[0].renderer.enabled = false; //marcacao do quadro
	puzzleSuburbio[1].renderer.enabled = false; //quadro
	ChecaPuzzle.quadroOK = false;
	
	//chama musica
	if(!treino)
		{
		if(numMusica == 0)		
			numMusica = 4; //primeira musica = 4
			//puzzle = 1;
		}
	else if(numMusica == 0) //para nao chamar os nomes quando o jogador pressionar recomeçar no treino
		NomesMusicas(); //coloca o nome das musicas na tela de escolha - TREINO

		
	//animacoes das fases
	aniFase[0].GetComponent(SpriteRenderer).enabled = false;
	aniFase[1].GetComponent(SpriteRenderer).enabled = false;
	aniFase[1].GetComponent(Animator).enabled = false;
	aniFase[2].GetComponent(SpriteRenderer).enabled = false;
	aniFase[2].GetComponent(Animator).enabled = false;
	aniFase[3].GetComponent(SpriteRenderer).enabled = false;
	aniFase[3].GetComponent(Animator).enabled = false;
	aniFase[4].GetComponent(SpriteRenderer).enabled = false;
	aniFase[4].GetComponent(Animator).enabled = false;
	aniFase[5].GetComponent(SpriteRenderer).enabled = false;
	aniFase[5].GetComponent(Animator).enabled = false;
	aniFase[6].GetComponent(SpriteRenderer).enabled = false;
	aniFase[6].GetComponent(Animator).enabled = false;
	aniFase[7].GetComponent(SpriteRenderer).enabled = false;
	aniFase[7].GetComponent(Animator).enabled = false;
	aniFase[8].GetComponent(SpriteRenderer).enabled = false;
	aniFase[8].GetComponent(Animator).enabled = false;
	aniFase[9].GetComponent(SpriteRenderer).enabled = false;
	aniFase[9].GetComponent(Animator).enabled = false;
	aniFase[10].GetComponent(SpriteRenderer).enabled = false;
	aniFase[10].GetComponent(Animator).enabled = false;
	aniFase[11].GetComponent(SpriteRenderer).enabled = false;
	aniFase[11].GetComponent(Animator).enabled = false;
	aniFase[12].GetComponent(SpriteRenderer).enabled = false;
	aniFase[13].GetComponent(SpriteRenderer).enabled = false;
	aniFase[14].GetComponent(SpriteRenderer).enabled = false;
	aniFase[14].GetComponent(Animator).enabled = false;
	aniFase[15].GetComponent(SpriteRenderer).enabled = false;
	aniFase[15].GetComponent(Animator).enabled = false;
	aniFase[16].GetComponent(SpriteRenderer).enabled = false;
	aniFase[16].GetComponent(Animator).enabled = false;
	aniFase[17].GetComponent(SpriteRenderer).enabled = false;
	aniFase[17].GetComponent(Animator).enabled = false;
	aniFase[18].GetComponent(SpriteRenderer).enabled = false;
	aniFase[18].GetComponent(Animator).enabled = false;
	aniFase[19].GetComponent(Animator).enabled = false;
	
	//template de pontos
	if(puzzle == 0)
		templatePontos.GetComponent(SpriteRenderer).sprite = templatePontosS[0];
	
	else
		templatePontos.GetComponent(SpriteRenderer).sprite = templatePontosS[1];
	
}

function Update () {

	//revelar algo escondido - PARA TESTES
	/*if(Input.GetKeyDown("p"))
		{
		print(escolhaOK);
		print(relog);
		print(puzzle);
		}
		//aparecerTeste = !aparecerTeste;*/
	
	//Pular pra narrativa = teste
	if(Input.GetKey("q"))
		relogTeste += Time.deltaTime;
	
	if(Input.GetKeyUp("q"))
		relogTeste = 0;
	
	if(relogTeste > 3)
		Application.LoadLevel("NarrativaMafia");


	//animacao Inicial
	
	//zoom out da imagem do porao
	if(animacaoIn == 0)
		if(objAni[4].transform.localScale.x >= 11)
			objAni[4].transform.localScale /= 1.007;
			else
				animacaoIn = 1;
			
	if(animacaoIn == 2)
		{
		planoPreto.renderer.enabled = true; //plano preto 70% fica visivel
		
		if(puzzle == 0) //soh funciona nas musicas
			{		
			//entrada em quadro dos elementos do jogo:		
			if(objAni[1].renderer.material.color.a != 1)
				objAni[1].renderer.material.color.a += 0.02; //pentagrama aparece
			
			if(objAni[4].renderer.material.color.a >= 0.61)
				objAni[4].renderer.material.color.a -= 0.02; //imagem de fundo (sotao) fica mais transparente
			
			objAni[0].GetComponent(SpriteRenderer).enabled = true; //botao notas
			objAni[0].GetComponent(BoxCollider).enabled = true; //botao notas
			}
			else
				{
				objAni[4].renderer.enabled = false;
				objAni[0].GetComponent(SpriteRenderer).enabled = false; //botao notas
				objAni[0].GetComponent(BoxCollider).enabled = false; //botao notas
				
				if(!objAni[2].renderer.enabled)
					objAni[2].renderer.enabled = true;
					
				if(objAni[2].renderer.material.color.a >= 0.61)
					objAni[2].renderer.material.color.a -= 0.02; //imagem de fundo (sotao) fica mais transparente
				}
			
		
		if(objAni[3].transform.position.y <= -18.8)
			objAni[3].transform.position.y += 20*Time.deltaTime; //teclado sobe
		
		
		}


	if(escolhaOK) //relog começa a contar depois que a escolha da musica foi feita
		relog += Time.deltaTime; //tempo pra liberar a tela de final

		
	numMusica2 = numMusica; //as duas sao iguais, porem a numMusica2 eh static
	
	
	if(numMusica == 2)
		VelPrefab.speed = velMus3; //define a velocidade do prefab das notas
	
	if(numMusica == 3)
		VelPrefab.speed = velMus2; //define a velocidade do prefab das notas
	
	if(numMusica == 4)
		VelPrefab.speed = velMus1; //define a velocidade do prefab das notas
	
	if(numMusica == 5)
		VelPrefab.speed = velMus5; //define a velocidade do prefab das notas
	
	if(numMusica == 6)
		VelPrefab.speed = velMus4; //define a velocidade do prefab das notas
	
	if(numMusica == 7)
		{
		if(relog < 43)
			VelPrefab.speed = velMus6; //define a velocidade do prefab das notas
		
		else
			VelPrefab.speed = velMus6p2; //define a velocidade do prefab das notas
		}
		
	
	if(numMusica == 8)
		VelPrefab.speed = velMus7; //define a velocidade do prefab das notas
	
	if(numMusica == 9)
		VelPrefab.speed = velMus8; //define a velocidade do prefab das notas
	
	if(numMusica == 10)
		VelPrefab.speed = velMus9; //define a velocidade do prefab das notas
		
	
	//pontuacao
	pontuacao = ChecarTrigger.pontos; 
	combo = ChecarTrigger.combo;
	
	//definicoes de cada multiplicador pelo valor do combo				
	if(combo == 5)
		multiplicador = 2;
	
	if(combo == 12)
		multiplicador = 4;
	
	if(combo == 22)
		multiplicador = 8;
	
	if(combo == 37)
		multiplicador = 16;


	//definicao do valor de cada combo restante (mostrado na caixa de combo)
	if(combo < 5)
		comboRestante = 5;
		
	if(combo >= 5 && combo < 12)
		comboRestante = 12;
	
	if(combo >= 12 && combo < 22)
		comboRestante = 22;
	
	if(combo >= 22 && combo < 37)
		comboRestante = 37;


	//perder por erros
	if(ChecarTrigger.vida == 18)
		Derrota();
	
	
	//troca de sprites de "vida"
	if(!treino && puzzle == 0)	
		{
		if(ChecarTrigger.vida == 42)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[7];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0, 1, 0);
			}
		
		if(ChecarTrigger.vida == 39)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[6];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.2, 0.8, 0);
			}
			
		if(ChecarTrigger.vida == 36)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[5];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.4, 0.8, 0);
			}
		
		if(ChecarTrigger.vida == 33)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[4];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.6, 0.6, 0);
			}
		
		if(ChecarTrigger.vida == 30)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[3];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.8, 0.4, 0);
			}
		
		if(ChecarTrigger.vida == 27)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[2];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.8, 0.2, 0);
			}
	
		if(ChecarTrigger.vida == 24)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[1];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.8, 0, 0);
			}
	
		if(ChecarTrigger.vida == 21)
			{
			tecladoVida.GetComponent(SpriteRenderer).sprite = spriteTeclado[0];
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0.4, 0, 0);
			}
		}
		
		//else
			//tecladoVida.GetComponent(SpriteRenderer).color = Color(0, 0, 0);
		
	
	//pause
	if(!derrota) //nao funciona na tela de derrota
		{
		if(Input.GetKeyDown(KeyCode.Escape) || botoesPause.menuVoltar) //aperta ESC
			{
			isPause = !isPause; //troca entre pausado e despausado
			AudioListener.pause = !AudioListener.pause; //pausa e despausa o audio
			botoesPause.menuVoltar = false;  //desativa a variavel
			if(isPause)
				{
				Time.timeScale = 0; //congela toda a movimentacao
				pauseMenu.transform.position.y = -5; //desce o menu de pause para o centro da tela
				} else	{
						Time.timeScale = 1; //tempo volta ao normal
						pauseMenu.transform.position.y = 40; //menu de pause volta a se esconder acima do quadro
						botoesPause.menuVoltar = false; //desativa a booleana que tira o pause
						}
			}
		}
	
	//musicas sem escolha de dificuldade
	//Suki - TERCEIRA
	if(numMusica == 2)
		if(!escolhaOK)
			TerceiraMusica(); //chama a funcao que roda a musica do Suki 
			
	//Roger - SEGUNDA
	if(numMusica == 3)
		if(!escolhaOK)
			SegundaMusica(); //chama a funcao que roda a musica do Roger 
	
	//Roger2 - PRIMEIRA
	if(numMusica == 4)
		if(!escolhaOK)
			PrimeiraMusica(); //chama a funcao que roda a musica do Roger 
	
	//SukiRock - QUINTA
	if(numMusica == 5)
		if(!escolhaOK)
			QuintaMusica(); //chama a funcao que roda a musica SukiRock 
	
	//RogerRock - QUARTA
	if(numMusica == 6)
		if(!escolhaOK)
			QuartaMusica(); //chama a funcao que roda a musica RogerRock
	
	//Primeira Musica Mafia - SEXTA
	if(numMusica == 7)
		if(!escolhaOK)
			SextaMusica(); //chama a funcao que roda a primeira musica da mafia
	
	//Segunda Musica Mafia - SETIMA
	if(numMusica == 8)
		if(!escolhaOK)
			SetimaMusica(); //chama a funcao que roda a primeira musica da mafia
			
	//Primeira Musica Pirata - OITAVA
	//if(numMusica == 9)
		//if(!escolhaOK)
			//OitavaMusica(); //chama a funcao que roda a primeira musica dos piratas
	
	//Segunda Musica Pirata - NONA
	if(numMusica == 10)
		if(!escolhaOK)
			NonaMusica(); //chama a funcao que roda a segunda musica dos piratas
		
	//puzzle
	if(puzzle == 1)
		if(!escolhaOK)
			puzzleSub(); //chama a funcao que roda o puzzle do suburbio


	//animacao das fases
	if(numMusica == 3 && relog > 70)
		{
		aniFase[1].GetComponent(Animator).enabled = false;
		aniFase[2].GetComponent(Animator).enabled = false;
		
		if(aniFase[1].transform.position.x < 16.25)
			aniFase[1].transform.position.x += 0.1;	
		
		if(aniFase[1].transform.position.y > 8.25)
			aniFase[1].transform.position.y -= 0.1;
		}
	

}

function OnGUI() {

//botoes de escolha da musica para o treino
if(!isPause && !derrota && animacaoIn > 0)
	{	
	if(numMusica == 0 && puzzle == 0 && treino)
		{		
		GUI.skin = btMusicas; //PRIMEIRA
		if(GUI.Button(Rect(Screen.width*0.15, Screen.height*0.01, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 4;
		
		//SEGUNDA - PUZZLE 1
		if(GUI.Button(Rect(Screen.width*0.15, Screen.height*0.21, Screen.width*0.05, Screen.height*0.1), ""))
			puzzle = 1;
								
		//TERCEIRA
		if(GUI.Button(Rect(Screen.width*0.15, Screen.height*0.41, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 3;
		
		//QUARTA
		if(GUI.Button(Rect(Screen.width*0.15, Screen.height*0.61, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 6;
			
		//QUINTA
		if(GUI.Button(Rect(Screen.width*0.15, Screen.height*0.81, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 5;
		
		//SEXTA
		if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.01, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 7;
		
		//SETIMA - PUZZLE 2
		if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.21, Screen.width*0.05, Screen.height*0.1), ""))
			Application.LoadLevel("PuzzleMafia");
		
		//OITAVA
		if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.41, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 8;
		
		//NONA - PUZZLE 3
		//if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.41, Screen.width*0.05, Screen.height*0.1), ""))
			//numMusica = 8;
		
		//DECIMA
		//if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.41, Screen.width*0.05, Screen.height*0.1), ""))
			//numMusica = 9;
		
		//DECIMA PRIMEIRA
		//if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.41, Screen.width*0.05, Screen.height*0.1), ""))
			//numMusica = 10;
		
		//musica do Suki - BONUS
		if(GUI.Button(Rect(Screen.width*0.50, Screen.height*0.61, Screen.width*0.05, Screen.height*0.1), ""))
			numMusica = 2;	
		
		}
	
	
	//fim
	if(relog > 69 && puzzle == 0) //trava para nao ficar rodando o if de baixo sempre; nao funciona no modo puzzle
		{
		if((numMusica == 2 && relog > 88) || (numMusica == 3 && relog > 70) || (numMusica == 4 && relog > 115) || (numMusica == 5 && relog > 95) || (numMusica == 6 && relog > 100) || (numMusica == 7 && relog > 97) || (numMusica == 8 && relog > 120))
			{
			if(!travaTeclas)
				Final();
			
			
			//ranking
			/*
			if(numMusica == 4)
				{
				for(i = 1; i< 6; i++)
					hs[i-1] = PlayerPrefs.GetInt("HScore" + i.ToString());
				}
			else if(numMusica == 3)
				{
				for(i = 1; i< 6; i++)
					hs[i-1] = PlayerPrefs.GetInt("HScore" + (i+5).ToString());
				}
			else if(numMusica == 6)
				{
				for(i = 1; i< 6; i++)
					hs[i-1] = PlayerPrefs.GetInt("HScore" + (i+10).ToString());
				}
				
			
			for(i = 1; i < 6; i++)
		{

			if(pontuacaoFinal > hs[4])
			{
				if(pontuacaoFinal > hs[3])
				{
					if(pontuacaoFinal > hs[2])
					{
						if(pontuacaoFinal > hs[1])
						{
							if(pontuacaoFinal > hs[0])
							{
								hs[4] = hs[3];
								hs[3] = hs[2];
								hs[2] = hs[1];
								hs[1] = hs[0];
								hs[0] = pontuacaoFinal;
							}
							else
							{
								hs[4] = hs[3];
								hs[3] = hs[2];
								hs[2] = hs[1];
								hs[1] = pontuacaoFinal;
							}
						}
						else
						{
							hs[4] = hs[3];
							hs[3] = hs[2];
							hs[2] = pontuacaoFinal;
						}
					}
					else
						{
							hs[4] = hs[3];
							hs[3] = pontuacaoFinal;
						}
				}
				else
					hs[4] = pontuacaoFinal;
							
			}
		}
	
				if(numMusica == 4)
			{
				PlayerPrefs.SetInt("HScore1", hs[0]);
				PlayerPrefs.SetInt("HScore1-2", hs[1]);
				PlayerPrefs.SetInt("HScore1-3", hs[2]);
				PlayerPrefs.SetInt("HScore1-4", hs[3]);
				PlayerPrefs.SetInt("HScore1-5", hs[4]);
			}
			else if(numMusica == 3)
			{
				PlayerPrefs.SetInt("HScore2", hs[0]);
				PlayerPrefs.SetInt("HScore2-2", hs[1]);
				PlayerPrefs.SetInt("HScore2-3", hs[2]);
				PlayerPrefs.SetInt("HScore2-4", hs[3]);
				PlayerPrefs.SetInt("HScore2-5", hs[4]);
			}
			else if(numMusica == 2)
				{
				PlayerPrefs.SetInt("HScore3", hs[0]);
				PlayerPrefs.SetInt("HScore3-2", hs[1]);
				PlayerPrefs.SetInt("HScore3-3", hs[2]);
				PlayerPrefs.SetInt("HScore3-4", hs[3]);
				PlayerPrefs.SetInt("HScore3-5", hs[4]);
			}*/
			
			//GUI.skin = finalSkin;
			//GUI.Box(Rect(Screen.width*0.05,Screen.height*0.05,Screen.width*0.95,Screen.height*0.5), "Acerto: " + PorcentagemAcerto.porcentagem.ToString() + "%" + " (" + PorcentagemAcerto.acertos.ToString() + " / " + PorcentagemAcerto.totalNotas.ToString() + ")"); //porcentagem de acerto
			
			//if(!treino)
				//{
				//GUI.Box(Rect(Screen.width*0.1,Screen.height*0.2,Screen.width*0.8,Screen.height*0.5), "Pontos: " + pontuacao.ToString()); //pontuacao regular
				//GUI.Box(Rect(Screen.width*0.1,Screen.height*0.35,Screen.width*0.8,Screen.height*0.5), "Vidas: " + ChecarTrigger.vida.ToString()); //vidas no final da musica
				//GUI.Box(Rect(Screen.width*0.1,Screen.height*0.6,Screen.width*0.8,Screen.height*0.7), "Final: " + pontuacaoFinal.ToString()); //pontuacao * vidas
				//GUI.Box(Rect(Screen.width*0.1,Screen.height*0.75,Screen.width*0.8,Screen.height*0.7), "Melhor: " + hs[0].ToString()); //melhor resultado
				//}
			
			
			GUI.skin = btSeguir;
			if(GUI.Button(Rect(Screen.width*0.8,Screen.height*0.75,Screen.width*0.1,Screen.height*0.15), ""))
				{
				if(!treino)
					{
					if(numMusica <= 6)
						Application.LoadLevel("NarrativaSuburbio");
					
					if(numMusica > 6)
						Application.LoadLevel("NarrativaMafia");
					}
					
				else
					{
					numMusica = 0;
					Application.LoadLevel("Jogo");
					}
					
				travaTeclas = false;
				}
				
			/*
			if(numMusica == 2)
				musicaOK2 = true; //define que a musica 2 ja foi tocada
			
			if(numMusica == 3)
				musicaOK3 = true; //define que a musica 3 ja foi tocada
			
			if(numMusica == 4)
				musicaOK4 = true; //define que a musica 4 ja foi tocada
			
			if(numMusica == 5)
				musicaOK5 = true; //define que a musica 5 ja foi tocada
				
			if(numMusica == 6)
				musicaOK6 = true; //define que a musica 5 ja foi tocada*/
			}
		}
		
	/*	
	if(animacaoIn == 3)
		{
		//menu
		GUI.skin = btMenu;
		if(GUI.Button(Rect(Screen.width*0.027,Screen.height*0.003,Screen.width*0.1,Screen.height*0.065), ""))
			Application.LoadLevel("Menu");
	
		}*/
	
	//controle de volume das musicas
	if(numMusica != 0 && puzzle == 0 && animacaoIn == 3)
		{
		//slider para controlar o volume da musica
		GUI.skin = hSlider;
		inGameVolume = GUI.HorizontalSlider (Rect (Screen.width*0.271, Screen.height*0.69, Screen.width*0.08, Screen.height*0.08), inGameVolume, 0.0, 1.0);
		audio.volume = inGameVolume; //a variavel volume (nativa) se iguala a variavel de volume criada.
		}
	
	}
}

//funcao da musica do Roger2 (primeira musica) = 4
function PrimeiraMusica() {

	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[4];
	objAni[1].renderer.material.color.a = 0;
	objAni[4].GetComponent(SpriteRenderer).sprite = spritesC[0];
	objAni[4].transform.localScale = Vector2(14, 14);
	objAni[4].transform.position.y = 1.58;

	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();

	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//musica
	position = Vector3 (55.2, -2.9372, 0); //55.3
	Instantiate(musica[0], position, Quaternion.identity);
	audio.PlayOneShot(audios[0]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}

//funcao da musica do Roger (segunda musica) = 3
function SegundaMusica() {

	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[3];
	objAni[1].transform.position.y = -7.34;
	objAni[1].renderer.material.color.a = 1;
	objAni[5].GetComponent(SpriteRenderer).sprite = spritesC[1];
	objAni[5].renderer.enabled = true;

	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();
	
	//animacao da fase
	aniFase[0].GetComponent(SpriteRenderer).enabled = true;
	aniFase[1].GetComponent(SpriteRenderer).enabled = true;
	aniFase[2].GetComponent(SpriteRenderer).enabled = true;

	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//animacao da fase
	aniFase[1].GetComponent(Animator).enabled = true;
	aniFase[2].GetComponent(Animator).enabled = true;
	
	//musica
	position = Vector3 (51.9, -2.9372, 0); //(52.1, 0, 0);
	Instantiate(musica[1], position, Quaternion.identity);
	audio.PlayOneShot(audios[1]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}

//funcao da musica do Suki (terceira musica) = 2
function TerceiraMusica() {
	
	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[4];
	objAni[1].renderer.material.color.a = 0;
	objAni[4].GetComponent(SpriteRenderer).sprite = spritesC[0];
	objAni[4].transform.localScale = Vector2(14, 14);
	objAni[4].transform.position.y = 1.58;
	
	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();

	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//musica
	position = Vector3 (47, -2.9372, 0);
	Instantiate(musica[2], position, Quaternion.identity);
	audio.PlayOneShot(audios[2]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}

//funcao da musica do Roger (quarta musica) = 6
function QuartaMusica() {
	
	escolhaOK = true;
	animacaoIn = 2;
	
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[3];
	objAni[1].transform.position.y = -7.34;
	objAni[1].renderer.material.color.a = 1;
	objAni[5].GetComponent(SpriteRenderer).sprite = spritesC[2];
	objAni[5].renderer.enabled = true;
	
	position = Vector3 (15.48, -1.17, -3); 
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();
	
	//animacao da fase
	aniFase[3].GetComponent(SpriteRenderer).enabled = true;
	aniFase[4].GetComponent(SpriteRenderer).enabled = true;
	aniFase[5].GetComponent(SpriteRenderer).enabled = true;
	aniFase[6].GetComponent(SpriteRenderer).enabled = true;

	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//animacao da fase
	
	aniFase[3].GetComponent(Animator).enabled = true;
	aniFase[4].GetComponent(Animator).enabled = true;
	aniFase[5].GetComponent(Animator).enabled = true;
	aniFase[6].GetComponent(Animator).enabled = true;
	
	//musica
	position = Vector3 (77.8, -2.9372, 0); //versao 1: (50, 0, 0); VelPrefab = 6.141
	Instantiate(musica[3], position, Quaternion.identity);
	audio.PlayOneShot(audios[3]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;
	
}

//funcao da musica do Suki (quinta musica) = 5
function QuintaMusica() {
	
	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[3];
	objAni[1].transform.position.y = -7.34;
	objAni[1].renderer.material.color.a = 1;
	objAni[5].GetComponent(SpriteRenderer).sprite = spritesC[5];
	objAni[5].renderer.enabled = true;
	
	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();
	
	//animacao da fase
	aniFase[7].GetComponent(SpriteRenderer).enabled = true;
	aniFase[8].GetComponent(SpriteRenderer).enabled = true;
	aniFase[9].GetComponent(SpriteRenderer).enabled = true;
	aniFase[10].GetComponent(SpriteRenderer).enabled = true;
	aniFase[11].GetComponent(SpriteRenderer).enabled = true;

	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//animacao da fase
	aniFase[7].GetComponent(Animator).enabled = true;
	aniFase[8].GetComponent(Animator).enabled = true;
	aniFase[9].GetComponent(Animator).enabled = true;
	aniFase[10].GetComponent(Animator).enabled = true;
	aniFase[11].GetComponent(Animator).enabled = true;
	
	//musica
	position = Vector3 (18.4, -2.9372, 0);
	Instantiate(musica[4], position, Quaternion.identity);
	audio.PlayOneShot(audios[4]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}

//funcao da primeira musica da mafia (sexta musica)
function SextaMusica() {

	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[3];
	objAni[1].transform.position.y = -7.34;
	objAni[1].renderer.material.color.a = 0;
	objAni[5].GetComponent(SpriteRenderer).sprite = spritesC[6];
	objAni[5].renderer.enabled = true;

	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();
	
	//animacao da fase
	aniFase[12].GetComponent(SpriteRenderer).enabled = true;
	aniFase[13].GetComponent(SpriteRenderer).enabled = true;
	aniFase[14].GetComponent(SpriteRenderer).enabled = true;
	aniFase[15].GetComponent(SpriteRenderer).enabled = true;
	aniFase[16].GetComponent(SpriteRenderer).enabled = true;
	aniFase[17].GetComponent(SpriteRenderer).enabled = true;
	aniFase[18].GetComponent(SpriteRenderer).enabled = true;

	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//animacao da fase
	aniFase[14].GetComponent(Animator).enabled = true;
	aniFase[15].GetComponent(Animator).enabled = true;
	aniFase[16].GetComponent(Animator).enabled = true;
	aniFase[17].GetComponent(Animator).enabled = true;
	aniFase[18].GetComponent(Animator).enabled = true;
	
	//musica
	position = Vector3 (-8, -35.77, -3.1);
	Instantiate(musica[5], position, Quaternion.identity);
	audio.PlayOneShot(audios[6]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}

//funcao da segunda musica da mafia (setima musica)
function SetimaMusica() {

	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[3];
	objAni[1].transform.position.y = -7.34;	
	objAni[1].renderer.material.color.a = 0;
	objAni[5].GetComponent(SpriteRenderer).sprite = spritesC[7];
	objAni[5].transform.position.y = 10.047;
	objAni[5].renderer.enabled = true;

	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();

	yield WaitForSeconds(3.1);
	
	//animacao da fase
	aniFase[19].GetComponent(Animator).enabled = true;
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//musica
	position = Vector3 (439, -42.95, -3.1); //444.77
	Instantiate(musica[6], position, Quaternion.identity);
	audio.PlayOneShot(audios[7]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}

//funcao da segunda musica dos piratas (nona musica)
function NonaMusica() {

	escolhaOK = true;
	animacaoIn = 2;
	objAni[1].GetComponent(SpriteRenderer).sprite = spritesC[3];
	objAni[1].transform.position.y = -7.34;	
	objAni[1].renderer.material.color.a = 0;
	objAni[5].GetComponent(SpriteRenderer).sprite = spritesC[7];
	objAni[5].transform.position.y = 10.047;
	objAni[5].renderer.enabled = true;

	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();

	yield WaitForSeconds(3.1);
	
	//animacao da fase
	//aniFase[19].GetComponent(Animator).enabled = true;
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//musica
	position = Vector3 (5.594, -37.76, -3.1); //444.77
	Instantiate(musica[8], position, Quaternion.identity);
	audio.PlayOneShot(audios[9]);
	planoPreto.transform.position.y = 50;
	ChecarTrigger.pontos = 0;

}


//funcao do puzzle do suburbio
function puzzleSub() {
	
	escolhaOK = true;
	animacaoIn = 2;
	
	position = Vector3 (15.48, -1.17, -3);
	Instantiate(regressiva, position, Quaternion.identity);

	audio.Stop();
	
	yield WaitForSeconds(3.1);
	
	animacaoIn = 3;
	travaTeclas = false;
	
	//puzzle
	audio.volume = 1;
	inGameVolume = 1;
	audio.clip = audios[5];
	audio.Play();
	audio.loop = true;
	puzzleSuburbio[0].GetComponent(ChecaPuzzle).enabled = true;
	puzzleSuburbio[0].renderer.enabled = true; //marcacao do quadro
	puzzleSuburbio[1].renderer.enabled = true; //quadro
	planoPreto.transform.position.y = 50;

}

function Derrota() {

	pontuacao = 0; //zera a pontuacao
	ChecarTrigger.vida = 30; //vida volta a ser 3
	AudioListener.pause = true; //audio do jogo fica pausado
	derrota = true; //trava tudo que depende da derrota como false
	
	yield WaitForSeconds(0.1);
	
	Application.LoadLevel("Derrota"); //chama a cena Derrota
	

}

//funcao static  para ser acessada em botaoMute.js
/*
static function Mute() {

	if(botaoMute.muteOn) //botao de mute na tela
		{
		AudioListener.volume = 0;
		inGameVolume = 0;
		}
	
		else
			{
			inGameVolume = 0.5; //volume medio
			AudioListener.volume = inGameVolume; //os audios linkados no mesmo objeto do script (MainCamera) se igualam a InGameVolume
			}

}*/

function NomesMusicas () { //Instanciar nome das musicas na tela de escolha - TREINO

	yield WaitForSeconds(1);

	//primeira
	position = Vector3 (0.23, 0.95, 1);
	Instantiate(textoMusica[0], position, Quaternion.identity);
	
	//segunda - Puzzle
	position = Vector3 (0.23, 0.75, 1);
	Instantiate(textoMusica[5], position, Quaternion.identity);
	
	//terceira
	position = Vector3 (0.23, 0.55, 1);
	Instantiate(textoMusica[1], position, Quaternion.identity);
	
	//quarta
	position = Vector3 (0.23, 0.35, 1);
	Instantiate(textoMusica[2], position, Quaternion.identity);
	
	//quinta
	position = Vector3 (0.23, 0.15, 1);
	Instantiate(textoMusica[3], position, Quaternion.identity);
	
	//sexta
	position = Vector3 (0.58, 0.95, 1);
	Instantiate(textoMusica[6], position, Quaternion.identity);
	
	//setima - Puzzle
	position = Vector3 (0.58, 0.75, 1);
	Instantiate(textoMusica[7], position, Quaternion.identity);
	
	//oitava
	position = Vector3 (0.58, 0.55, 1);
	Instantiate(textoMusica[8], position, Quaternion.identity);
	
	//bonus
	position = Vector3 (0.58, 0.35, 1);
	Instantiate(textoMusica[4], position, Quaternion.identity);

}

function Final(){

	//travar teclas do teclado para nao computar pontos
	travaTeclas = true;			
	
	//arredondamento das vidas pra multiplicar pelos pontos
	if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[1] || tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[0])
		ChecarTrigger.vida = 1;
	
	else if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[2])
		ChecarTrigger.vida = 2; 
	
	else if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[3])
		ChecarTrigger.vida = 3;
	
	else if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[4])
		ChecarTrigger.vida = 4;
	
	else if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[5])
		ChecarTrigger.vida = 5;
	
	else if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[6])
		ChecarTrigger.vida = 6;
		
	else if(tecladoVida.GetComponent(SpriteRenderer).sprite == spriteTeclado[7])
		ChecarTrigger.vida = 7;
	
	planoPreto.renderer.material.color.a = 0.7; //plano preto de fundo 70%
	planoPreto.transform.position.y = 0; //plano preto no centro da tela
	
	//multiplicacao dos pontos pelas vidas
	pontuacaoFinal = pontuacao * ChecarTrigger.vida;
	
	//animacoes das fases
	aniFase[1].GetComponent(Animator).enabled = false;
	aniFase[2].GetComponent(Animator).enabled = false;
	aniFase[3].GetComponent(Animator).enabled = false;
	aniFase[4].GetComponent(Animator).enabled = false;
	aniFase[5].GetComponent(Animator).enabled = false;
	aniFase[6].GetComponent(Animator).enabled = false;
	aniFase[7].GetComponent(Animator).enabled = false;
	aniFase[8].GetComponent(Animator).enabled = false;
	aniFase[9].GetComponent(Animator).enabled = false;
	aniFase[10].GetComponent(Animator).enabled = false;
	aniFase[11].GetComponent(Animator).enabled = false;
	aniFase[14].GetComponent(Animator).enabled = false;
	aniFase[15].GetComponent(Animator).enabled = false;
	aniFase[16].GetComponent(Animator).enabled = false;
	aniFase[17].GetComponent(Animator).enabled = false;
	aniFase[18].GetComponent(Animator).enabled = false;
	aniFase[19].GetComponent(Animator).enabled = false;

	//Desempenho
	position = Vector3(0.12, 0.86, -4);
	Instantiate(textoVitoria[0], position, Quaternion.identity);
			
	if(!treino)
		{
		yield WaitForSeconds(1);
		
		position = Vector3(0.12, 0.73, -4);
		Instantiate(textoVitoria[1], position, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		position = Vector3(0.12, 0.60, -4);
		Instantiate(textoVitoria[2], position, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		position = Vector3(0.12, 0.3, -4);
		Instantiate(textoVitoria[3], position, Quaternion.identity);
		
		
		if(numMusica == 4)
			PosMusicas.proximo = 0;
			
		else if(numMusica == 3)
			PosMusicas.proximo = 34;
	
		else if(numMusica == 6)
			PosMusicas.proximo = 48;
	
		else if(numMusica == 5)
			PosMusicas.proximo = 56;
			
		else if(numMusica == 7)
			MafiaNarrativa.proximo = 14;
		
		else if(numMusica == 8)
			MafiaNarrativa.proximo = 40;
		
		if(numMusica <= 6)
			{
			PlayerPrefs.SetInt("SaveGame", PosMusicas.proximo);
			PlayerPrefs.SetInt("Continua", 1); //botao Continua do Menu ativo
			}
			
		if(numMusica > 6)
			{
			PlayerPrefs.SetInt("SaveGame", MafiaNarrativa.proximo);
			PlayerPrefs.SetInt("Continua", 2); //botao Continua do Menu ativo
			}
	
		}

}