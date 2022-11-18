import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";


function BasicExample() {
  return (
    <div className='app'>
      <Form className='App'>
    <Form.Label className='entete'>Formulaire de contact</Form.Label>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prènom</Form.Label>
        <Form.Control type="text" placeholder="Prenom" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="phone" placeholder="Téléphone" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Mot de passe" placeholder="Password" />
    </Form.Group>

    <Button variant="secondary" type="submit" >
        Submit
    </Button>
</Form>
    </div>
  );
}

export default BasicExample;
      