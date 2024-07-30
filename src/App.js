import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import UsersList from "./components/UsersList";

const BackgroundColor = createGlobalStyle`
  body {
    background-color: ${props => (props.light ? '#f2f2f2' : '#333')};
  }
`;

export default() => {
  return (
    <>
      <BackgroundColor light />
        <Container fluid className='mt-4 mb-3'>
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
