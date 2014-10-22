#pragma strict
//script da animaçao do tutorial


var objeto : GameObject[]; //objetos da animaçao
//objeto[0] = T_pentagrama - titulo
//objeto[1] = te_pentagrama - texto
//objeto[2] = pentagrama - imagem
//objeto[3] = T_clave -titulo
//objeto[4] = te_clave - texto
//objeto[5] = clave - imagem
//objeto[6] = nota normal - imagem
//objeto[7] = te_clave2 - texto
//objeto[8] = nota riscada - imagem
//objeto[9] = nome das notas - imagem
//objeto[10] = te_clave3 - texto
//objeto[11] = teclado1 - imagem
//objeto[12] = teclado2 - imagem
//objeto[13] = explosao - imagem
//objeto[14] = nome da nota C3 - imagem
//objeto[15] = plano preto 70% - imagem
//objeto[16] = te_clave4 - texto
//objeto[17] = notas do teclado
//objeto[18] = T_treino -titulo
//objeto[19] = te_loading - texto
//objeto[20] = musica 
//objeto[21] = Marcacao - imagem
//objeto[22] = trava de tela - colisao
//objeto[23] = T_comoJogar -titulo 
//objeto[24] = te_comoJogar - texto
//objeto[25] = tela do teclado qwerty
//objeto[26] = botao de ajuda - imagem
//objeto[27] = ESC pause - imagem
//objeto[28] = balao de fala do pai

var imgInterface : GameObject;
var imgInterfaceSp : Sprite[];

static var proximo : int; //define o estagio da animaçao
static var voltar : int; ////acessado em mudaVoltar.js; destroi objetos quando apertado o botao de voltar
var btProximo : boolean; //ativa ou desativa o botao proximo
var btAvancar : GameObject; //botao avançar
var botaoVoltar : GameObject; //botao voltar
static var btVoltar : boolean; //acessado em mudaVoltar.js; ativa ou desativa o botao voltar

var positionIns : Vector3; //posiçao do instantiate
var speed : float[]; //velocidades dos objetos que se movem de maneira constante

static var chamarAnimacao : boolean; //acessada em botoesTutorial.js
static var chamarVoltar : boolean; //acessada em botoesTutorial.js

var pauseMenu : GameObject; //menu de pause
static var isPause : boolean; //define se esta pausado

function Start () {
	
	proximo = 0;
	btProximo = false;
	objeto[2].transform.position.x = -70;
	objeto[5].renderer.enabled = false;
	objeto[5].renderer.material.color.a = 0;
	objeto[9].renderer.enabled = false;
	objeto[11].transform.position.y = -24;
	objeto[12].transform.position.y = -24;
	objeto[14].renderer.enabled = false;
	objeto[15].renderer.material.color.a = 0;
	objeto[17].renderer.enabled = false;
	objeto[17].renderer.material.color.a = 0;
	objeto[21].renderer.enabled = false;
	objeto[25].renderer.enabled = false;
	objeto[25].renderer.material.color.a = 0;
	objeto[26].transform.position.y = -40;
	objeto[27].renderer.material.color.a = 0;
	
	imgInterface.renderer.enabled = false;
	
	pauseMenu.transform.position.y = 55;

//animacao 1
	yield WaitForSeconds(1.5);
	positionIns = Vector3(0.306, 0.95, 0);
	Instantiate(objeto[0], positionIns, Quaternion.identity);
	
	yield WaitForSeconds(1.2);
	positionIns = Vector3(0.15, 0.83, 0);
	Instantiate(objeto[1], positionIns, Quaternion.identity);
	
	yield WaitForSeconds(3);
	proximo = 1;

}

function Update () {

//pause
	if(Input.GetKeyDown(KeyCode.Escape) || botoesPauseTut.menuVoltar) //aperta ESC
		{
		isPause = !isPause; //troca entre pausado e despausado
		AudioListener.pause = !AudioListener.pause; //pausa e despausa o audio
		botoesPauseTut.menuVoltar = false;  //desativa a variavel
		if(isPause)
			{
			Time.timeScale = 0; //congela toda a movimentacao
			pauseMenu.transform.position.y = 3; //desce o menu de pause para o centro da tela
			} else	{
					Time.timeScale = 1; //tempo volta ao normal
					pauseMenu.transform.position.y = 55; //menu de pause volta a se esconder acima do quadro
					botoesPauseTut.menuVoltar = false; //desativa a booleana que tira o pause
					}
		}


//botao Avançar
	if(chamarAnimacao)
		{
		Animacao();
		chamarAnimacao = false;
		}
	
	if(btProximo)
		btAvancar.transform.position.y = -11; //botao Proximo na tela
	
	else
		btAvancar.transform.position.y = -20; //botao Proximo fora da tela

//botao Voltar
	if(chamarVoltar)
		{
		Voltar();
		chamarVoltar = false;
		}
	
	if(btVoltar)
		botaoVoltar.transform.position.y = -9; //botao Voltar na tela
	
	else
		botaoVoltar.transform.position.y = -20; //botao Voltar fora da tela

//essas partes da animaçao estao fora da funçao Animacao() porque precisam do Update() para se movimentarem
	if(proximo == 1)
		{
		if(objeto[2].transform.position.x <= 15)
			objeto[2].transform.position.x += speed[0]*Time.deltaTime;
			
		if(objeto[2].transform.position.x >= 14)
			btProximo = true;
		}
	
	if(proximo == 3)
		if(objeto[5].transform.position.x >= -8.23)
			objeto[5].transform.position.x -= speed[1]*Time.deltaTime;
	
	if(proximo == 9)
		if(objeto[11].transform.position.y <= -12.85)
			{
			objeto[11].transform.position.y += speed[2]*Time.deltaTime;
			objeto[12].transform.position.y += speed[2]*Time.deltaTime;
			}
	
	if(proximo == 18)
		{
		if(objeto[25].renderer.material.color.a != 1)
			{
			objeto[25].renderer.enabled = true;
			objeto[25].renderer.material.color.a += Time.deltaTime;
			}
		
		if(objeto[27].renderer.material.color.a != 1)
			{
			objeto[27].renderer.enabled = true;
			objeto[27].renderer.material.color.a += Time.deltaTime;
			}
		
		if(objeto[25].renderer.material.color.a >= 0.9)
			btProximo = true;
		}
	
	//fade in da clave de sol
	if(objeto[5].renderer.enabled && objeto[5].renderer.material.color.a != 1)
		objeto[5].renderer.material.color.a += Time.deltaTime;
	
	//fade in das notas do teclado
	if(objeto[17].renderer.enabled && objeto[17].renderer.material.color.a != 1)
		objeto[17].renderer.material.color.a += Time.deltaTime;
		
}

function Animacao () {

	//proximo == 0 eh soh pro botao voltar
	if(proximo == 0)
		{
		yield WaitForSeconds(1.5);
		positionIns = Vector3(0.306, 0.95, 0);
		Instantiate(objeto[0], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(1.2);
		positionIns = Vector3(0.15, 0.83, 0);
		Instantiate(objeto[1], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(3);
		proximo = 1;
		}

	if(proximo == 2)
		{
		btProximo = false;
		positionIns = Vector3(0.425, 0.95, 0);
		Instantiate(objeto[3], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(1.2);
		positionIns = Vector3(0.15, 0.83, 0);
		Instantiate(objeto[4], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(3);
		objeto[5].renderer.enabled = true;
		
		yield WaitForSeconds(2);
		proximo = 3;
		}
	
	if(proximo == 3)
		{
		yield WaitForSeconds(1.4);
		proximo = 4;
		}
	
	if(proximo == 4)
		{
		//G3
		positionIns = Vector3(10, 1.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.5);
		btProximo = true;
		btVoltar = true;
		}
	
	if(proximo == 5)
		{
		btProximo = false;
		btVoltar = false;		
		positionIns = Vector3(0.15, 0.83, 0);
		Instantiate(objeto[7], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(2.5);
		proximo = 6;
		}
	
	if(proximo == 6)
		{	
		//C3
		positionIns = Vector3(-2, -2.8, 0.5);
		Instantiate(objeto[8], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
		
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.2);
	
		//D3
		positionIns = Vector3(1, -1.8, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
		
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.2);
	
		//E3
		positionIns = Vector3(4, -0.8, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//F3
		positionIns = Vector3(7, 0.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//A3
		positionIns = Vector3(13, 2.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//B3
		positionIns = Vector3(16, 3.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//C4
		positionIns = Vector3(19, 4.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);

		yield WaitForSeconds(0.2);
	
		//D4
		positionIns = Vector3(22, 5.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
		
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
		
		//E4
		positionIns = Vector3(25, 6.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//F4
		positionIns = Vector3(28, 7.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//G4
		positionIns = Vector3(31, 8.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.2);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.7);
		objeto[9].renderer.enabled = true;
		btProximo = true;
		btVoltar = true;
		}
	
	if(proximo == 7)
		{
		btProximo = false;
		btVoltar = false;
		objeto[9].renderer.enabled = false;
		
		positionIns = Vector3(0.15, 0.83, 0);
		Instantiate(objeto[10], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(8);
		proximo = 8;
		}
	
	if(proximo == 8)
		{
		//C3
		positionIns = Vector3(-2, -2.8, 0.5);
		Instantiate(objeto[8], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
		
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.8);
		objeto[14].renderer.enabled = true;
		btProximo = true;
		btVoltar = true;
		}
	
	if(proximo == 9)
		{
		btProximo = false;
		btVoltar = false;
		
		yield WaitForSeconds(1.2);
		proximo = 10;
		}
	
	if(proximo == 10)
		{		
		yield WaitForSeconds(1.2);
		positionIns = Vector3(0.15, 0.83, 0);
		Instantiate(objeto[16], positionIns, Quaternion.identity);
		
		objeto[17].renderer.enabled = true;
		
		yield WaitForSeconds(1);
		
		//D3
		positionIns = Vector3(1, -1.8, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
		
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.1);
		proximo = 11;
		}
	
	if(proximo == 11)
		{
		btProximo = false;
		
		yield WaitForSeconds(1);
		
		//E3
		positionIns = Vector3(4, -0.8, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.1);
		proximo = 12;
		}
	
	if(proximo == 12)
		{
		yield WaitForSeconds(1);
		
		//F3
		positionIns = Vector3(7, 0.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.1);
		proximo = 13;
		}
		
	if(proximo == 13)
		{
		yield WaitForSeconds(1);
		
		//G3
		positionIns = Vector3(10, 1.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.1);
		proximo = 14;
		}
		
	if(proximo == 14)
		{
		yield WaitForSeconds(1);
		
		//A3
		positionIns = Vector3(13, 2.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.1);
		proximo = 15;
		}
	
	if(proximo == 15)
		{
		yield WaitForSeconds(1);
		
		//B3
		positionIns = Vector3(16, 3.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
	
		yield WaitForSeconds(0.4);
	
		//explosao
		Instantiate(objeto[13], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(0.1);
		proximo = 16;
		}
		
	if(proximo == 16)
		{
		btProximo = true;
		btVoltar = true;
		}
		
	//como jogar
	if(proximo == 17)
		{
		objeto[17].renderer.enabled = false;
		btProximo = false;
		btVoltar = false;
		
		positionIns = Vector3(0.425, 0.95, 0);
		Instantiate(objeto[23], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		positionIns = Vector3(0.15, 0.83, 0);
		Instantiate(objeto[24], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(3);
		
		proximo = 18;
		}
	
	//treino
	if(proximo == 19)
		{
		objeto[25].renderer.enabled = false;
		objeto[27].renderer.enabled = false; //ESC-pause
		
		btProximo = false;
		
		positionIns = Vector3(0.39, 0.95, 0);
		Instantiate(objeto[18], positionIns, Quaternion.identity);
		
		yield WaitForSeconds(1);
		proximo = 20;
		}
	
	if(proximo == 20)
		{
		btProximo = true;
		btVoltar = true;
		}
	
	if(proximo == 21)
		{
		btProximo = false;
		btVoltar = false;
		
		objeto[15].renderer.enabled = true;
		objeto[15].renderer.material.color.a = 0.7;
		objeto[28].renderer.enabled = false;
		
		yield WaitForSeconds(0.2);
		
		//loading
		positionIns = Vector3(0.4, 0.5, -8.1);
		Instantiate(objeto[19], positionIns, Quaternion.identity);
		audio.Stop();
		
		yield WaitForSeconds(1.5);
		proximo = 22;
		}
	
	if(proximo == 22)
		{
		objeto[15].renderer.material.color.a = 0;
		
		//musica
		positionIns = Vector3(50, 0, 0);
		Instantiate(objeto[20], positionIns, Quaternion.identity);
		objeto[21].renderer.enabled = true;
		
		//sai trava de tela
		objeto[22].transform.position.y += 100; 
		
		yield WaitForSeconds(0.5);
		VelPrefab.speed = speed[3];
		objeto[26].transform.position.y = -8.5; //botao de ajuda
		
		yield WaitForSeconds(43);
		btProximo = true;
		btVoltar = true;
		}
	/*
	if(proximo == 23)
		imgInterface.renderer.enabled = true;
	
	if(proximo == 24)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[0];
	
	if(proximo == 25)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[1];
	
	if(proximo == 26)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[2];
		
	if(proximo == 27)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[3];
	
	if(proximo == 28)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[4];
	
	if(proximo == 29)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[5];
	
	if(proximo == 30)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[6];
	
	if(proximo == 31)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[7];
	
	if(proximo == 32)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[8];
	
	if(proximo == 33)
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[9];*/
	
	if(proximo == 23)
		{
		Introducao.proximo = 26;
		Application.LoadLevel("Introducao");
		proximo = 35;
		}
}

function Voltar(){

	if(proximo == 4 && btProximo)
		{
		voltar = 4; //limpa a cena atual
		objeto[5].renderer.enabled = false;
		objeto[5].transform.position.x = 14.321;
		objeto[5].renderer.material.color.a = 0;
		
		yield WaitForSeconds(0.1);
		
		btVoltar = false;
		btProximo = false;
		proximo = 0; //chama o ponto anterior
		voltar = 0;
		Animacao();
		}
	
	if(proximo == 6 && btProximo)
		{
		voltar = 6;
		objeto[9].renderer.enabled = false;
		
		yield WaitForSeconds(0.1);
		
		btVoltar = false;
		btProximo = false;
		proximo = 2;
		voltar = 0;
		Animacao();
		}
	
	if(proximo == 8 && btProximo)
		{
		voltar = 8;
		objeto[14].renderer.enabled = false;
		
		yield WaitForSeconds(0.1);
		
		btVoltar = false;
		btProximo = false;
		proximo = 5;
		voltar = 0;
		
		//G3
		positionIns = Vector3(10, 1.2, 0.5);
		Instantiate(objeto[6], positionIns, Quaternion.identity);
		
		Animacao();
		}
	
	if(proximo == 16 && btProximo)
		{
		voltar = 16;
		objeto[17].renderer.enabled = false;
		
		yield WaitForSeconds(0.1);
		
		btVoltar = false;
		btProximo = false;
		proximo = 10;
		voltar = 0;
		Animacao();
		}
		
	if(proximo == 20 && btProximo)
		{
		voltar = 20;
		objeto[25].renderer.enabled = true;
		objeto[25].renderer.material.color.a = 0;
		objeto[27].renderer.enabled = true;
		objeto[27].renderer.material.color.a = 0;
		
		yield WaitForSeconds(0.1);
		
		btVoltar = false;
		btProximo = false;
		proximo = 17;
		voltar = 0;
		Animacao();
		}
	
	if(proximo == 22 && btProximo)
		{
		voltar = 22;
		objeto[21].renderer.enabled = false;
		objeto[22].transform.position.y -= 100;
		objeto[26].transform.position.y = -40; 
		
		yield WaitForSeconds(0.1);
		
		btVoltar = false;
		btProximo = false;
		proximo = 21;
		voltar = 0;
		Animacao();
		}
	
	if(proximo == 24 && btProximo)
		{
		imgInterface.GetComponent(SpriteRenderer).sprite = imgInterfaceSp[10]; //imagem default
		proximo = 23;
		Animacao();
		}
	
	if(proximo == 25 && btProximo)
		{
		proximo = 24;
		Animacao();
		}
	
	if(proximo == 26 && btProximo)
		{
		proximo = 25;
		Animacao();
		}
	
	if(proximo == 27 && btProximo)
		{
		proximo = 26;
		Animacao();
		}
	
	if(proximo == 28 && btProximo)
		{
		proximo = 27;
		Animacao();
		}
	
	if(proximo == 29 && btProximo)
		{
		proximo = 28;
		Animacao();
		}
	
	if(proximo == 30 && btProximo)
		{
		proximo = 29;
		Animacao();
		}
	
	if(proximo == 31 && btProximo)
		{
		proximo = 30;
		Animacao();
		}
	
	if(proximo == 32 && btProximo)
		{
		proximo = 31;
		Animacao();
		}
	
	if(proximo == 33 && btProximo)
		{
		proximo = 32;
		Animacao();
		}

}