import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export function Todo({ id, title, done, removeTodo, toggleDone }) {
	const [isCompleted, setIsCompleted] = useState(done === true);

	const handleStatusChange = () => {
		setIsCompleted(!isCompleted);
		toggleDone(id, !isCompleted);
	};
	const classChange = isCompleted
		? "bg-green-600 border-green-700"
		: "bg-slate-600 border-slate-700";
	return (
		<div
			className={`flex justify-between rounded-md min-w-full p-8 border-b-8 border-r-4 transition-colors ${classChange}`}
		>
			<div className="flex gap-4">
				<input
					type="checkbox"
					className=" bg-slate-500"
					checked={isCompleted}
					onChange={handleStatusChange}
				/>
				{title}
				<span className=" text-xs text-gray-400 absolute m-6 ">{id}</span>
			</div>
			<button
				className="hover:text-red-500 transition-colors"
				onClick={() => removeTodo(id)}
			>
				<AiFillDelete size={20} />
			</button>
		</div>
	);
}
