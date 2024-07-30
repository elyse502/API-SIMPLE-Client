import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";

const BackgroundColor = createGlobalStyle`
  body {
    background-color: ${props => (props.light ? '#f2f2f2' : '#333')};
  }
`;

const App = () => {
  return (
    <>
      <BackgroundColor light />
      <Container fluid className='mt-4 mb-3'>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
