#pragma strict

var xFactor : float;
var yFactor : float;
var ownFactor : float;
var tempPosition : Vector3;

function Start () {

}

function Update () {
	
	tempPosition.x = ((Mathf.PerlinNoise(Time.time * 0.5f * ownFactor, 0.0f)) - 0.5f) * xFactor * ownFactor;
	tempPosition.y = ((Mathf.PerlinNoise(0.0f, Time.time * 1 * ownFactor)) - 0.3f) * yFactor * ownFactor;
	tempPosition.z = 0;

	//tempPosition.z = (tempPosition.x + tempPosition.y) * 0.5f;
	transform.localPosition = tempPosition;
}