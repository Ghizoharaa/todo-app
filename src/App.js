import {Task} from './Task';
import {useState} from 'react';


function App() {
	const [todoList, setTododList] = useState([]);
	const [newTask, setNewTask] = useState('');

	const handleChange= (event) => {
		setNewTask(event.target.value)
	}
	const addTask = ()=> {
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1, 
			taskName: newTask,
			completed : false,
		}
		setTododList([...todoList, task])
	}
	const deleteTask = (id)=> {
		setTododList(todoList.filter((task) =>  task.id!== id));
	}
	const completeTask =(id) => {
		setTododList(
			todoList.map((task) => {
				if(task.id === id){
					return {...task, completed: true}
				}
				else{
					return task;
				}
			})
		)
	}
	return (
		<div className='container'>
			<div className='addTask'>
				<h2>Todo App</h2>
				<input type="text" onChange={handleChange}/>
				<button onClick={addTask}>+</button>
			</div>
			<div className='tasks'>
				{todoList.map((task) => {
					return (
						< Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}  completed ={task.completed}/>
					)
				})}

			</div>
			
		</div>

	);
}

export default App;
