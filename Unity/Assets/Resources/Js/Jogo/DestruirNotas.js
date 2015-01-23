#pragma strict
//script inserido nas notas das musicas para destrui-las quando ultrapassar a zona de pontuacao



function Start () {

}

function Update () {

	//destruir as notas que nao foram acertadas
	if(transform.position.x <= -10)
		{
		Destroy(gameObject); //destroi a nota
		PorcentagemAcerto.totalNotas++; //soma 1 nota ao total de notas da musica
		
		if(!Pontuacao.treino)
			{
			ChecarTrigger.pontos -= 6; //subtrai 6 pontos da pontuacao geral
			ChecarTrigger.vida--; //perde uma vida quando a nota passa
			ChecarTrigger.combo = 0; //zera o combo
			Pontuacao.multiplicador = 1; //volta pro valor inicial
			}
		}
	
}
