var number = document.querySelectorAll('.number');
var inp = document.querySelector('.calculator__inp');
var sign  = document.querySelectorAll('.sign');
var result = document.querySelector('.result');
var toggleSign = document.querySelector('.toggleSign'); 
var percent = document.querySelector('.percent');
var clear = document.querySelector(".clear"); 

for(i=0; i<number.length; i++){
	number[i].addEventListener('click', insertValue);
}

for(i=0;i<sign.length;i++){
	sign[i].addEventListener('click', insertValueSign);
}

function insertValue() {//ввод чисел
	inp.value += this.innerText;
}

function insertValueSign(){//ввод знаков
	if (!(isNaN(inp.value[inp.value.length - 1]))) {
		inp.value += this.innerText;
	}
}

clear.onclick = function(e) {//очищает инпут
	inp.value = "";
};

result.onclick = function(e) {//результат
	inp.value = eval(inp.value);
}

result.addEventListener('click',getResult);

function getResult(){
	inp.value = eval(inp.value)
}	

document.body.addEventListener('keydown', (event) => {
	if (event.keyCode === 32 || event.keyCode === 8) {
		clearAll();
	}
});

toggleSign.addEventListener('click',function(e){//  +/-
	toggleSign = inp.value * (-1);
	inp.value = eval(toggleSign);
});

percent.addEventListener('click',function(e){//  %
	percent = inp.value / 100;
	inp.value = eval(percent);
});

document.body.addEventListener('keydown',function(e){ //ентер с клавиатуры
	if(e.keyCode == 13){
			getResult();	
	}
});