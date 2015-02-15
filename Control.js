//var isIdle : boolean = true; // состояние бездействия
//var isRun : boolean = false; // состояние бега
//var isSit : boolean = false; // состояние присяда
//var isAttack : boolean = false; // состояние атаки
//var isJump : boolean = false; // состояние прыжка

internal var animator;
var direction : float = 0f; // направление
var speed : float =  0f; // скорость

// Объект состояний
var lastState : String = "isIdle";
var currentState : String = "isIdle";

public var States = {
	"isIdle" : true,
	"isRun" : false,
	"isSit" : false,
	"isAttack" : false,
	"isJump" : false
};

function setNewState(newState : String) {
	lastState = currentState;
	currentState = newState;
	
	States[lastState] = false;
	States[currentState] = true;
}



var animPropName1 : String = ""; // Название свойства для анимации 1
var animPropName2 : String = ""; // Названание свойства для анимации 2


function Start () {
	Debug.Log("start script");
	animator = GetComponent(Animator);
	Debug.Log(animator);
}

function Update () {
	var newState : String = "";

	// SIT
	if( Input.GetKeyDown(KeyCode.LeftControl) ) {
		if(States["isSit"]) { 
			newState = lastState;
			animator.SetBool("isSit", false);
		} else {
			newState = "isSit";
			animator.SetBool("isSit", true);
		}
		setNewState(newState);
	}

	// RUN
	if( Input.GetKeyUp(KeyCode.LeftShift) ) {
		newState = lastState;
		animator.SetBool("isRun", false);
		setNewState(newState);
	}
	if( Input.GetKeyDown(KeyCode.LeftShift) ) {
		newState = "isRun";
		animator.SetBool("isRun", true);
		setNewState(newState);
	}
	
	// JUMP
	if( Input.GetKeyDown( KeyCode.Space ) {
		newState = "isJump";
		animator.SetBool("isJump", true);
		setNewState(newState);
	}
	if( Input.GetKeyUp( KeyCode.Space ) {
		newState = "isIdle";
		animator.SetBool("isJump", false);
		setNewState(newState);
	}
}

function FixedUpdate () {
	Debug.Log("Текущее состояние: " + currentState + ", предыдущее состояние: " + lastState);
}