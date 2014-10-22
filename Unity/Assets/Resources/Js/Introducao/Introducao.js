#pragma strict
//animacao da tela de introducao


@script RequireComponent(AudioSource)

var posicao : Vector3; //posicao do Instantiate
var texto : GameObject[]; //textos das falas dos personagens
var baseTexto : GameObject; //base dos textos das falas
var personagem : GameObject[]; //personagens
var logo : GameObject; //logo do musikinesia
var cenario : GameObject[]; //cenarios da introducao
var planoPreto : GameObject; //plano preto 70%

var spritesP : Sprite; //sprite do Isaac com a mao levantada

var sons : AudioClip[];
var volume : float;
var pausar : boolean;

var btProximo : boolean;
var btAvancar : GameObject;
static var proximo : int; //acessada em botoesIntro.js e Introducao.js
static var chamaAnimacao : boolean;

var musica : AudioClip[];
var volMus0 : float;
var volMus1 : float;
var fadeIn : boolean;
var fadeOut : boolean;

//pause
var pauseMenu : GameObject; //menu de pause
static var isPause : boolean; //define se esta pausado

function Start () {
	
	baseTexto.GetComponent(Animator).enabled = true;
	Animacao();
	
	pauseMenu.transform.position.y = 20;
	
}

function Update () {

	//pause
	if(Input.GetKeyDown(KeyCode.Escape) || botoesPauseIntro.menuVoltar) //aperta ESC
		{
		isPause = !isPause; //troca entre pausado e despausado
		AudioListener.pause = !AudioListener.pause; //pausa e despausa o audio
		botoesPauseIntro.menuVoltar = false;  //desativa a variavel
		if(isPause)
			{
			Time.timeScale = 0; //congela toda a movimentacao
			pauseMenu.transform.position.y = 0; //desce o menu de pause para o centro da tela
			} else	{
					Time.timeScale = 1; //tempo volta ao normal
					pauseMenu.transform.position.y = 20; //menu de pause volta a se esconder acima do quadro
					botoesPauseIntro.menuVoltar = false; //desativa a booleana que tira o pause
					}
		}
	
	//audio.volume = volume;
	
	if(chamaAnimacao)
		{
		Animacao();
		chamaAnimacao = false;
		}
	
	if(fadeIn)
		if(volMus1 < 0.5)
			{
			volMus1 += 0.2 * Time.deltaTime;
			volume = volMus1;
			audio.volume = volMus1;
			}
		
	if(fadeOut)
		if(volMus0 > 0)
			{
			audio.volume = volMus0;
			volume = volMus0;
			volMus0 -= 0.4 * Time.deltaTime;
			}
		
	if(btProximo)
		btAvancar.transform.position.y = -4.3;
	
	else
		btAvancar.transform.position.y = -8;


	if(proximo == 0) //|| proximo == 2
		{
		if(personagem[0].renderer.material.color.a != 1)
			personagem[0].renderer.material.color.a += 0.03;
		
		if(cenario[4].renderer.material.color.a != 1)
			cenario[4].renderer.material.color.a += 0.03;
		}
/*	
	if(proximo == 1 || proximo == 4)
		{		
		if(personagem[0].renderer.material.color.a > 0)
			personagem[0].renderer.material.color.a -= 0.8*Time.deltaTime;
			
		if(cenario[4].renderer.material.color.a > 0)
			cenario[4].renderer.material.color.a -= 0.8*Time.deltaTime;
		}*/
	
	if(proximo == 10)
		if(logo.renderer.material.color.a != 1)
			logo.renderer.material.color.a += 0.5*Time.deltaTime;
							
	if(proximo == 11)
		if(cenario[0].renderer.material.color.a != 1)
			cenario[0].renderer.material.color.a += 0.4*Time.deltaTime;
	
	if(proximo == 12)
		{
		if(cenario[0].renderer.material.color.a > 0)
			cenario[0].renderer.material.color.a -= 0.4*Time.deltaTime;
		
		if(cenario[1].renderer.material.color.a != 1)
			cenario[1].renderer.material.color.a += 0.4*Time.deltaTime;	
		}
	
	if(proximo == 13)
		if(personagem[1].transform.position.x < -3.6)
			personagem[1].transform.position.x += 4*Time.deltaTime;
			
	if(proximo == 17)
		{
		if(cenario[3].renderer.material.color.a != 1)
			cenario[3].renderer.material.color.a += 0.6*Time.deltaTime;
		
		if(cenario[3].transform.position.y < 0.2)
			cenario[3].transform.position.y += 3*Time.deltaTime;
		}
	
	if(proximo == 18)
		if(personagem[3].transform.position.x > 3.6)
			personagem[3].transform.position.x -= 4*Time.deltaTime;

}

function Animacao() {

	if(proximo == 0)
		{
		//volume = 0.5;
		pausar = false;
		btProximo = false;
		audio.clip = musica[0];
		fadeIn = false;
		fadeOut = false;
	
		personagem[0].renderer.material.color.a = 0;
		logo.renderer.material.color.a = 0;
		cenario[0].renderer.material.color.a = 0;
		cenario[1].renderer.material.color.a = 0;
		cenario[2].renderer.enabled = false;
		cenario[3].renderer.material.color.a = 0;
		cenario[4].renderer.material.color.a = 0;
		cenario[4].GetComponent(Animator).enabled = false;
		planoPreto.renderer.material.color.a = 0;
		personagem[2].renderer.enabled = false;
		
		posicao = Vector3(0, -3.22, 0);
		Instantiate(baseTexto, posicao, Quaternion.identity);
		baseTexto.transform.localScale.x = 1;
		
		yield WaitForSeconds(0.5);
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[0], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 1;
		}

	if(proximo == 1)
		{
		btProximo = false;
		//personagem[0].renderer.material.color.a = 0;
		//cenario[4].renderer.material.color.a = 0;
	
		audio.PlayOneShot(sons[5]);
		
		yield WaitForSeconds(0.5);
		
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[1], posicao, Quaternion.identity);
	
		yield WaitForSeconds(3);
	
		btProximo = true; //proximo = 2;
		}
	
	if(proximo == 2)
		{			
		btProximo = false;	
		posicao = Vector3(0, -3.22, 0);
		Instantiate(baseTexto, posicao, Quaternion.identity);
		
		yield WaitForSeconds(0.5);
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[2], posicao, Quaternion.identity);

		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 3;
		}
	
	if(proximo == 3)
		{
		btProximo = false;
		cenario[4].GetComponent(Animator).enabled = true;
		audio.PlayOneShot(sons[6]);
		
		yield WaitForSeconds(1);
		
		personagem[0].GetComponent(SpriteRenderer).sprite = spritesP;
		btProximo = false;
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[3], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
		audio.PlayOneShot(sons[7]);
	
		btProximo = true; //proximo = 4;
		}
	
	if(proximo == 4)
		{
		btProximo = false;
		personagem[0].renderer.material.color.a = 0;
		cenario[4].renderer.material.color.a = 0;
		cenario[4].GetComponent(Animator).enabled = false;
		
		yield WaitForSeconds(2);
		proximo = 10;
		
		fadeOut = true;
		volMus0 = 0.5;
	
		yield WaitForSeconds(3);
		
		audio.clip = musica[1];
		fadeOut = false;
		fadeIn = true;
		volMus1 = 0;
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[4], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
		
		audio.Play();
	
		btProximo = true; //proximo = 11;
		}
	
	if(proximo == 11)
		{
		btProximo = false;
		cenario[0].GetComponent(Animator).enabled = true;
		fadeIn = false;
	
		yield WaitForSeconds(4);
	
		proximo = 12;
		}
	
	if(proximo == 12)
		{
		yield WaitForSeconds(3);
	
		posicao = Vector3(0, -3.22, 0);
		Instantiate(baseTexto, posicao, Quaternion.identity);
	
		yield WaitForSeconds(2);
	
		proximo = 13;
		}
	
	if(proximo == 13)
		{
		volume = 0.5;
	
		audio.PlayOneShot(sons[0]);
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[5], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 14;
		}
	
	if(proximo == 14)
		{
		btProximo = false;
		
		audio.PlayOneShot(sons[1]);
	
		personagem[1].renderer.enabled = false;
		cenario[2].renderer.enabled = true;
		cenario[1].transform.position.y = 4.022;
		cenario[1].transform.localScale.x = 5;
		cenario[1].transform.localScale.y = 5;
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 15;
		}
	
	if(proximo == 15)
		{
		btProximo = false;
		
		personagem[1].renderer.enabled = true;
		cenario[1].transform.position.y = 0;
		cenario[1].transform.localScale.x = 2.8;
		cenario[1].transform.localScale.y = 2.8;
	
		posicao = Vector3(0, -3.22, 0);
		Instantiate(baseTexto, posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[6], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 16;
		}
		
	if(proximo == 16)
		{
		btProximo = false;
	
		audio.PlayOneShot(sons[2]);
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[7], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 17;
		}
		
	if(proximo == 17)
		{
		btProximo = false;
	
		audio.PlayOneShot(sons[3]);
	
		planoPreto.renderer.material.color.a = 0.6;
	
		yield WaitForSeconds(1);
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[8], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
		
		btProximo = true; //proximo = 18;
		}
	
	if(proximo == 18)
		{
		btProximo = false;
		
		audio.PlayOneShot(sons[4]);
	
		planoPreto.renderer.material.color.a = 0;
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[9], posicao, Quaternion.identity);
	
		personagem[2].renderer.enabled = true;
	
		yield WaitForSeconds(3);
	
		btProximo = true; //proximo = 19;
		}
	
	if(proximo == 19)
		{
		btProximo = false;
	
		Instantiate(texto[10], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 20;
		}
	
	if(proximo == 20)
		{
		btProximo = false;
		
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[11], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 21;
		}
	
	if(proximo == 21)
		{
		btProximo = false;
	
		Instantiate(texto[12], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 22;
		}
	
	if(proximo == 22)
		{
		btProximo = false;
		
		Instantiate(texto[13], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 23;
		}
	
	if(proximo == 23)
		{
		btProximo = false;
	
		Instantiate(texto[14], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 24;
		}
	
	if(proximo == 24)
		{
		btProximo = false;
	
		Instantiate(texto[15], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
	
		btProximo = true; //proximo = 25;
		}
		
	if(proximo == 25)
		{
		btProximo = false;
		
		Application.LoadLevel("Tutorial");
		}
			
	if(proximo == 26)
		{
		volume = 0.5;
		pausar = false;
		btProximo = false;
		audio.clip = musica[1];
		fadeIn = false;
		fadeOut = false;
		audio.Play();
	
		personagem[0].renderer.material.color.a = 0;
		logo.renderer.material.color.a = 0;
		cenario[0].renderer.material.color.a = 0;
		cenario[1].renderer.material.color.a = 1;
		cenario[2].renderer.enabled = false;
		cenario[3].renderer.material.color.a = 0;
		cenario[4].renderer.material.color.a = 0;
		planoPreto.renderer.material.color.a = 0;
		personagem[2].renderer.enabled = true;
		personagem[3].transform.position.x = 5;
		
		posicao = Vector3(0, -3.22, 0);
		Instantiate(baseTexto, posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[16], posicao, Quaternion.identity);
	
		yield WaitForSeconds(1);
		
		btProximo = true; //proximo = 27;
		}
	
	if(proximo == 27)
		{
		btProximo = false;
		
		Application.LoadLevel("Suburbio");
		}

}
