import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './component/product_card.js';
import ProductCard2 from './component/product_card2.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  return (
    <div className="App">
      <div>
        <header>
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Media</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">About</a>
                </li>
              </ul>
            </div>
    {/* Dropdown cart menu */}
            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag dropbtn" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              </button>
              <div id="myDropdown" className="dropdown-content">
              <p>Cart</p>
              </div>
            </div>
        </nav>
        </div>
        <div className="container text-center">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="logo-div row">
                <img width="95" src="../assets/nike-logo.png" alt="Nike logo"/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
            
            {/* Carousel            */}
            <Carousel plugins={[
              'infinite',
              {
                resolve: autoplayPlugin,
                options: {
                  // 4400
                  interval: 3400,
                }
              },
            ]}
            animationSpeed={1000}>
              <div>
              <div className="card-background">
                <button className="button-h">View</button>
                <img width="985" className="img-fluid" src="../assets/nocta-7.png" />
              </div>
              
              </div>   
              <img width="985" className="img-fluid" src="../assets/nocta-3.jpeg" />
              <img width="985" className="img-fluid" src="../assets/nocta-1.jpeg" />
              <img width="985" className="img-fluid" src="../assets/nocta-4.png" />
              <img width="985" className="img-fluid" src="../assets/nocta-2.jpeg" />
            </Carousel>
            </div>
          </Col>
        </div>
        </header>
        <main>
          <section className="container">
          <div className="row mt-5">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="card-background">
                    <div className="sec-2">
                      <Row><h1 className="title-h">Nike</h1>
                        <p className="para">Esse occaecat eiusmod aliqua veniam. Irure aute qui ad ex. Ut veniam proident culpa consequat et enim incididunt eiusmod do incididunt elit sint ex. Ut veniam nisi in ullamco esse nisi ea irure ex eiusmod exercitation tempor. Ea enim eu ipsum ipsum consectetur fugiat excepteur veniam in consectetur quis ad labore. Nulla do amet ipsum voluptate Lorem dolore ea laborum quis magna ullamco laborum elit. Cillum id excepteur aliqua tempor sint exercitation enim do reprehenderit labore nisi pariatur.</p></Row>

                        <img width="500" className="wall img-fluid" src="../assets/air-max-270.jpeg" alt="jordan shoes"/>
                    </div>
                  </div>
                </Col>
            
                <div className="col-md-6">

                </div>
            </div>
          </section>
          <section>
            <div className="cards">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <ProductCard2 title="Running Shoes" image="../assets/nike-run.png" price="263.99" col="dot blue"/>
                <ProductCard2 title="Causal Shoes" image="../assets/nike-life.png" price="263.99" col="dot blue"/>
              </div>
            </div>
          </section>
          <section className="section-2 container-fluid p-0">
            <div className="cover">
                <div className="content text-center ">
                    <h1>Something to be done</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, vitae fuga! Consectetur, perferendis facilis officia ex, rem itaque animi odio soluta incidunt accusamus dignissimos fuga totam! Aspernatur minus molestiae odit?</p>
                </div>

            </div>
            <div className="container-fluid">
                <div className="sales d-flex flex-md-row flex-wrap justify-content-center">
                    <div className="rect">
                        <h1>Nike Pulse</h1>
                    </div>
                    <div className="rect">
                        <h1>Nike Dunks</h1 >
                    </div>
                    <div className="rect">
                        <h1>Nike Leap</h1>
                    </div>
                </div>

            </div>
            <div className="purchase text-center">
                <h1>Purchase</h1>
                <div className="cards">
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                    <ProductCard title="Nike" image="../assets/pegasus.jpeg" price="263.99" col="dot blue"/>
                    <ProductCard title="Air Jordan 1 Mid" image="../assets/air-jordan.jpeg" price="75.99"/>
                    <ProductCard title="Nike Air Force Max II" image="../assets/air-force-max-ii.jpeg" price="205.99"/>
                    <ProductCard title="Nike" image="../assets/phantom-vision.jpeg" price="263.99"/>
                    <ProductCard title="Air Jordan 1 Mid" image="../assets/air-jordan-11.jpeg" price="75.99"/>
                    <ProductCard title="Nike Air Force Max II" image="../assets/mx-720.jpeg" price="205.99"/>
                    </div>
                </div>
            </div>
        </section>
        </main>
        <footer>
          <Row className="footer">
            <div className="container p-4">
            <div className="row">
              {/* Grid Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>
            <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 4</a>
          </li>
        </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 4</a>
          </li>
        </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">FAQs</h5>
            <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 4</a>
          </li>
        </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Link 4</a>
          </li>
        </ul>
            </div>
            </div>
            </div>
          </Row>
          <Row className="copyright justify-content-center text-center">
            {/* Copyright */}
            <div className="p-4">
              © 2021 Copyright:
              <a className="text-reset fw-bold" href="#"> Isaiah Sylvester</a>
            </div>
            {/* Copyright */}
          </Row>
        </footer>
      </div>
    </div>
  );
}

export default App;
