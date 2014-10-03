using UnityEngine;
using System.Collections;

//script dentro de cada elemento que usa GUI
//ajusta a escala do elemento de acordo com a resoluçao
//pequei na internet


public class guiScale : MonoBehaviour {
	
	// === GUI SCALER ====================
	// Aaron Booth (www.as-int.com)
	//
	// Use this to resize controls based on screen size.
	//
	// It will use the refWidth Property as a starting point.
	// Multiplies pixelOffsets (and fontsize for guiText) relatively.
	//
	// The Resize is done during Awake() and then the component is then
	// destroyed to conserve memory/processes.
	// Just attach this script to GUI elements.
	
	
	public float refWidth = 800f;
	public float minMultiply = 0.5f;
	public float maxMultiply = 2f;
	
	float rel = 1f;
	
	// Use this for initialization
	void Awake () {
		if (Screen.width!=refWidth) {
			rel = Screen.width/refWidth;
			if(rel > maxMultiply) rel=maxMultiply;
			if(this.guiTexture) guiTextureResize(this.guiTexture);
			if(this.guiText) guiTextResize(this.guiText);
		}
	}
	void Start(){
		Destroy (this);
	}
	void guiTextureResize(GUITexture tex){
		Rect trect = tex.pixelInset;
		Debug.Log ("RESIZE: "+rel.ToString());
		tex.pixelInset = new Rect(Mathf.Round(trect.x*rel), Mathf.Round(trect.y*rel),Mathf.Round(trect.width*rel), Mathf.Round(trect.height*rel));
	}
	void guiTextResize(GUIText text){
		int fsize = text.fontSize;
		Vector2 foff = text.pixelOffset;
		text.fontSize = (int)(fsize*rel);
		text.pixelOffset = new Vector2(Mathf.Round(foff.x*rel), Mathf.Round(foff.y*rel));
	}
	
}
