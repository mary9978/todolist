import React,{useState} from "react";
import Todo from '../Todo/Todo';
import TodoForm from "../TodoForm/TodoForm";
import {Col} from 'react-bootstrap';
function TodoList({ todos ,setTodos,CompleteHandler,DeleteHandler,updateTodo,FavoriteHandler}) {
  const[edit,setEdit]=useState({id:null,title:'',isCompleted:false,Favorite:false});
  const submitTodoHandler=(input)=>{
    console.log(input);
    updateTodo(edit.id,input);
    setEdit({id:null,title:'',isCompleted:false});
  }
  const renderTodos = () => {
    if (todos.length === 0) return <h2>there is no task</h2>;
    return todos.map((item)=>{
        return(
            <Col sm={'12'}>
             <Todo key={item.id} todos={item} setTodos={setTodos}
             CompleteHandler={()=>CompleteHandler(item.id)}
             DeleteHandler={()=>DeleteHandler(item.id)}
             onEdit={()=>setEdit(item)}
             FavoriteHandler={()=>FavoriteHandler(item.id)}
             />
            </Col>
        )
    })
  };
  return <div>{edit.id ? <TodoForm name={'edit'} edit={edit} submitTodoHandler={submitTodoHandler}/> :renderTodos()}</div>;
}

export default TodoList;
