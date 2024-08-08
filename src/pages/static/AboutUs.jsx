import Layout from "../../components/layout/Layout";
import { Row } from "react-bootstrap";

const AboutUs = () => {
    return (
        <Layout>
            <h3 className="text-center mb-3">About Us</h3>
            <Row className="justify-content-center">
                <div className="text-center">
                    About us. Visit <span className="fst-italic"><a href="https://elyseeniyibizi.me">elyseeniyibizi.me</a></span> to know more about us! Feel free to reach out to us.<br />You are always welcome!
                </div>
            </Row>
        </Layout>
    );
};

export default AboutUs;
