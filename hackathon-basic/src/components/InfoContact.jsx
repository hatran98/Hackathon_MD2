import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/InfoContact.css";
function InfoContact(props) {
  const { contact } = props;
  const { name, email, phone, message } = contact;

  return (
    <Form style={{ margin: "30px" }}>
      <div className="editForm" style={{ fontSize: "30px" }}>
        Contact Info
      </div>
      <Form.Group className="mb-3 editForm" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          className="editInPut"
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3 editForm" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="editInPut"
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3 editForm" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter Phone"
          className="editInPut"
          value={phone}
        />
      </Form.Group>
      <Form.Group className="mb-3 editForm" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          placeholder="Message"
          className="editInPut"
          value={message}
        />
      </Form.Group>
    </Form>
  );
}

export default InfoContact;
