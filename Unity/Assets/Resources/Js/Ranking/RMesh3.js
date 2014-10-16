#pragma strict

function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;


	for (var i: int = 1; i < 6; i++)
		if(GetComponent(MeshRenderer).name == "M1hs" + i.ToString())
			myMesh.text = i.ToString() + ": " + PlayerPrefs.GetInt("HScore" + i.ToString()).ToString();
		if(GetComponent(MeshRenderer).name == "M2hs" + i.ToString())
			myMesh.text = i.ToString() + ": " + PlayerPrefs.GetInt("HScore" + i.ToString()).ToString();
		if(GetComponent(MeshRenderer).name == "M3hs" + i.ToString())
			myMesh.text = i.ToString() + ": " + PlayerPrefs.GetInt("HScore" + i.ToString()).ToString();
}

	