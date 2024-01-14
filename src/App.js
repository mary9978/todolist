import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import TodoListPage from './pages/ToDoListPage';
document.body.style.backgroundColor = "#120722";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoListPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
