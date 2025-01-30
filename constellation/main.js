console.log("main.js!!");

const myData = {
	appName: "Horoscope Ranking", // アプリ名
	message: "今日の星座ランキング!!", // メッセージ
	horos: [ // 星座データ
		{name: "牡羊座", path: "./images/seiza01_ohitsuji.png", rank: 0},
		{name: "牡牛座", path: "./images/seiza02_oushi.png", rank: 0},
		{name: "双子座", path: "./images/seiza03_futago.png", rank: 0},
		{name: "蟹座", path: "./images/seiza04_kani.png", rank: 0},
		{name: "獅子座", path: "./images/seiza05_shishi.png", rank: 0},
		{name: "乙女座", path: "./images/seiza06_otome.png", rank: 0},
		{name: "天秤座", path: "./images/seiza07_tenbin.png", rank: 0},
		{name: "蠍座", path: "./images/seiza08_sasori.png", rank: 0},
		{name: "射手座", path: "./images/seiza09_ite.png", rank: 0},
		{name: "山羊座", path: "./images/seiza10_yagi.png", rank: 0},
		{name: "水瓶座", path: "./images/seiza11_mizugame.png", rank: 0},
		{name: "魚座", path: "./images/seiza12_uo.png", rank: 0}
	]
};

const app = Vue.createApp({
	data() {
		return myData;
	},
	created() {
		console.log("created!!");
		this.shuffle();
	},
	methods: {
		shuffle() {
			console.log("shuffle!!");
			// シャッフル
			for (let i = this.horos.length - 1; i > 0; i--) {
				const rdm = Math.floor(Math.random() * (i + 1));
				[this.horos[i], this.horos[rdm]] = [this.horos[rdm], this.horos[i]];
			}
			// ランキング付け
			this.horos.forEach((horo, index) => {
				horo.rank = index + 1;
			});
		}
	},
	computed: {
		getBest3() {
			return this.horos.slice(0, 3);
		},
		getWorst3() {
			return this.horos.slice(-3).reverse();
		}
	}
});

app.mount("#app");
