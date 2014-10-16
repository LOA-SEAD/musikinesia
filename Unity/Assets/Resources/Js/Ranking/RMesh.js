#pragma strict

function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;
	if (GetComponent(MeshRenderer).name == "M1hs1")
		myMesh.text = "1: " + PlayerPrefs.GetInt("HScore1").ToString();
	if (GetComponent(MeshRenderer).name == "M1hs2")
		myMesh.text = "2: " + PlayerPrefs.GetInt("HScore1-2").ToString();
	if (GetComponent(MeshRenderer).name == "M1hs3")
		myMesh.text = "3: " + PlayerPrefs.GetInt("HScore1-3").ToString();
	if (GetComponent(MeshRenderer).name == "M1hs4")
		myMesh.text = "4: " + PlayerPrefs.GetInt("HScore1-4").ToString();
	if (GetComponent(MeshRenderer).name == "M1hs5")
		myMesh.text = "5: " + PlayerPrefs.GetInt("HScore1-5").ToString();
		
		
	if (GetComponent(MeshRenderer).name == "M2hs1")
		myMesh.text = "1: " + PlayerPrefs.GetInt("HScore2").ToString();
	if (GetComponent(MeshRenderer).name == "M2hs2")
		myMesh.text = "2: " + PlayerPrefs.GetInt("HScore2-2").ToString();
	if (GetComponent(MeshRenderer).name == "M2hs3")
		myMesh.text = "3: " + PlayerPrefs.GetInt("HScore2-3").ToString();
	if (GetComponent(MeshRenderer).name == "M2hs4")
		myMesh.text = "4: " + PlayerPrefs.GetInt("HScore2-4").ToString();
	if (GetComponent(MeshRenderer).name == "M2hs5")
		myMesh.text = "5: " + PlayerPrefs.GetInt("HScore2-5").ToString();
		
	if (GetComponent(MeshRenderer).name == "M3hs1")
		myMesh.text = "1: " + PlayerPrefs.GetInt("HScore3").ToString();
	if (GetComponent(MeshRenderer).name == "M3hs2")
		myMesh.text = "2: " + PlayerPrefs.GetInt("HScore3-2").ToString();
	if (GetComponent(MeshRenderer).name == "M3hs3")
		myMesh.text = "3: " + PlayerPrefs.GetInt("HScore3-3").ToString();
	if (GetComponent(MeshRenderer).name == "M3hs4")
		myMesh.text = "4: " + PlayerPrefs.GetInt("HScore3-4").ToString();
	if (GetComponent(MeshRenderer).name == "M3hs5")
		myMesh.text = "5: " + PlayerPrefs.GetInt("HScore3-5").ToString();
}

	