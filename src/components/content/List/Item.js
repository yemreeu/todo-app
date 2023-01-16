import React from 'react'
import { useTodo } from '../../../contexts/TodoContext';

function Item({ todo }) {
    const {toggleTodo,destroyTodo} = useTodo();
    const onChange = (id) =>{
        toggleTodo(id);
    }

    const onDestroy = (id) => {
        destroyTodo(id);
    }
    return (
        <div>
            <li key="id" className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)}/>
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
                </div>
            </li>
        </div>
    )
}

export default Item;