import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Login from './pages/Login';
import TodoListPage from './pages/ToDoListPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoListPage />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
