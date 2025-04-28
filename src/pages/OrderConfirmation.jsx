import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5 py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8} className="bg-light p-5 rounded">
          <h1 className="text-success mb-4">Order Confirmed!</h1>
          <p className="lead mb-4">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          <p className="mb-4">
            We've sent a confirmation email with your order details.
          </p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;