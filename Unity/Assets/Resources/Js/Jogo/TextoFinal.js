#pragma strict
//script inserido nos textos do jogo
//simula alguem digitando
//peguei da internet

var currentPosition : int = 0;
var Delay : float = 0.1;  // 10 characters per sec.
var additionalLines : String[];
private var Text : String;
 
function WriteText(aText : String) {
    guiText.text = "";
    currentPosition = 0;
    //Text = aText;
}
 
function Start(){
	
	if(gameObject.tag == "bt1")
		{
		var Text1 : String = "Acerto: " + PorcentagemAcerto.porcentagem.ToString() + "%" + " (" + PorcentagemAcerto.acertos.ToString() + " / " + PorcentagemAcerto.totalNotas.ToString() + ")";
		Text = Text1;
		}
	
	if(gameObject.tag == "bt2")
		{
		var Text2 : String = "Pontos: " + Pontuacao.pontuacao.ToString();
		Text = Text2;
		}
	
	if(gameObject.tag == "bt3")
		{
		var Text3 : String = "Vidas: " + ChecarTrigger.vida.ToString();
		Text = Text3;
		}
	
	if(gameObject.tag == "bt4")
		{
		var Text4 : String = "Final: " + Pontuacao.pontuacaoFinal.ToString();
		Text = Text4;
		}
	
    	for ( var S : String in additionalLines )
        	Text += "\n" + S;
    	while (true){
        	if (currentPosition < Text.Length)
            	guiText.text += Text[currentPosition++];
        	yield WaitForSeconds (Delay);
    				}

}

function Update(){

	if(!Pontuacao.travaTeclas)
		Destroy(gameObject);

}

@script RequireComponent(GUIText)