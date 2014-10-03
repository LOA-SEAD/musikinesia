#pragma strict
//script ativado em Pontuacao.js

var quadro : GameObject;
static var quadroOK : boolean; //acessado em botaoAvancar.js e em Teclas.js. Zerada em Pontuacao.js
var btAvancar : GameObject;
var AvancarOK : boolean; //define que o botao avançar ta na tela

var falaPai : GameObject; //sprite do balao e do pai
var texto : GameObject[]; //falas do pai
var posicao : Vector3; //posicao de instantiate

static var chamaFuncao : boolean; //acessada em botaoAvancar.js e em Teclas.js

static var proximo : int; //define a etapa do puzzle e dos textos; acessada em botaoAvancar.js e Teclas.js

function Start () {

	falaPai.renderer.enabled = true;
	posicao = Vector3(0.23, 0.95, 0);
	Instantiate(texto[0], posicao, Quaternion.identity);
	
	yield WaitForSeconds(2);
			
	AvancarOK = true;

}

function Update () {

	if(Mathf.Abs(transform.position.y - quadro.transform.position.y) <= 0.35 && Mathf.Abs(transform.position.x - quadro.transform.position.x) <= 0.33 && (quadro.transform.rotation.z <= 0.021 && quadro.transform.rotation.z >= -0.021) )
		quadroOK = true;
	
	if(quadroOK)
		{
		Teclas.etapaPuzzle = 7;
		AvancarOK = true;
		}
	else
		print("Ainda fora");
	
	if(chamaFuncao)
		{
		TextoPai();
		chamaFuncao = false;
		}
	
	if(AvancarOK)
		btAvancar.transform.position.y = -18; //aparece na tela
		else
			btAvancar.transform.position.y = -40; //sai a tela
	
}

function TextoPai() {

	//ajuste dos valores da var etapaPuzzle pra liberar as teclas do teclado
	if(proximo == 1)
		Teclas.etapaPuzzle = 1;
	
	else if(proximo == 3)
		Teclas.etapaPuzzle = 2;
	
	else if(proximo == 6)
		Teclas.etapaPuzzle = 3;
	
	else if(proximo == 10)
		Teclas.etapaPuzzle = 4;
	
	else if(proximo == 13)
		Teclas.etapaPuzzle = 5;
	
	else if(proximo == 16)
		Teclas.etapaPuzzle = 6;
	
	else
		Teclas.etapaPuzzle = -1;
	
	//texto
	AvancarOK = false;
	posicao = Vector3(0.23, 0.95, 0); //instantiate do texto
	Instantiate(texto[proximo], posicao, Quaternion.identity);
			
	yield WaitForSeconds(2);
	
	if(proximo != 1 &&	proximo != 3 && proximo != 6 && proximo != 10 && proximo != 13 && proximo != 16)
		AvancarOK = true;
	
	
}