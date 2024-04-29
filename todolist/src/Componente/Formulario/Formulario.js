
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';

function Formulario() {
  return (
    <div className='FormularioGeneral'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre del curso</Form.Label>
          <Form.Control type="name" placeholder="Ingresa nombre del curso" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="description" placeholder="Descripción del curso" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Fecha límite</Form.Label>
          <Form.Control type="date" placeholder="Ingrese fecha" />
        </Form.Group>

        <Button variant="success" type="submit">
          Añadir objetivo
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;