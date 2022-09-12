import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function APedido() {
  return (
    <div className="container">
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Cuéntanos sobre el accesorio que quieres pedir</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Accesorio a pedir"/>
        </Form.Group>
        <Button type="submit" style={{color: "#FFFFFF"}}>
            Pedir
        </Button>
        </Form>
    </div>
  );
}

export default APedido;