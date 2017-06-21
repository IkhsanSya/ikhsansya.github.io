var currentQuestion = 0;
var score = 0;
var totQuestions = pertanyaan.length;

var container = document.getElementById('bungkus');
var pertanyaan_quiz = document.getElementById('pertanyaan');
var pil1 = document.getElementById('pil1');
var pil2 = document.getElementById('pil2');
var pil3 = document.getElementById('pil3');
var pil4 = document.getElementById('pil4');
var nextButton = document.getElementById('nextButton');
var backButton = document.getElementById('backHome');
var resultCont = document.getElementById('result');

function tampilkanPertanyaan (questionIndex) {
	var q = pertanyaan[questionIndex];
	pertanyaan_quiz.textContent = (questionIndex + 1) + '. ' + q.pertanyaan;
	pil1.textContent = q.pilihan1;
	pil2.textContent = q.pilihan2;
	pil3.textContent = q.pilihan3;
	pil4.textContent = q.pilihan4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Anda belum menjawab !');
		return;
	}
	var jawaban = selectedOption.value;
	if(pertanyaan[currentQuestion].jawaban == jawaban){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Selesai';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		backButton.style.display = '';
		resultCont.textContent = 'Nilai Anda : ' + score + '/100';
		return;
	}
	tampilkanPertanyaan(currentQuestion);
}

tampilkanPertanyaan(currentQuestion);