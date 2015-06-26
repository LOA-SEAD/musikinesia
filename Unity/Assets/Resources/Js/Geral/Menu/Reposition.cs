using UnityEngine;
using System.Collections;

public class Reposition : MonoBehaviour {
	
	GameObject camera1;
	Vector3 p, tempPosition;
	public int positionX;
	
	// Use this for initialization
	void Start () {

		camera1 = GameObject.FindWithTag("MainCamera");

		if(camera1 != null) {
			AdjustObjectPosition();
		}
		
	}
	
	#if UNITY_EDITOR
	// Update is called once per frame
	void Update () {

		if(camera1 != null) {
			AdjustObjectPosition();
		}

		else {
			camera1 = GameObject.FindWithTag("MainCamera");
		}
	
	}
	#endif
	
	void AdjustObjectPosition() {

		if(camera1 != null) {
			print ("camera ok");
		}
		
		tempPosition.x = Screen.width * 0.05f + (positionX * Screen.width * 0.01f);
		tempPosition.y = gameObject.transform.position.y;
		tempPosition.z = gameObject.transform.position.z;
		
		p = camera1.GetComponent<Camera>().ScreenToWorldPoint(tempPosition);
		
		p.y = gameObject.transform.localPosition.y;
		p.z = gameObject.transform.localPosition.z;
		
		gameObject.transform.localPosition = p;
		
	}
	
	
}