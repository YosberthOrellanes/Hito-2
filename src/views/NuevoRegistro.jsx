import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const NuevoRegistro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí va la lógica para manejar el registro del formulario
  };

  const handleGoogleSignIn = () => {

  };

  return (
    <section className="registro-section">
      <h1 className="title">Regístrate ¡Es gratis!</h1>

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
          />
        </Form.Group>

        <Form.Group controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </Form.Group>

        <Form.Group controlId="confirm-password">
          <Form.Label>Confirma tu contraseña</Form.Label>
          <Form.Control
            type="password"
            name="confirm-password"
            placeholder="Confirma tu contraseña"
            required
          />
        </Form.Group>

        <br />
        <Link to="/">
          <Button type="submit">Crea tu cuenta</Button>
        </Link>
      </Form>

      <p>¿Ya tienes una cuenta? <Link to="/iniciosesion"><b>Inicia sesión</b></Link></p>

      <Footer />
    </section>
  );
};

export default NuevoRegistro;
