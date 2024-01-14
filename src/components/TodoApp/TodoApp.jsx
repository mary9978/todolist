import React, { useState, useEffect } from "react";
import CompletedItem from "../CompletedItem/CompletedItem";
import { MultiSelect } from "react-multi-select-component";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: "complete react js course", isCompleted: false,Favorite:false },
    { id: 2, title: "call momy", isCompleted: false ,Favorite:false},
  ]);
  const [additem,setAdditem]=useState(false);
  const[status,setStatus]=useState('All');
  const [filtertodos,setFilterTodos]=useState([]);
  const CompleteHandler = (id) => {
    // console.log(todos);
    const index = todos.findIndex((item) => item.id === id);
    const selectedItem = { ...todos[index] };
    selectedItem.isCompleted = !selectedItem.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedItem;
    setTodos(updatedTodos);
  };
  const DeleteHandler = (id) => {
    const newtodo = todos.filter((item) => item.id !== id);
    setTodos(newtodo);
  };
  const updateTodo = (id, input) => {
    //console.log(id,input);
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.title = input;
    const updateditem = [...todos];
    updateditem[index] = selectedTodo;
    setTodos(updateditem);
  };
  const FavoriteHandler =(id)=>{
    const index= todos.findIndex(t=>t.id === id);
    const selectedTodos={...todos[index]};
    selectedTodos.Favorite=!selectedTodos.Favorite;
    const updatedTodos=[...todos];
    updatedTodos[index]=selectedTodos;
    setTodos(updatedTodos);
  }
  const onChangeFilterList=(e)=>{
    setStatus(e);
    filterTodos(e.value);
}
  const filterTodos=(status)=>{
    switch(status){
      case 'complete': setFilterTodos(todos.filter(t => t.isCompleted))
      break;
      case 'ucomplete': setFilterTodos(todos.filter(t => !t.isCompleted))
      break;
      default:
        setFilterTodos(todos)
        break;
    }
  }
  useEffect(() => {
    filterTodos(status.value);
  }, [todos,status]);
  return (
    <>
      {/* <CompletedItem
        onChangeFilterList={onChangeFilterList}
        status={status}
        setStatus={setStatus}
        filterTodos={filterTodos}
        remaining={todos.filter((item) => !item.isCompleted).length}
        favorite={todos.filter(t=> t.Favorite).length}
      /> */}


      {/* {additem ? <AiOutlineMinus fontSize={'1.5rem'} onClick={()=>setAdditem(!additem)} color={'red'}/> :<BsPlusCircleDotted onClick={()=>setAdditem(!additem)} fontSize={'1.5rem'} color={'red'}/>}
       <span>{additem ? 'hide' :'add item' }</span>
      {additem && <TodoForm name="Add Task" setTodos={setTodos} todos={todos} /> } */}


      <TodoList
        todos={filtertodos}
        setTodos={setTodos}
        CompleteHandler={CompleteHandler}
        DeleteHandler={DeleteHandler}
        updateTodo={updateTodo}
        FavoriteHandler={FavoriteHandler}
      />

      
    </>
  );
}
export default TodoApp;
