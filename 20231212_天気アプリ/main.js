console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready");

	// Axios
	const url_tokyo = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
	const url_gifu = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";
	const option = {responseType: "blob"};
	axios.get(url_gifu, option).then(res=>{
		res.data.text().then(str=>{
			const arr = JSON.parse(str);
			console.table(arr);


			//TODO データを抜き出してみる
			//Arrayは配列なので[]でアクセスする
			console.log(arr[0].publishingOffice);//気象庁
			console.log(arr[0].timeSeries[0].areas[0].area.name);//美濃地方
			console.log(arr[0].timeSeries[0].areas[1].area.name);//飛騨地方
			
			

			//美濃地方の天気を取得

			//weatherCode
			console.log(arr[0].timeSeries[0].areas[0].weatherCodes[0]) //112
			//weathers
			console.log(arr[0].timeSeries[0].areas[0].weathers[0])     
			//winds
			console.log(arr[0].timeSeries[0].areas[0].winds[0])

			strTenki = arr[0].timeSeries[0].areas[0].weatherCodes[0]

			
			//数値に変換
		    const numTenki = parseInt(strTenki);

			


			console.log(strTenki)
			
			$("#msg_2").text(arr[0].timeSeries[0].areas[0].weathers[0]);
			$("#msg_3").text(arr[0].timeSeries[0].areas[0].winds[0]);
			
		});
	}).catch(err=>{
		console.log(err);
	});
});