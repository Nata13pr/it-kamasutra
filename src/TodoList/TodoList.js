import './TodoList.css'

function TodoList({todos,onDeleteTodo,onToggleCompleted}){
    return(
        <ul className="TodoList">
            {todos.map(({id,text,completed})=>
            <li 
            key={id} 
            className="TodoList__item">
                <input 
                type='checkbox'
                checked={completed}
                onChange={()=>onToggleCompleted(id)}/>
                <p className='TodoList__text'>{text}</p>
                <button onClick={()=>onDeleteTodo(id)}>Delete</button>
                </li>)}
        </ul>
    )
}
export default TodoList;