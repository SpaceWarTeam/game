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
	if( Input.GetKeyDown(KeyCode.LeftControl) ) {
		newState = (States["isSit"]) ? lastState : "isSit";
		setNewState(newState);
		animator.setBool(lastState, false);
	}
	if( Input.GetKeyDown(KeyCode.Space) ) {
		newState = (States["isJump"]) ? lastState : "isJump";
		setNewState(newState);
		animator.setBool(lastState, false);
	}
	if( Input.GetMouseButtonDown(2) ) {
		newState = (States["isAttack"]) ? "isIdle" : "isAttack";
		setNewState(newState);
		animator.setBool(lastState, false);
	}
	if( Input.GetKeyDown(KeyCode.LeftShift) ) {
		newState = (States["isRun"]) ? "isIdle" : "isRun";
		setNewState(newState);
		aanimator.setBool(lastState, false);
	}
}

function FixedUpdate () {
	Debug.Log("Текущее состояние: " + currentState + ", предыдущее состояние: " + lastState);
}