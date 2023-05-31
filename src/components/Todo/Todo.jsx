import React from "react";
import "./todo.css";
import { container, Row, Col } from "react-bootstrap";
import { MdModeEditOutline, MdFavorite, MdDelete } from "react-icons/md";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

function Todo({
  todos,
  CompleteHandler,
  DeleteHandler,
  onEdit,
  FavoriteHandler,
}) {
  return (
    <>
      <div className={"card--style"}>
        <Col sm={"6"}>
          {todos.isCompleted ? (
            <FaRegCheckCircle
              onClick={CompleteHandler}
              color={"green"}
              fontSize={"1.5rem"}
            />
          ) : (
            <FaRegCircle
              onClick={CompleteHandler}
              color={"#fd86ae"}
              fontSize={"1.5rem"}
            />
          )}
          <p
            className={
              todos.isCompleted ? "todo-title completed" : "todo-title"
            }
          >
            {todos.title}
          </p>
        </Col>
        <Col sm={"6"}>
          <button className={"btn btn-sm "} onClick={onEdit}>
            <MdModeEditOutline color={"#77d9fa"} fontSize={"1.5rem"} />
          </button>
          <button className={"btn btn-sm "} onClick={DeleteHandler}>
            <MdDelete color={"#77d9fa"} fontSize={"1.5rem"} />
          </button>
          <button className={"btn btn-sm"} onClick={FavoriteHandler}>
            <MdFavorite color={"red"} fontSize={"1.5rem"} />
          </button>
        </Col>
      </div>
    </>
  );
}
export default Todo;
