import UsersList from "./components/UsersList";
import { Container } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';

export default() => {
  return (
    <>
      <Container fluid className='mt-4 mb-3'>
        <UsersList />
      </Container>
    </>
  );
}
