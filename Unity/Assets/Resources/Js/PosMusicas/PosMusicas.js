#pragma strict
//script da animacao final


var baseTexto : GameObject; //base dos textos
var texto : GameObject[]; //textos das falas dos personagens
var logo : GameObject; //logo do Musikinesia
var planoPreto : GameObject; //plano preto 70%
var btVoltar : GameObject; //botao Voltar

var btProximo : GameObject; //botao de proximo
var btProximoON : boolean; //ativa o botao de proximo
static var proximo : int; //acessada em mudaTextoPos.js e em Pontuacao.js; define o andamento da animacao
static var chamaAnimacao : boolean; //acessada em mudaTextoPos.js; chama a funcao Animacao();

var posicao : Vector3; //posicao de instantiate

var personagem : GameObject[];
//personagem[0] = pai
//personagem[1] = Tom
//personagem[2] = pernas pai
//personagem[3] = senhora
//personagem[4] = caras da banda

var spritesP : Sprite[];
//spritesP[0] = pai normal
//spritesP[1] = pai pensativo
//spritesP[2] = pai assustado
//spritesP[3] = pai de pernas pro ar
//spritesP[4] = tom normal
//spritesP[5] = tom braços cruzados
//spritesP[6] = tom assustado
//spritesP[7] = tom pensativo
//spritesP[8] = senhora normal
//spritesP[9] = senhora sorrindo
//spritesP[10] = tom feliz
//spritesP[11] = senhora com o pato

var objetos : GameObject[];
//objetos[0] = bau do teclado
//objetos[1] = bilhete

var cenario : GameObject[];

var spritesC : Sprite[];
//cenarios[0] = sotao
//cenarios[1] = fachada da casa
//cenarios[2] = garagem
//cenarios[3] = backstage
//cenarios[4] = fachada da casa a noite

var efeitoSonoro : AudioClip[]; //efeitos sonoros
var musicas : AudioClip[]; //musicas
//musicas[0] = Ordinary Morning
//musicas[1] = Its only rock n roll
//musicas[2] = Its only rock n roll com publico
//musicas[3] = suspense

var continua : GameObject; //texto de continua

//pause
var pauseMenu : GameObject; //menu de pause
static var isPause : boolean; //define se esta pausado

function Start () {
	
	//para teste
	//if(proximo < 19)
		//proximo = 34;

	pauseMenu.transform.position.y = 20;
	
	logo.renderer.material.color.a = 0;
	planoPreto.renderer.material.color.a = 0;
	btVoltar.renderer.enabled = false;
	personagem[3].renderer.enabled = false;
	baseTexto.GetComponent(Animator).enabled = true;
	
	posicao = Vector3(0, -3.556, 0);
	Instantiate(baseTexto, posicao, Quaternion.identity);
	
	if(proximo == 0)
		{		
		yield WaitForSeconds(1);
	
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[0], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximoON = true;
		}
		
	else
		{
		objetos[0].GetComponent(Animator).enabled = false; //para de rodar a animacao do bau flutuando
		objetos[1].GetComponent(Animator).enabled = false; //para de rodar a animacao do bilhete flutuando
		objetos[0].renderer.enabled = false;
		objetos[1].renderer.enabled = false;
		personagem[0].GetComponent(Animator).enabled = false; //para de rodar a animacao do pai flutuando
		personagem[0].transform.Rotate (0, 180, -180);
		}
	
	if(proximo < 37)
		{
		audio.clip = musicas[0];
		audio.Play();
		audio.loop = true;
		}
	
	Animacao();
		

}

function Update () {

	//pause
	if(Input.GetKeyDown(KeyCode.Escape) || botoesPausePosM.menuVoltar) //aperta ESC
		{
		isPause = !isPause; //troca entre pausado e despausado
		AudioListener.pause = !AudioListener.pause; //pausa e despausa o audio
		botoesPausePosM.menuVoltar = false;  //desativa a variavel
		if(isPause)
			{
			Time.timeScale = 0; //congela toda a movimentacao
			pauseMenu.transform.position.y = 0; //desce o menu de pause para o centro da tela
			} else	{
					Time.timeScale = 1; //tempo volta ao normal
					pauseMenu.transform.position.y = 20; //menu de pause volta a se esconder acima do quadro
					botoesPausePosM.menuVoltar = false; //desativa a booleana que tira o pause
					}
		}

	if(Input.GetKeyDown("p"))
		print(proximo);

	if(btProximoON)
		btProximo.transform.position.y = -4.5; //na tela
		
		else
			btProximo.transform.position.y = -40; //fora da tela
	
	if(chamaAnimacao)
		{
		btProximoON = false;
		chamaAnimacao = false;			
			
		if(proximo == 18)
			{
			Pontuacao.escolhaOK = false;
			Pontuacao.puzzle = 1;
			Pontuacao.numMusica = -1;
			Application.LoadLevel("Teclados_teste");
			}
		
		else if(proximo == 33)
			{
			Pontuacao.escolhaOK = false;
			Pontuacao.puzzle = 0;
			Pontuacao.numMusica = 3;
			Application.LoadLevel("Teclados_teste");
			}
		
		else if(proximo == 47)
			{
			Pontuacao.escolhaOK = false;
			Pontuacao.numMusica = 6;
			Application.LoadLevel("Teclados_teste");
			}
		
		else if(proximo == 55)
			{
			Pontuacao.escolhaOK = false;
			Pontuacao.numMusica = 5;
			Application.LoadLevel("Teclados_teste");
			}
			
		else
			Animacao();
		}
	
	
//animaçoes
	if(proximo == 8)
		{
		if(personagem[0].transform.position.y >= -4.59)
			personagem[0].transform.position.y -= 0.5;
		
		if(personagem[2].transform.position.y >= -0.97)
			personagem[2].transform.position.y -= 0.5;
			
		if(objetos[0].transform.position.y >= -8)
			objetos[0].transform.position.y -= 0.5;
		
		if(objetos[1].transform.position.y >= -8)
			objetos[1].transform.position.y -= 0.5;
		}
		
	
	if(proximo == 23)
		{
		if(personagem[0].transform.position.x >= 6)
			personagem[0].transform.position.x -= 0.5;
		
		if(personagem[1].transform.position.x >= 2.45)
			personagem[1].transform.position.x -= 0.5;
		}
	
	if(proximo == 37)
		if(personagem[1].transform.position.x >= -3)
			personagem[1].transform.position.x -= 0.1;
	
	if(proximo == 38)		
		if(personagem[4].transform.position.x >= 4.3)
			personagem[4].transform.position.x -= 0.2;
	
	if(proximo == 52)
		{
		if(personagem[1].transform.position.x >= -2)
			personagem[1].transform.position.x -= 0.1;
			
		if(personagem[4].transform.position.x >= 4.3)
			personagem[4].transform.position.x -= 0.2;
		}
	
	if(proximo == 59 || proximo == 64)
		if(planoPreto.renderer.material.color.a != 1)
			planoPreto.renderer.material.color.a += 0.3;
}

function Animacao () {		
		
	//entre primeira musica e puzzle
	if(proximo != 0 && proximo < 15)
		{
		if(proximo == 2)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[1];
		
		if(proximo == 3)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[2];
	
		if(proximo == 4)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[6];
	
		if(proximo == 8)
			{
			personagem[0].GetComponent(Animator).enabled = false; //para de rodar a animacao do pai flutuando
			objetos[0].GetComponent(Animator).enabled = false; //para de rodar a animacao do bau flutuando
			objetos[1].GetComponent(Animator).enabled = false; //para de rodar a animacao do bilhete flutuando
		
			yield WaitForSeconds(0.2);
		
			audio.PlayOneShot(efeitoSonoro[0]);
			}
	
		if(proximo == 10)
			{
			personagem[0].transform.Rotate (0, 180, -180);
			personagem[0].transform.position.y = -0.4361838;
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[1];
			personagem[2].renderer.enabled = false;
			}
	
		if(proximo == 11)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[2];
	
		if(proximo == 13)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
	
		if(proximo == 14)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[0];
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		if(PosMusicas.proximo == 8) //espera pra terminar o movimento dos personagens
			yield WaitForSeconds(1);
		
		btProximoON = true;
		}
		
	if(proximo == 15)
		{
		audio.PlayOneShot(efeitoSonoro[1]);
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[58], posicao, Quaternion.identity); //texto14-2
		
		yield WaitForSeconds(2);
		
		btProximoON = true;
		}
	
	//depois que o Tom toca teclas aleatorias
	if(proximo > 15 && proximo < 18)
		{
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo - 1], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	//entre puzzle e segunda musica
	if(proximo > 18 && proximo < 33)
		{
		
		if(proximo == 19)
			{
			personagem[0].transform.position = Vector2(6.24, -0.44);
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[1];
			}
	
		if(proximo == 20)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[7];
		
		if(proximo == 21)
			{
			audio.PlayOneShot(efeitoSonoro[2]);
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[2];
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[6];
			
			yield WaitForSeconds(2); //tempo de espera para som de grito e troca de cenario
			}
		
		if(proximo == 23)
			{
			cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[1];
			//cenario[0].transform.localScale = Vector2(5.6, 5.6);
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[0];
			personagem[0].transform.position = Vector2(16, -0.44);
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
			personagem[1].transform.position.x = 13;
			personagem[1].transform.Rotate (0, 180, 0);
			personagem[3].renderer.enabled = true;
			}
	
		if(proximo == 28)
			{
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[5];
			personagem[1].transform.Rotate (0, -180, 0);
			}
	
		if(proximo == 29)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[0];
		
		if(proximo == 30)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[1];
	
		if(proximo == 31)
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[2];
				
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo - 2], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		if(PosMusicas.proximo == 23) //espera pra terminar o movimento dos personagens
			yield WaitForSeconds(0.5);
		
		btProximoON = true;
		}
	
	//entre segunda e terceira musica
	if(proximo > 33 && proximo < 47)
		{
		
		if(proximo == 34)
			{
			cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[1];
			//cenario[0].transform.localScale = Vector2(5.6, 5.6);
			audio.PlayOneShot(efeitoSonoro[3]);
			personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[0];
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
			personagem[3].GetComponent(SpriteRenderer).sprite = spritesP[11];
			personagem[3].renderer.enabled = true;
			personagem[0].transform.position.x = 6;
			personagem[0].transform.position.y = -0.43;
			personagem[1].transform.position.x = 2.45;
			personagem[1].transform.Rotate (0, 180, 0);
			}
		
		if(proximo == 35)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[5];
	
		if(proximo == 36)
			{
			audio.PlayOneShot(efeitoSonoro[3]);
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
			
			yield WaitForSeconds(2); //tempo de espera para soltar o texto
			}	
	
		if(proximo == 40)
			{
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[6];
			personagem[1].transform.Rotate (0, -180, 0);
			}
	
		if(proximo == 42)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
	
		if(proximo == 45)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[5];			
			
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo - 3], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		if(PosMusicas.proximo == 37 || PosMusicas.proximo == 38) //espera pra terminar o movimento dos personagens
			yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	//entre terceira e quarta musica
	if(proximo > 47 && proximo < 55)
		{
		
		if(proximo == 48)
			{
			cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[2];
			//cenario[0].transform.localScale = Vector2(2.8, 2.8);
			personagem[0].renderer.enabled = false;
			personagem[1].transform.position.x = -3;
			personagem[3].renderer.enabled = false;
			personagem[4].transform.position.x = 4.3;
		
			audio.Stop();
		
			yield WaitForSeconds (0.1);
		
			audio.clip = musicas[1];
			audio.Play();
			audio.loop = true;
			}
		
		if(proximo == 53)
			{
			personagem[1].transform.rotation.y = 0;
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[10];
			}
		
		if(proximo == 54)
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo - 4], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	//entre quarta e quinta musica
	if(proximo > 55 && proximo < 59)
		{
		
		if(proximo == 56)
			{
			cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[3];
			personagem[0].renderer.enabled = false;
			personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[10];
			personagem[4].transform.position.x = 4.3;
		
			audio.Stop();
		
			yield WaitForSeconds (0.1);
		
			audio.clip = musicas[2];
			audio.Play();
			audio.loop = true;
			}
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo - 5], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	if(proximo == 59)
		{
		cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[4];
		personagem[1].renderer.enabled = false;
		personagem[4].transform.position.x = 20; //sai da tela
		
		audio.Stop();
		
		yield WaitForSeconds (0.1);
		
		audio.clip = musicas[3];
		audio.Play();
		audio.loop = true;
		
		yield WaitForSeconds (1);
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[59], posicao, Quaternion.identity);
		
		yield WaitForSeconds (1.5);
		
		audio.PlayOneShot(efeitoSonoro[4]); //carro chegando
		
		yield WaitForSeconds(3);
		
		proximo = 60;
		planoPreto.renderer.material.color.a = 0;
		}
	
	//antes da cena da mafia
	if(proximo > 59 && proximo < 64)
		{
		
		if(proximo == 62)
			audio.PlayOneShot(efeitoSonoro[5]); //carro saindo
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[proximo - 6], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	if(proximo == 64)
		{
		btProximoON = false;
		posicao = Vector3(0.13, 0.30, 0);
		Instantiate(continua, posicao, Quaternion.identity);
		
		yield WaitForSeconds(4);
		
		Application.LoadLevel("Menu");
		}
	
	
	//telas extras que nao se encaixaram na sequencia normal (inseridas depois)
	//numero do valor "proximo" * 10 (para diferenciar da sequencia normal)
	
	if(proximo == 370)
		{
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[61], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	if(proximo == 371)
		{
		planoPreto.renderer.material.color.a = 1;
		cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[2];
		//cenario[0].transform.localScale = Vector2(2.8, 2.8);
		personagem[0].renderer.enabled = false;
		personagem[1].transform.position.x = 13;
		personagem[3].renderer.enabled = false;
		
		audio.Stop();
		
		yield WaitForSeconds (0.1);
		
		audio.clip = musicas[1];
		audio.Play();
		audio.loop = true;
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[62], posicao, Quaternion.identity);
		
		yield WaitForSeconds(3);
		
		planoPreto.renderer.material.color.a = 0;
		proximo = 37;
		chamaAnimacao = true;
		}
	
	if(proximo == 520)
		{
		planoPreto.renderer.material.color.a = 1;
		cenario[0].GetComponent(SpriteRenderer).sprite = spritesC[3];
		//cenario[0].transform.localScale = Vector2(2.8, 2.8);
		personagem[1].transform.position.x = 13;
		personagem[1].transform.rotation.y = 180;
		personagem[4].transform.position.x = 20;
		
		audio.Stop();
		
		yield WaitForSeconds (0.1);
		
		audio.clip = musicas[2];
		audio.Play();
		audio.loop = true;
		
		posicao = Vector3(0.037, 0.256, 0);
		Instantiate(texto[60], posicao, Quaternion.identity);
		
		yield WaitForSeconds(3);
		
		planoPreto.renderer.material.color.a = 0;
		proximo = 52;
		chamaAnimacao = true;
		}
		
}