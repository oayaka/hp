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

	//ボタンのクリックイベント
	$("#my_btn").click(()=>{
		console.log("計算する!!");

		//空文字チェック
		//身長
		const strA = $("#input_a").val();
		console.log("strA: ",strA);

		//もし、strAが空文字だったら...
		if (strA ===""){
			console.log("strAは空文字です")
			$("#msg_info").text("身長を入力してください。")
			return;  //ここで停止
		}

		const strB = $("#input_b").val();
		console.log("strB: ",strB);
		//もし、strBが空文字だったら...
		if (strB ===""){
			console.log("strBは空文字です");
			$("#msg_info").text("体重を入力してください。");
			return;  //ここで停止
		}


		//ここまで来てたら、空文字は無い
		console.log("全データ入力済み:",strA,strB);

		//文字から数字に変換
		const numA = parseInt(strA);
		//数値かどうかチェック
		if(Number.isInteger(numA) === false){
			console.log("strAは数値ではありません");
			$("#msg_info").text("身長に数値を入力してください。");
			return;  //ここで停止
		}


		const numB = parseInt(strB);
		if(Number.isInteger(numB) === false){
			console.log("strBは数値ではありません");
			$("#msg_info").text("体重に数値を入力してください。");
			return;  //ここで停止
		}

		//ここまで来たらデータは全て数値
		console.log("エラー無しなので計算します");

		const strVal_a= $("#input_a").val(); //文字列取得
		const numVal_a =parseInt(strVal_a);      //文字列→数値
		console.log("身長:",numVal_a);
		
		const strVal_b = $("#input_b").val(); //文字列取得
		const numVal_b =parseInt(strVal_b);      //文字列→数値
		console.log("体重:",numVal_b);

		//TODO:BMI計算電卓を完成させる
		nijo = numVal_a * numVal_a
		console.log("2条:",nijo)
		kari = numVal_b / nijo
		bmi = kari * 10000
		console.log("BMI:",bmi)

		

		$("#my_bmi").text(Math.floor(bmi * 10)/10)
		


	})
});