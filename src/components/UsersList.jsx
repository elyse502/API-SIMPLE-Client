import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import Layout from "./Layout";

const UsersList = () => {
    const getAllUsersEndpoint = 'http://localhost:4000/v1/user/all';

    const [users, setUsers] = useState({}); // important, default need to be empty object

    const fetchUsers = async () => {
        const { data: apiResponse } = await axios.get(`${getAllUsersEndpoint}`);

        setUsers(apiResponse);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Layout>
            <h3 className='text-center mb-3'>
                Users
            </h3>
            {Object.values(users).map(user => (
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>

                                {user.city && user.country && (
                                    <p>{user.city} - {user.country}</p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Layout>
    );
}

export default UsersList;
