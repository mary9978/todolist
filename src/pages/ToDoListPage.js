import TodoApp from "../components/TodoApp/TodoApp";
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import {Row,Col, Container} from 'react-bootstrap';
import {useState} from 'react';
const TodoListPage = () => {
  const [opensSidebar,setOpenSidebar]=useState(true)
  return (
    <div className={"App"}>
      <Container fluid>
        <Row>
           <Col sm={'12'}>
             <h2 className="title mt-5">Just Do It</h2>
             <TodoApp />
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoListPage;
