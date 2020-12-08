import React from 'react';
// import {Link} from 'react-router-dom';
import homeImg from "../images/blockchain.png";
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
                    Primer prototipo de <strong className="brand-name">Smart Contract</strong> en una <strong className="brand-name">Blockchain</strong> para el manejo de transacciones en mercados energeticos.
                  </h1>
                  <h2 className="my-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus molestias voluptates rem et nihil aliquid tempora error, laudantium qui? Necessitatibus ipsa quos itaque perspiciatis veritatis, adipisci quasi dicta amet labore.
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
                      <h5 className="card-title font-weight-bold">Titulo1</h5>
                      <h5 className="card-title price">info</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe, praesentium adipisci, sequi hic assumenda sed animi similique quisquam, consectetur consequuntur nulla quaerat ipsam aspernatur quos magni nostrum dignissimos numquam?</p>
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

