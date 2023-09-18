import logo from "./assets/logo.png";
import arrows from "./assets/arrows.png";
import "./App.css";
import { Todo } from "./components/todo";
import { useState } from "react";
import { nanoid } from "nanoid";
import { todoList } from "./utils/constants";

class todo {
	constructor(title) {
		this.id = nanoid();
		this.title = title;
		this.done = false;
	}
}
function App() {
	console.log(todoList);
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState(todoList);
	const completed = todos.filter((todo) => todo.done === true);

	const removeTodo = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const toggleDone = (id, completed) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, done: completed ? true : false };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className="App bg-slate-800 text-white h-full">
			<div className=" bg-slate-950 flex justify-center pt-28 pb-14">
				<img src={logo} />
			</div>
			<div className="flex justify-center gap-4 p-8 -my-16">
				<input
					value={input}
					type="text"
					placeholder="add todo here"
					className=" bg-slate-700 rounded w-96 border flex p-4"
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<button
					className="py-4 px-8 bg-Blue rounded-md border-b-8 border-r-4 border-DarkBlue active:border-none active:bg-DarkBlue transition-all"
					onClick={() => {
						setTodos([...todos, new todo(input)]);
						setInput("");
					}}
				>
					<img src={arrows} />
				</button>
			</div>
			<div className="flex flex-col mt-16">
				<div className=" self-center w-3/4 lg:w-1/4">
					<div className="flex justify-between pb-4">
						<p>
							Antal Todos
							<span className=" bg-gray-700 px-3  py-1 rounded-full mx-2">
								{todos.length}
							</span>
						</p>
						<p className=" text-Blue">
							Klara
							<span className="bg-gray-700 px-3  py-1 rounded-full mx-2">
								{completed.length}
							</span>
						</p>
					</div>
					<hr />
				</div>
				<div className="flex flex-col self-center items-center py-6 space-y-6 min-h-screen w-3/4 lg:w-1/4">
					{todos.map((todo, idx) => {
						return (
							<Todo
								key={idx}
								id={todo.id}
								title={todo.title}
								done={todo.done}
								removeTodo={removeTodo}
								toggleDone={toggleDone}
							/>
						);
					})}
				</div>
			</div>
			<footer className=" flex justify-center pb-16">
				<p className="text-xs">
					Johan Nyman{" "}
					<a className="text-Blue" href="">
						@github
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
