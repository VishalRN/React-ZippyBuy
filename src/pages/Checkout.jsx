import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <section className="checkout-page py-5">
      <Container>
        <Row>
          <Col md={8}>
            <h2 className="mb-4">Checkout</h2>
            
            <Form onSubmit={handleSubmit}>
              <div className="checkout-section mb-4">
                <h4 className="mb-3">Shipping Information</h4>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              
              <div className="checkout-section mb-4">
                <h4 className="mb-3">Payment Method</h4>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    label="Credit/Debit Card"
                    name="paymentMethod"
                    value="creditCard"
                    checked={formData.paymentMethod === 'creditCard'}
                    onChange={handleChange}
                    id="creditCard"
                  />
                </Form.Group>
                
                {formData.paymentMethod === 'creditCard' && (
                  <div className="card-details ps-4">
                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control
                            type="text"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            placeholder="123"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}
                
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    label="PayPal"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                    id="paypal"
                  />
                </Form.Group>
              </div>
              
              <Button variant="primary" type="submit" className="w-100 py-2">
                Place Order
              </Button>
            </Form>
          </Col>
          
          <Col md={4}>
            <div className="order-summary p-4 bg-light">
              <h4 className="mb-3">Order Summary</h4>
              {cartList.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <div>
                    {item.productName} <small>(x{item.qty})</small>
                  </div>
                  <div>${(item.price * item.qty).toFixed(2)}</div>
                </div>
              ))}
              
              <hr />
              
              <div className="d-flex justify-content-between fw-bold">
                <div>Total:</div>
                <div>${totalPrice.toFixed(2)}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;