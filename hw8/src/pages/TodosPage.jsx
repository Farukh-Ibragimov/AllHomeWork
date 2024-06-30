import React, {useEffect, useState} from 'react';
import Todo from "../components/Todo";

function TodosPage() {
    const[value,setValue] = useState("")
    const[todos,setTodos] = useState([])

    async function getTodos(){
        const response = await fetch("http://localhost:8000/todos")
        const data = await response.json()
        setTodos(data)
    }
    async function handleSubmit(){
        if(value.trim() === ""){
            alert("Заполните поле для ввода")
        }
        const data = {
            title:value,
            status:false
        }
        const response = await fetch("http://localhost:8000/todos",{
            method: "POST",
            headers:{
                "Content-type":"application.json",
            },
            body:JSON.stringify(data)
        })
        getTodos()
        setValue("")
    }
    async function deleteTodo(id){
       const response = await fetch(`http://localhost:8000/todos/${id}`,{
           method: "DELETE"
       })
        getTodos()
    }
    async function change(id, newData) {
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'},
            body: JSON.stringify({title: newData})
        })
        getTodos()
    }
    async function onStatus(id, newStatus) {
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'},
            body: JSON.stringify({status: newStatus})
        })

        getTodos()
    }
    useEffect(()=>{
        getTodos()
    },[])
    return (
        <div>
            <h2>Список дел</h2>

            <input type="text" onInput={(e) => setValue(e.target.value)} value={value}/>
            <button onClick={handleSubmit}>добавить</button>
            {
                todos.length > 0 ?
                    todos.map(todo => <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} change={change}
                                            onStatus={onStatus}/>)
                    :
                    <li>список пуст</li>
            }
        </div>
    );
}

export default TodosPage;