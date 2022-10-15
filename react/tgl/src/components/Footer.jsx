import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' color='white' className='text-center text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Síguenos para estar al tanto de nuevos lanzamientos:</span>
        </div>
        <div>
          <a rel="noreferrer" href="https://www.instagram.com/theglasslab.cl/" target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>
                The Glass Lab
              </h6>
              <p>
                Descripcion de la empresa
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>Menú</h6>
              <p>
                <a href='/' className='text-reset'>Inicio
                </a>
              </p>
              <p>
                <a href='/apedido' className='text-reset'>A Pedido
                </a>
              </p>
              <p>
                <a href='/cart' className='text-reset'>Carrito
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>Productos</h6>
              <p>
                <a href='/anillos' className='text-reset'>Anillos
                </a>
              </p>
              <p>
                <a href='/pulseras' className='text-reset'>Pulseras
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='fw-bold mb-4'>Contact</h6>
              <p>
                <a href='/nosotros' className='text-reset'>Nosotros
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:{' '}
        <a className='text-reset fw-bold' href='/'>TheGlassLab
        </a>
      </div>
    </MDBFooter>
  );
}