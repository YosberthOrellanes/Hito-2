
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Compañia
              </h6>
              <p>Nosotros</p>
              <p>Nuestros Productos</p>
              <p>Politica de Privacidad</p>
            </MDBCol>

            <MDBCol className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Ayuda</h6>
              <p><a href='#!' className='text-reset'>Preguntas</a></p>
              <p><a href='#!' className='text-reset'>Compras</a></p>
              <p><a href='#!' className='text-reset'>Envios</a></p>
            </MDBCol>



            <MDBCol className='icons'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='icon'><FaWhatsapp />  9 906789543</p>
              <p className='icon'> <CiInstagram />  runshoes</p>
              <p className='icon'><BsTwitterX />  @runshoes</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024Copyright:
        <a className='text-reset fw-bold'>RuNsHoEs</a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
