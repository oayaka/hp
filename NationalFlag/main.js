console.log("main.js!!");

let score = 0;
let kenmei
let kenmei_sentaku
let rdm
let hantei
let seikai


// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	//サウンドファイルのロード
	const sndA = new Howl({
		src:"./sounds/1pinpon.mp3"  //サウンドファイルのパス
		
	});

	const sndB = new Howl({
		src:"./sounds/1bubu.mp3"  //サウンドファイルのパス
		
	});




	$("#my_btn").click(()=>{
		console.log("ゲームスタート")
		startGame()
	})

	$("#btn_0").click(()=>{
		hantei = 0
		console.log("ボタン",hantei)
		check()
	})

	$("#btn_1").click(()=>{
		hantei = 1
		console.log("ボタン",hantei)

		check()
	})

	$("#btn_2").click(()=>{
		hantei = 2
		console.log("ボタン",hantei)

		check()
	})

	$("#btn_next").click(()=>{
		console.log("次へ")
		next()
	})


	function startGame(){
		console.log("startGame")
		score = 0
		updateScore()
		next();
	}

	function next(){
		document.getElementById("kaitou").textContent = " ";
		console.log("next")
		//rdm = Math.floor(Math.random() * 34);
		rdm = Math.floor(Math.random() * 86);


		if(rdm == 0){//アイスらど
			$("#my_img").attr("src", "./images/1.png");
			kenmei ="アイスランド"
		}

		if(rdm == 1){//アイルランド
			$("#my_img").attr("src", "./images/2.png");
			kenmei ="アイルランド"
		}

		if(rdm == 2){//アゼルバイジャン
			$("#my_img").attr("src", "./images/3.png");
			kenmei ="岩手アゼルバイジャン"
		}
		if(rdm == 3){//アフガニスタン
			$("#my_img").attr("src", "./images/4.png");
			kenmei ="アフガニスタン"
		}

		if(rdm == 4){//アメリカ合衆国
			$("#my_img").attr("src", "./images/5.png");
			kenmei ="アメリカ合衆国"
		}
		if(rdm == 5){//アラブ首長国連邦
			$("#my_img").attr("src", "./images/6.png");
			kenmei ="アラブ首長国連邦"
		}
		if(rdm == 6){//アルゼンチン
			$("#my_img").attr("src", "./images/7.png");
			kenmei ="アルゼンチン"
		}

		if(rdm == 7){//イエメン
			$("#my_img").attr("src", "./images/8.png");
			kenmei ="イエメン"
		}
		if(rdm == 8){//イギリス
			$("#my_img").attr("src", "./images/9.png");
			kenmei ="イギリス"
		}
		if(rdm == 9){//イスラエル
			$("#my_img").attr("src", "./images/10.png");
			kenmei ="イスラエル"
		}
		if(rdm == 10){//イタリア
			$("#my_img").attr("src", "./images/11.png");
			kenmei ="イタリア"
		}
		if(rdm == 11){//イラク
			$("#my_img").attr("src", "./images/12.png");
			kenmei ="イラク"
		}
		if(rdm == 12){//イラン
			$("#my_img").attr("src", "./images/13.png");
			kenmei ="イラン"
		}
		if(rdm == 13){//インド
			$("#my_img").attr("src", "./images/14.png");
			kenmei ="インド"
		}
		if(rdm == 14){//インドネシア
			$("#my_img").attr("src", "./images/15.png");
			kenmei ="インドネシア"
		}
		if(rdm == 15){//ウガンダ
			$("#my_img").attr("src", "./images/16.png");
			kenmei ="ウガンダ"
		}
		if(rdm == 16){//ウクライナ
			$("#my_img").attr("src", "./images/17.png");
			kenmei ="ウクライナ"
		}
		if(rdm == 17){//ウズベキスタン
			$("#my_img").attr("src", "./images/18.png");
			kenmei ="ウズベキスタン"
		}
		if(rdm == 18){//ウルグアイ
			$("#my_img").attr("src", "./images/19.png");
			kenmei ="ウルグアイ"
		}
		if(rdm == 19){//エクアドル
			$("#my_img").attr("src", "./images/20.png");
			kenmei ="エクアドル"
		}
		if(rdm == 20){//エジプト
			$("#my_img").attr("src", "./images/21.png");
			kenmei ="エジプト"
		}
		if(rdm == 21){//エチオピア
			$("#my_img").attr("src", "./images/22.png");
			kenmei ="エチオピア"
		}
		if(rdm == 22){//エルサルバドル
			$("#my_img").attr("src", "./images/23.png");
			kenmei ="エルサルバドル"
		}

		if(rdm == 23){//オーストラリア.
			$("#my_img").attr("src", "./images/24.png");
			kenmei ="オーストラリア"
		}
		if(rdm == 24){//オーストリア
			$("#my_img").attr("src", "./images/25.png");
			kenmei ="オーストリア"
		}
		if(rdm == 25){//オランダ
			$("#my_img").attr("src", "./images/26.png");
			kenmei ="オランダ"
		}
		if(rdm == 26){//ガーナ
			$("#my_img").attr("src", "./images/27.png");
			kenmei ="ガーナ"
		}
		if(rdm == 27){//カーボベルデ
			$("#my_img").attr("src", "./images/28.png");
			kenmei ="カーボベルデ"
		}
		if(rdm == 28){//ガイアナ
			$("#my_img").attr("src", "./images/29.png");
			kenmei ="ガイアナ"
		}
		if(rdm == 29){//カザフスタン
			$("#my_img").attr("src", "./images/30.png");
			kenmei ="カザフスタン"
		}

		if(rdm == 30){//カナダ
			$("#my_img").attr("src", "./images/31.png");
			kenmei ="カナダ"
		}
		if(rdm == 31){//カルメーン
			$("#my_img").attr("src", "./images/32.png");
			kenmei ="カルメーン"
		}
		if(rdm == 32){//韓国
			$("#my_img").attr("src", "./images/33.png");
			kenmei ="韓国"
		}
		if(rdm == 33){//ガンビア
			$("#my_img").attr("src", "./images/34.png");
			kenmei ="ガンビア"
		}
		if(rdm == 34){//カンボジア
			$("#my_img").attr("src", "./images/35.png");
			kenmei ="カンボジア"
		}

		if(rdm == 35){//北朝鮮
			$("#my_img").attr("src", "./images/36.png");
			kenmei ="北朝鮮"
		}
		if(rdm == 36){//ギニア
			$("#my_img").attr("src", "./images/37.png");
			kenmei ="ギニア"
		}
		if(rdm == 37){//キューバ
			$("#my_img").attr("src", "./images/38.png");
			kenmei ="キューバ"
		}
		if(rdm == 38){//ギリシャ
			$("#my_img").attr("src", "./images/39.png");
			kenmei ="ギリシャ"
		}

		if(rdm == 39){//キリバス
			$("#my_img").attr("src", "./images/40.png");
			kenmei ="キリバス"
		}
		if(rdm == 40){//キルギス
			$("#my_img").attr("src", "./images/41.png");
			kenmei ="キルギス"
		}
		if(rdm == 41){//グレナダ
			$("#my_img").attr("src", "./images/42.png");
			kenmei ="グレナダ"
		}
		if(rdm == 42){//コートジボワール
			$("#my_img").attr("src", "./images/43.png");
			kenmei ="コートジボワール"
		}
		if(rdm == 43){//コスタリカ
			$("#my_img").attr("src", "./images/44.png");
			kenmei ="コスタリカ"
		}
		if(rdm == 44){//コモロ
			$("#my_img").attr("src", "./images/45.png");
			kenmei ="コモロ"
		}
		if(rdm == 45){//コロンビア
			$("#my_img").attr("src", "./images/46.png");
			kenmei ="コロンビア"
		}
		if(rdm == 46){//サウジアラビア
			$("#my_img").attr("src", "./images/47.png");
			kenmei ="サウジアラビア"
		}
		if(rdm == 47){//シエラレオネ
			$("#my_img").attr("src", "./images/48.png");
			kenmei ="シエラレオネ"
		}

		if(rdm == 48){//ジブチ
			$("#my_img").attr("src", "./images/49.png");
			kenmei ="ジブチ"
		}

		if(rdm == 49){//ジャマイカ
			$("#my_img").attr("src", "./images/50.png");
			kenmei ="ジャマイカ"
		}

		if(rdm == 50){//ジョージア
			$("#my_img").attr("src", "./images/51.png");
			kenmei ="ジョージア"
		}

		if(rdm == 51){//シリア
			$("#my_img").attr("src", "./images/52.png");
			kenmei ="シリア"
		}

		if(rdm == 52){//シンガポール
			$("#my_img").attr("src", "./images/53.png");
			kenmei ="シンガポール"
		}

		if(rdm == 53){//スウェーデン
			$("#my_img").attr("src", "./images/54.png");
			kenmei ="スウェーデン"
		}

		if(rdm == 54){//スペイン
			$("#my_img").attr("src", "./images/55.png");
			kenmei ="スペイン"
		}

		if(rdm == 55){//スリナム
			$("#my_img").attr("src", "./images/56.png");
			kenmei ="スリナム"
		}


		if(rdm == 56){//スロバキア
			$("#my_img").attr("src", "./images/57.png");
			kenmei ="スロバキア"
		}

		if(rdm == 57){//セルビア
			$("#my_img").attr("src", "./images/58.png");
			kenmei ="セルビア"
		}

		if(rdm == 58){//タイ
			$("#my_img").attr("src", "./images/59.png");
			kenmei ="タイ"
		}

		if(rdm == 59){//タンザニア
			$("#my_img").attr("src", "./images/60.png");
			kenmei ="タンザニア"
		}

		if(rdm == 60){//チェコ
			$("#my_img").attr("src", "./images/61.png");
			kenmei ="チェコ"
		}

		if(rdm == 61){//チャド
			$("#my_img").attr("src", "./images/62.png");
			kenmei ="チャド"
		}
		if(rdm == 62){//中央アフリカ共和国
			$("#my_img").attr("src", "./images/63.png");
			kenmei ="中央アフリカ共和国"
		}
		if(rdm == 63){//中華人民共和国
			$("#my_img").attr("src", "./images/64.png");
			kenmei ="中華人民共和国"
		}
		if(rdm == 64){//チュニジア
			$("#my_img").attr("src", "./images/65.png");
			kenmei ="チュニジア"
		}
		if(rdm == 65){//チリ
			$("#my_img").attr("src", "./images/66.png");
			kenmei ="チリ"
		}

		if(rdm == 66){//デンマーク
			$("#my_img").attr("src", "./images/67.png");
			kenmei ="デンマーク"
		}

		if(rdm == 67){//ドイツ
			$("#my_img").attr("src", "./images/68.png");
			kenmei ="ドイツ"
		}
		if(rdm == 68){//トーゴ
			$("#my_img").attr("src", "./images/69.png");
			kenmei ="トーゴ"
		}
		if(rdm == 69){//トルクメニスタン
			$("#my_img").attr("src", "./images/70.png");
			kenmei ="トルクメニスタン"
		}
		if(rdm == 70){//トルコ
			$("#my_img").attr("src", "./images/71.png");
			kenmei ="トルコ"
		}

		if(rdm == 71){//ナイジェリア
			$("#my_img").attr("src", "./images/72.png");
			kenmei ="ナイジェリア"
		}
		if(rdm == 72){//ナミビア
			$("#my_img").attr("src", "./images/73.png");
			kenmei ="ナミビア"
		}
		if(rdm == 73){//ニカラグア
			$("#my_img").attr("src", "./images/74.png");
			kenmei ="ニカラグア"
		}
		if(rdm == 74){//日本
			$("#my_img").attr("src", "./images/75.png");
			kenmei ="日本"
		}
		if(rdm == 75){//ニュージーランド
			$("#my_img").attr("src", "./images/76.png");
			kenmei ="ニュージーランド"
		}

		if(rdm == 76){//ノルウェー
			$("#my_img").attr("src", "./images/77.png");
			kenmei ="ノルウェー"
		}
		if(rdm == 77){//バーレーン
			$("#my_img").attr("src", "./images/78.png");
			kenmei ="バーレーン"
		}
		if(rdm == 78){//ハイチ
			$("#my_img").attr("src", "./images/79.png");
			kenmei ="ハイチ"
		}
		if(rdm == 79){//パキスタン
			$("#my_img").attr("src", "./images/80.png");
			kenmei ="パキスタン"
		}
		if(rdm == 80){//パナマ
			$("#my_img").attr("src", "./images/81.png");
			kenmei ="パナマ"
		}

		if(rdm == 81){//バヌアツ
			$("#my_img").attr("src", "./images/82.png");
			kenmei ="バヌアツ"
		}
		if(rdm == 82){//パラオ
			$("#my_img").attr("src", "./images/83.png");
			kenmei ="パラオ"
		}
		if(rdm == 83){//パラグアイ
			$("#my_img").attr("src", "./images/84.png");
			kenmei ="パラグアイ"
		}
		if(rdm == 84){//バルバドス
			$("#my_img").attr("src", "./images/85.png");
			kenmei ="バルバドス"
		}
		if(rdm == 85){//パレスチナ
			$("#my_img").attr("src", "./images/86.png");
			kenmei ="パレスチナ"
		}



		console.log("乱数:" ,rdm,kenmei)
		sentaku()
	}


	// 選択肢を生成
function sentaku() {
    seikai = Math.floor(Math.random() * 3); // 正解の位置

    const prefectures = ["アイスランド", "アイルランド", "アゼルバイジャン", "アフガニスタン", "アメリカ合衆国", "アラブ首長国連邦", "アルゼンチン","イエメン","イギリス","イスラエル","イタリア","イラク","イラン","インド","インドネシア","ウガンダ","ウクライナ","ウズベキスタン","ウルグアイ","エクアドル","エジプト","エチオピア","エルサルバドル","オーストラリア","オーストリア","オランダ","ガーナ","カーボベルデ","ガイアナ","カザフスタン","カナダ","カルメーン","韓国","ガンビア","カンボジア","北朝鮮","ギニア","キューバ","ギリシャ","キリバス","キルギス","グレナダ","コートジボワール","コスタリカ","コモロ","コロンビア","サウジアラビア","シエラレオネ","ジブチ","ジャマイカ","ジョージア","シリア","シンガポール","スウェーデン","スペイン","スリナム","スロバキア","セルビア","タイ","タンザニア","チェコ","チャド","中央アフリカ共和国","中華人民共和国","チュニジア","チリ","デンマーク","ドイツ","トーゴ","トルクメニスタン","トルコ","ナイジェリア","ナミビア","ニカラグア","日本","ニュージーランド","ノルウェー","バーレーン","ハイチ","パキスタン","パナマ","バヌアツ","パラオ","パラグアイ","バルバドス","パレスチナ"];
    const otherOptions = prefectures.filter(pref => pref !== kenmei); // 正解以外を抽出
    const options = [...otherOptions.sort(() => Math.random() - 0.5).slice(0, 2), kenmei]; // ランダムに2つ選択 + 正解を追加
    options.sort(() => Math.random() - 0.5); // シャッフル

    document.getElementById("p_0").textContent = options[0];
    document.getElementById("p_1").textContent = options[1];
    document.getElementById("p_2").textContent = options[2];

    seikai = options.indexOf(kenmei); // 正解の位置を再設定
	console.log("正解:", seikai);

	//check();
}

function check(){
	console.log("check")
	if (hantei == 0 && seikai == 0) {
					seikaidayo();
					console.log("正解だよ");
				} else if(hantei == 1 && seikai == 1){
					seikaidayo();
					console.log("正解だよ");
				} else if(hantei == 2 && seikai == 2){
					seikaidayo();
					console.log("正解だよ");
				}else{
					console.log("不正解")
					fuzokudayo()
				}
}


function seikaidayo() {

	sndA.play();  //サウンドの再生
	$("#my_img").attr("src", "./images/maru.png");
    score += 10; // 正解なら10点加算
    updateScore();
    console.log(`正解！現在のスコア: ${score}`);
    //next();
}

// 不正解時の処理
function fuzokudayo() {
	sndB.play();  //サウンドの再生
	
	$("#my_img").attr("src", "./images/batsu.png");
	document.getElementById("kaitou").textContent = `正解: ${kenmei}`;
    score -= 5; // 不正解なら5点減算
    updateScore();
    console.log(`不正解...現在のスコア: ${score}`);
    //next();
}

// スコアの更新処理
function updateScore() {
    document.getElementById("score").textContent = `得点: ${score}`;
}

// ゲーム終了処理
function endGame() {
    alert(`ゲーム終了！あなたの得点は${score}点です！`);
    location.reload(); // ゲームを再スタート
}



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



