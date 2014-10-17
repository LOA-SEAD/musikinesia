using UnityEngine;
using System.Collections;

public class ChecaPuzzle : MonoBehaviour {


	public Transform quadro;
	bool ok = false;

	void Checador()
	{
		if (Mathf.Abs(transform.position.y - quadro.position.y) <= 0.35 && Mathf.Abs(transform.position.x - quadro.position.x) <= 0.33
		    && (quadro.rotation.z <= 0.021 && quadro.rotation.z >= -0.021) )
						ok = true;
				else {
			ok = false;
				}
		}
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		Checador ();
		if (ok == true)
						Debug.Log ("OK!");
		else {
			Debug.Log ("Not OK!");
				}
		//Debug.Log (quadroTeste.rotation.z);
		//Debug.Log (quadroTeste.position.x);
		//Debug.Log (quadroTeste.position.y);
		//Debug.Log (transform.position.y - quadroTeste.position.y);
		//Debug.Log (transform.position.x - quadroTeste.position.x);
	}
}
