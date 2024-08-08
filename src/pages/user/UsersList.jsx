import Layout from "../../components/layout/Layout";
import * as userService from "../../services/user.service";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const UsersList = () => {
    const [users, setUsers] = useState({});  // Important, default need to be empty object
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchUsers = async () => {
        try {
            const users  = await userService.retrieveAllUsers();
            setUsers(users);
        } catch (error) {
            const retrieveErrorMessage = () => {
                const apiErrorMessage = error?.response?.data?.message;

                // Null Coalescing Operator
                return apiErrorMessage ?? 'Error while connecting to the server.';
            };
            setErrorMessage(retrieveErrorMessage());
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Layout>
            {errorMessage ? (
                <h4 className='text-center text-danger fw-bold'>{errorMessage}</h4>
            ) : (
                <>
                    <h3 className='text-center mb-3'>Users</h3>
                    {Object.values(users).map(user => (
                        <Row key={user.id} className='justify-content-center'>
                            <Col lg={4}>
                                <Card>
                                    <Card.Body>
                                        <h4>{user.name}</h4>
                                        <p>{user.email}</p>

                                        {user.city && user.country && (
                                            <p>
                                                {user.city} - {user.country}
                                            </p>
                                        )}
                                        <Button 
                                            variant='primary' 
                                            as={NavLink} 
                                            to={`/edit/${user.id}`}
                                        >
                                            Edit User
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </>
            )}
        </Layout>
    );
};

export default UsersList;
