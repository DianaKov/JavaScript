const result = document.querySelector('#result');
	const questionNumber = document.querySelectorAll('.test-number');
	const sendBtn = document.querySelector('#sendBtn');
	let question = document.querySelectorAll('input[type="radio"]');
	let mark = 0;
	test.addEventListener('click',function(e){
		console.log(e)
	})

	for(i=0;i<questionNumber.length;i++){
		questionNumber[i].innerHTML = `<b>${i+1}.</b> `
	}

	sendBtn.addEventListener('click',getResult);

	function getResult(e){
		e.preventDefault();
		for(i=0;i<question.length;i++){
			if(question[i].checked == true && question[i].value == 'true'){
				++mark
				result.innerHTML = `Результат:${mark}`;
				question[i].parentElement.classList.toggle('bgGreen');
				 question[i].disabled = true
			}
			else if(question[i].checked == true && question[i].value == 'on'){
				question[i].parentElement.classList.toggle('bgRed');
			}
		}
		this.disabled = true
	}

//time
function getTimeRemaining(endtime) {
    // функция берет строку с временем окончания и считает разницу между этим временем и текущим
    var t = Date.parse(endtime) - Date.parse(new Date());//в этой переменной сохраняеться оставшееся время
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);

    return {
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    //функция которая отображает данные в документе
    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 40 * 60 * 1000); // устанавливаю 40 минут
  initializeClock('countdown', deadline);