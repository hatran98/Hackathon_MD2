import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact(props) {
  const { info, setInfo, setContact } = props;

  const { name, email, phone, message } = info;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert("k đc để trống gì cả");
    } else {
      setContact(info);
      setInfo({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ fontSize: "30px" }}>Contact Us</div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={handleChange}
          value={name}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter Phone"
          onChange={handleChange}
          value={phone}
          name="phone"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={handleChange}
          value={message}
          name="message"
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ textAlign: "center" }}>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
