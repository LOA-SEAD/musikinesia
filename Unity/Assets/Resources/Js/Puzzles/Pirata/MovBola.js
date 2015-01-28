#pragma strict

private var posicaoX : float;

var callFunction : int; //0 none; //1 Up; //2 Down;

var velBola : int;

static var novaBola : boolean;

function Start () {

}

function Update ()
{	
	if(Input.GetKeyDown("z"))
		velBola = 1;
	
	if(Input.GetKeyDown("x"))
		velBola = 3;
	
	if(Input.GetKeyDown("c"))
		velBola = 5;

    transform.position.x += Time.deltaTime * velBola;
    
    //transform.position.y -= Time.deltaTime * 0.7; //gravidade
    
    if(callFunction == 0)
    	{
    	if(Input.GetKeyDown(KeyCode.Q))
    		callFunction = 1;
   	
   		if(Input.GetKeyDown(KeyCode.E))
    		callFunction = 2;
    	}
    	
    if(callFunction == 1)
    	PositionUp();
    
    if(callFunction == 2)
    	PositionDown();	
}

function PositionUp()
{
	transform.Translate(Vector3.up * Time.deltaTime * 7);
	
	yield WaitForSeconds (0.2);
	
	callFunction = 0;	
}

function PositionDown()
{
	transform.Translate(Vector3.down * Time.deltaTime * 7);
	
	yield WaitForSeconds (0.2);
	
	callFunction = 0;
}

function OnTriggerEnter2D (other: Collider2D) {

	print("entrou no collider");
	
	Destroy(gameObject);
	Destroy(other.gameObject);
	novaBola = true;
		
}