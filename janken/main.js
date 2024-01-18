console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");


	//サウンドファイルのロード
	const sndA = new Howl({
		src:"./sounds/ko.mp3"  //サウンドファイルのパス
		
	});

	const sndB = new Howl({
		src:"./sounds/piko_2.mp3"  //サウンドファイルのパス
		
	});

	//クリックイベント
	$("#btn_a").click(()=>{
		sndA.play();  //サウンドの再生
	})
	$("#btn_b").click(()=>{
		sndA.play();  
	})
	$("#btn_c").click(()=>{
		sndA.play();  
	})

	$("#my_btn").click(()=>{
		sndB.play();  
	})

});

let gameActive = false;
let correctHand;
let instruction; //命令
let score = 0;

let timer;


function startGame() {
	gameActive = true;
	nextRound();
	score = 0;
}

function nextRound() {
	if (gameActive) {
		correctHand = getRandomHand();
		instruction = getRandomInstruction();
		displayInstruction();
		startTimer();
	}
}

function getRandomHand() {
	const hands = ['グー', 'チョキ', 'パー'];
	const randomIndex = Math.floor(Math.random() * hands.length);
	return hands[randomIndex];
	
	updateImage(selectedHand);


}

function getRandomInstruction() {
    const instructions = ['勝って', '負けて', 'アイコ'];
    const randomIndex = Math.floor(Math.random() * instructions.length);
    return instructions[randomIndex];
}

function displayInstruction() {
    const resultElement = document.getElementById('result');
    const opponentImageElement = document.getElementById('my_img');
    resultElement.textContent = `相手の手: ${correctHand}。${instruction}。`;
    resultElement.style.color = 'black';

    switch (correctHand) {
        case 'グー':
            opponentImageElement.src = "./images/guu.png";// グーの画像のパスに変更
            break;
        case 'チョキ':
            opponentImageElement.src = "./images/choki.png"; // チョキの画像のパスに変更
            break;
        case 'パー':
            opponentImageElement.src = "./images/paa.png"; // パーの画像のパスに変更
            break;
    }
}



function startTimer() {
	timer = setTimeout(() => {
		endGame();
	}, 5000);
}

function endGame() {
	gameActive = false;
	displayResult('ゲームオーバー！');
	
}

function checkHand(selectedHand) {
	if (gameActive) {
		clearTimeout(timer);
		const winHands = {
			'グー': 'パー',
			'チョキ': 'グー',
			'パー': 'チョキ'
		};
		const loseHands = {
			'グー': 'チョキ',
			'チョキ': 'パー',
			'パー': 'グー'
		};

		switch (instruction) {
			case '勝って':
				if (winHands[correctHand] === selectedHand) {
					score++;
					displayResult('正解！');
					
				} else {
					endGame();
				}
				break;
			case '負けて':
				if (loseHands[correctHand] === selectedHand) {
					score++;
					displayResult('正解！');
					
				} else {
					endGame();
				}
				break;
			case 'アイコ':
				if (selectedHand === correctHand) {
					score++;
					displayResult('正解！');
					
				} else {
					endGame();
				}
				break;
		}

		displayScore();
		nextRound();
	}

	


}

function displayResult(message) {
	const resultElement = document.getElementById('result');
	resultElement.textContent = message;
	resultElement.style.color = message === '正解！' ? 'green' : 'red';
}

function displayScore() {
	const scoreElement = document.getElementById('score');
	scoreElement.textContent = `得点: ${score}`;
}

// アニメーション
function doAnimation(id, type){
	const elem = $(id);
	elem.addClass("animate__animated");
	elem.addClass(type);
	elem.on("animationend", ()=>{
		elem.off("animationend");
		elem.removeAttr("class");
	});
}