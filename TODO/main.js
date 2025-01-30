console.log("main.js!!");

// Todoリスト
const todos = [
	{
		id: 1,
		done: false,
		title: "昼寝をする"
	},
	{
		id: 2,
		done: false,
		title: "勉強をする"
	},
	{
		id: 3,
		done: true,
		title: "ゲームをする"
	},
	{
		id: 4,
		done: true,
		title: "料理をする"
	}
];

// MyData
const myData = {
	appName: "TODO Application",
	todos: todos,// Todoリスト
	done: false, // 選択中のリスト
	edit: 0,     // 編集中のID
	title: ""    // 追加する項目
}

const app = Vue.createApp({
	data(){
		return myData;
	},
	created(){
		this.loadTodos();// 読込
	},
	methods:{
		switchTodo(){
			console.log("switchTodo!!");
			this.done = !this.done;// true/falseの切替
			this.saveTodos();// 保存
		},
		changeTodo(id){
			console.log("changeTodo:" + id);
			this.todos.forEach(todo=>{if(todo.id == id) todo.done = !todo.done;});// true/falseを切替える
			this.saveTodos();// 保存
		},
		deleteTodo(id){
			console.log("deleteTodo:" + id);
			this.todos = this.todos.filter(todo=>{return todo.id != id;});// 配列から削除する
			this.saveTodos();// 保存
		},
		editTodo(id){
			console.log("editTodo:" + id);
			this.edit = id;// 編集中のID
		},
		pushTodo(){
			console.log("pushTodo:" + this.title);
			if(this.title.length <= 0) this.title = "-";// タイトルが未入力の場合はキャンセル
			this.done = false;// doneをfalseに戻しておく
			const todo = {
				id: Number(Date.now()).toString(16),// 日付のタイムスタンプをIDにする
				done: false,// デフォルトはfalseにしておく
				title: this.title// フォームに入力された値
			}
			this.todos.push(todo);// 配列に追加する
			this.saveTodos();// 保存
		},
		saveTodos(){
			console.log("saveTodos!!");
			const json = JSON.stringify(this.todos);// データ変換
			localStorage.setItem("todo", json);// 保存
		},
		loadTodos(){
			console.log("loadTodos!!");
			const json = localStorage.getItem("todo");// 読込
			if(json != null) this.todos = JSON.parse(json);// データ変換
		}
	},
	computed:{
		getTodos(){
			const arr = this.todos.filter(todo=>{return this.done == todo.done;});// 配列を取り出す
			arr.sort((a, b)=>{return b.id - a.id});// 降順に並び替える
			return arr;
		}
	}
});
app.mount("#app");