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
		rdm = Math.floor(Math.random() * 47);

		if(rdm == 0){//北海道
			$("#my_img").attr("src", "./images/1_hokkaidou.png");
			kenmei ="北海道"
		}

		if(rdm == 1){//青森
			$("#my_img").attr("src", "./images/2_touhoku1__aomori.png");
			kenmei ="青森"
		}

		if(rdm == 2){//岩手
			$("#my_img").attr("src", "./images/3_touhoku2__iwate.png");
			kenmei ="岩手"
		}
		if(rdm == 3){//宮城
			$("#my_img").attr("src", "./images/4_touhoku3__miyagi.png");
			kenmei ="宮城"
		}

		if(rdm == 4){//秋田
			$("#my_img").attr("src", "./images/5_touhoku4__akita.png");
			kenmei ="秋田"
		}
		if(rdm == 5){//山形
			$("#my_img").attr("src", "./images/6_touhoku5__yamagata.png");
			kenmei ="山形"
		}
		if(rdm == 6){//福島
			$("#my_img").attr("src", "./images/7_touhoku6__fukushima.png");
			kenmei ="福島"
		}

		if(rdm == 7){//茨城
			$("#my_img").attr("src", "./images/8_kantou1__ibaraki.png");
			kenmei ="茨城"
		}
		if(rdm == 8){//栃木
			$("#my_img").attr("src", "./images/9_kantou2__tochigi.png");
			kenmei ="栃木"
		}
		if(rdm == 9){//群馬
			$("#my_img").attr("src", "./images/10_kantou3__gunma.png");
			kenmei ="群馬"
		}
		if(rdm == 10){//埼玉
			$("#my_img").attr("src", "./images/11_kantou4__saitama.png");
			kenmei ="埼玉"
		}
		if(rdm == 11){//千葉
			$("#my_img").attr("src", "./images/12_kantou5__chiba.png");
			kenmei ="千葉"
		}
		if(rdm == 12){//東京
			$("#my_img").attr("src", "./images/13_kantou6__tokyo.png");
			kenmei ="東京"
		}
		if(rdm == 13){//神奈川
			$("#my_img").attr("src", "./images/14_kantou7__kanagawa.png");
			kenmei ="神奈川"
		}
		if(rdm == 14){//山梨
			$("#my_img").attr("src", "./images/15_chuubu1_yamanashi.png");
			kenmei ="山梨"
		}
		if(rdm == 15){//長野
			$("#my_img").attr("src", "./images/16_chuubu2_nagano.png");
			kenmei ="長野"
		}
		if(rdm == 16){//新潟
			$("#my_img").attr("src", "./images/17_chuubu3_niigata.png");
			kenmei ="新潟"
		}
		if(rdm == 17){//富山
			$("#my_img").attr("src", "./images/18_chuubu4_toyama.png");
			kenmei ="富山"
		}
		if(rdm == 18){//石川
			$("#my_img").attr("src", "./images/19_chuubu5_ishikawa.png");
			kenmei ="石川"
		}
		if(rdm == 19){//福井
			$("#my_img").attr("src", "./images/20_chuubu6_fukui.png");
			kenmei ="福井"
		}
		if(rdm == 20){//静岡
			$("#my_img").attr("src", "./images/21_chuubu7_shizuoka.png");
			kenmei ="静岡"
		}
		if(rdm == 21){//愛知
			$("#my_img").attr("src", "./images/22_chuubu8_aichi.png");
			kenmei ="愛知"
		}
		if(rdm == 22){//岐阜
			$("#my_img").attr("src", "./images/23_chuubu9_gifu.png");
			kenmei ="岐阜"
		}

		if(rdm == 23){//三重
			$("#my_img").attr("src", "./images/24_kinki1_mie.png");
			kenmei ="三重"
		}
		if(rdm == 24){//滋賀
			$("#my_img").attr("src", "./images/25_kinki2_shiga.png");
			kenmei ="滋賀"
		}
		if(rdm == 25){//京都
			$("#my_img").attr("src", "./images/26_kinki3_kyouto.png");
			kenmei ="京都"
		}
		if(rdm == 26){//大阪
			$("#my_img").attr("src", "./images/27_kinki4_osaka.png");
			kenmei ="大阪"
		}
		if(rdm == 27){//兵庫
			$("#my_img").attr("src", "./images/28_kinki5_hyougo.png");
			kenmei ="兵庫"
		}
		if(rdm == 28){//奈良
			$("#my_img").attr("src", "./images/29_kinki6_nara.png");
			kenmei ="奈良"
		}
		if(rdm == 29){//和歌山
			$("#my_img").attr("src", "./images/30_kinki7_wakayama.png");
			kenmei ="和歌山"
		}

		if(rdm == 30){//鳥取
			$("#my_img").attr("src", "./images/31_chuugoku1_tottori.png");
			kenmei ="鳥取"
		}
		if(rdm == 31){//島根
			$("#my_img").attr("src", "./images/32_chuugoku2_shimane.png");
			kenmei ="島根"
		}
		if(rdm == 32){//岡山
			$("#my_img").attr("src", "./images/33_chuugoku3_okayama.png");
			kenmei ="岡山"
		}
		if(rdm == 33){//広島
			$("#my_img").attr("src", "./images/34_chuugoku4_hiroshima.png");
			kenmei ="広島"
		}
		if(rdm == 34){//山口
			$("#my_img").attr("src", "./images/35_chuugoku5_yamaguchi.png");
			kenmei ="山口"
		}

		if(rdm == 35){//香川
			$("#my_img").attr("src", "./images/36_shikoku1_kagawa.png");
			kenmei ="香川"
		}
		if(rdm == 36){//愛媛
			$("#my_img").attr("src", "./images/37_shikoku2_ehime.png");
			kenmei ="愛媛"
		}
		if(rdm == 37){//徳島
			$("#my_img").attr("src", "./images/38_shikoku3_tokushima.png");
			kenmei ="徳島"
		}
		if(rdm == 38){//高知
			$("#my_img").attr("src", "./images/39_shikoku4_kouchi.png");
			kenmei ="高知"
		}

		if(rdm == 39){//福岡
			$("#my_img").attr("src", "./images/40_kyuusyuu1_fukuoka.png");
			kenmei ="福岡"
		}
		if(rdm == 40){//佐賀
			$("#my_img").attr("src", "./images/41_kyuusyuu2_saga.png");
			kenmei ="佐賀"
		}
		if(rdm == 41){//長崎
			$("#my_img").attr("src", "./images/42_kyuusyuu3_nagasaki.png");
			kenmei ="長崎"
		}
		if(rdm == 42){//熊本
			$("#my_img").attr("src", "./images/43_kyuusyuu4_kumamoto.png");
			kenmei ="熊本"
		}
		if(rdm == 43){//大分
			$("#my_img").attr("src", "./images/44_kyuusyuu5_ooita.png");
			kenmei ="大分"
		}
		if(rdm == 44){//宮崎
			$("#my_img").attr("src", "./images/45_kyuusyuu6_miyazaki.png");
			kenmei ="宮崎"
		}
		if(rdm == 45){//鹿児島
			$("#my_img").attr("src", "./images/46_kyuusyuu7_kagoshima.png");
			kenmei ="鹿児島"
		}
		if(rdm == 46){//沖縄
			$("#my_img").attr("src", "./images/47_okinawa.png");
			kenmei ="沖縄"
		}




		console.log("乱数:" ,rdm,kenmei)
		sentaku()
	}


	// 選択肢を生成
function sentaku() {
    seikai = Math.floor(Math.random() * 3); // 正解の位置

    const prefectures = ["北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","山梨","長野","新潟","富山","石川","福井","静岡","愛知","岐阜","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","香川","愛媛","徳島","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"];
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



