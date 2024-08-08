import Layout from "../../components/layout/Layout";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
    return (
        <Layout>
            <h3 className="text-center mb-3">Contact Us</h3>
            <Row className="justify-content-center">
                <Col md={10}>
                    <p className="text-center">
                        Contact me at{" "}
                        <span className="fst-italic"><a href="mailto:elyseniyibizi502@gmail.com">elyseniyibizi502@gmail.com</a></span>.
                    </p>
                </Col>
            </Row>
        </Layout>
    );
};

export default Contact;
