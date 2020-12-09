import React from 'react';
// import {Link} from 'react-router-dom';
import homeImg from "../images/blockchain3.png";
// import wallpaper from "../images/blockchain-logo.png";
// import ReactGA from 'react-ga';

function Home() {
  // ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      {/* <div className="imgWrapper">
        <img src={wallpaper} alt=""/>
      </div> */}
      <section id="header" className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row center-content">
                <div className="homeText pt-5 pt-lg-0 col-sm-12 col-md-6 col-lg-6 order-sm-2 order-md-2 order-lg-2">
                  <h1>
                  PROTOTIPO DE <strong className="brand-name">APLICACIÓN WEB</strong> PARA LA GESTIÓN DE DATOS EN COOPERATIVAS ENERGÉTICAS.
                  </h1>
                  <h2 className="my-3">
                    Primer prototipo de aplicación web para el manejo de transacciones sobre una cadena de bloques.
                  </h2>
                  <h2 className="my-3">
                    Alejandro Trujillo López - Guillermo León Uribe Guzmán
                  </h2>
                  
                  <div className="mt-3 pt-3">
                    <a href="http://localhost:55555" rel="noopener noreferrer" target="_blank" className="btn-get-started">Ver dashboard</a>
                  </div>
                </div>
                <div className="homeImg header-img col-sm-12 col-md-6 col-lg-6 order-sm-1 order-md-1 order-lg-1">
                  {/* <img src={homeImg} className="img-fluid animated" alt="home img"></img> */}
                  <div className="card foodcard-container">
                    <div className='d-flex justify-content-center mx-auto'>
                      <img className="card-img-top img-fluid" src={homeImg} alt="card"></img>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">Presentación</h5>
                      {/* <h5 className="card-title price">info</h5> */}
                      <p className="card-text">Este trabajo tiene como objetivo desarrollar un prototipo de aplicación web para la gestión de datos en las cooperativas energéticas, el cual será elaborado por medio de frameworks web y la implementación de la tecnología de cadena de bloques y contratos inteligentes, en donde se mostrarán al usuario final los datos de las transacciones.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </section>
    </>
  );
}

export default Home;

