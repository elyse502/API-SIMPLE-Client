import UsersList from "./components/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const BackgroundColor = createGlobalStyle`
  body {
    background-color: ${props => (props.light ? '#f2f2f2' : '#333')};
  }
`;

// CamelCase
const BlueText = styled.div`
  color: blue;
`;

const WhiteText = styled.div`
  color: #fff;
`;

export default() => {
  return (
    <>
      <BackgroundColor light />
        <Container fluid className='mt-4 mb-3'>
          <BlueText>
            <UsersList />
          </BlueText>
        </Container>
    </>
  );
}
