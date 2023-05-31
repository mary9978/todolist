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
           <Col sm={'4'}>
              <Sidebar opensSidebar={opensSidebar} setOpenSidebar={setOpenSidebar}/>
           </Col>
           <Col sm={'6'}>
             <TodoApp />
           </Col>
        </Row>
      </Container>
      {/* <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-4"}>
            <Sidebar opensSidebar={opensSidebar} setOpenSidebar={setOpenSidebar}/>
          </div>
          <div className={"col-6"}>
            <h1>Mari's ToDo App</h1>
            <TodoApp />
          </div>
        </div>
      </div> */}
  
    </div>
  );
};

export default TodoListPage;
