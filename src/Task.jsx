export const Task = (props)=> {
    return (
        <div style={{ textDecoration: props.completed? 'line-through' : 'none' ,
        backgroundColor: props.completed? '#34b233' : 'none'
    }}
        className='task'>
            <h3>{props.taskName}</h3>
            <div><button onClick= {()=>props.deleteTask(props.id)}>x</button>
            <button onClick= {()=>props.completeTask(props.id)}>&#10003;</button></div>
        </div>

    )
}