#pragma strict

private var posicaoX : float;

var callFunction : int; //0 none; //1 Up; //2 Down;

static var velBola : int;

static var novaBola : boolean;
static var somImpacto : boolean;


function Start () {

	rigidbody2D.gravityScale = 0.3;

}

function Update ()
{	
/*
	if(transform.position.y > 10 || transform.position.y < -10 || transform.position.x > 10)
		{
		Destroy(gameObject);
		Destroy(GameObject.FindWithTag("Alvo"));
		novaBola = true;
		}*/

    transform.position.x += Time.deltaTime * velBola;
    
    //transform.position.y -= Time.deltaTime * 0.7; //gravidade
    
    if(callFunction == 0)
    	{
    	if(PuzzlePirataTeclas.sustenido)
    		{
    		callFunction = 1;
    		PuzzlePirataTeclas.sustenido = false;
    		}
   	
   		if(PuzzlePirataTeclas.bemol)
   			{
    		callFunction = 2;
    		PuzzlePirataTeclas.bemol = false;
    		}
    	}
    	
    if(callFunction == 1)
    	PositionUp();
    
    if(callFunction == 2)
    	PositionDown();	
}

function PositionUp()
{	
	rigidbody2D.gravityScale = -0.45;
	
	yield WaitForSeconds (0.2);
	
	callFunction = 0;	
}

function PositionDown()
{	
	rigidbody2D.gravityScale = 0.45;
	
	yield WaitForSeconds (0.2);
	
	callFunction = 0;
}

function OnTriggerEnter2D (other: Collider2D) {

	print("entrou no collider");
	
	if(other.tag == "Alvo")
		{
		somImpacto = true;
		gameObject.SetActive(false);
		other.gameObject.SetActive(false);
		novaBola = true;
		PuzzlePirata.pontos += 10;
		PuzzlePirata.chances ++;
		}
		
}

function OnTriggerExit2D (other: Collider2D) {

	print("saiu do collider");
	
	if(other.name == "ColliderFora")
		{
		gameObject.SetActive(false);
		GameObject.FindWithTag("Alvo").SetActive(false);
		novaBola = true;
		PuzzlePirata.pontos -= 6;
		PuzzlePirata.chances ++;
		}
		
}