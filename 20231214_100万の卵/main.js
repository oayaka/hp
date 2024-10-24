console.log("main.js!!");

let counter = 0;

$(document).ready(()=>{
	console.log("Ready");

	// 初期化
	counter = localStorage.getItem("key_counter");
	if(counter == null) counter = 0;
	$("#my_counter").text(counter);

	// クリックイベント
	$("#btn").click(()=>{
		counter++;
		$("#my_counter").text(counter);
		localStorage.setItem("key_counter", counter);

		if (counter >= 20) {
			doAnimation("#my_egg", "animate__pulse");
			$("#my_egg").attr("src", "./images/egg20.jpeg");
		}
		if (counter >= 40) {
			//doAnimation("#my_egg", "animate__shakeX");
			$("#my_egg").attr("src", "./images/egg40.jpeg");
		}

		if (counter >= 60) {
			//doAnimation("#my_egg", "animate__rubberBand");
			$("#my_egg").attr("src", "./images/egg60.jpeg");
		}

		if (counter >= 100) {
			doAnimation("#my_egg", "animate__rubberBand");// RubberBand
			$("#my_egg").attr("src", "./images/egg_02.png");
		}
	});

	//リセットボタン
	$("#btn_r").click(()=>{
		doAnimation("#my_egg", "animate__bounce");// Bounce
		counter = 0
		localStorage.setItem("key_counter", counter);
		$("#my_counter").text(counter);
		$("#my_egg").attr("src", "./images/egg_01.png");
	})


});

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