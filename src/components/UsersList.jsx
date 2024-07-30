import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios';

const UsersList = () => {
    const getAllUsersUrl = 'http://localhost:4000/v1/user/all';

    const [users, setUsers] = useState({}); // important, default need to be empty object

    const fetchUsers = async () => {
        const res = await axios.get(`${getAllUsersUrl}`);
        console.log(res.data);

        setUsers(res.data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const BlueText = styled.div`
        color: blue;
    `;

    return (
        <Container className='mt-5 mb-5'>
          <h3 className='text-center mb-3'>
            <BlueText>Users</BlueText>
          </h3>
          {Object.values(users).map(user => (
            <Row className='justify-content-center'>
              <Col lg={4}>
                <Card>
                  <Card.Body>
                    <BlueText>
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </BlueText>
                    {user.city && user.country && (
                      <p>
                        <BlueText>{user.city} - {user.country}</BlueText>
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      );
}

export default UsersList;
