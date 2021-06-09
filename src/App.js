import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './component/product_card.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <div className="App">
      <body>
        <header>
        <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Media</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">About</a>
                </li>
              </ul>
            </div>
        </nav>
        </div>

        <div class="container text-center">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="logo-div row">
                <img width="95" src="../assets/nike-logo.png" alt="Nike logo"/>
            </div>
            <Jumbotron className="justify-center">
              <img className="img-fluid" src="../assets/nocta-2.jpeg" alt="Nike"/>
            </Jumbotron>
          </div> 
        </div>
        </header>
        <main>
          <section class="container">
          <div className="row mt-5">
                <Col xs={6} md={5}>
                    <div class="sprint">
                        <img src="../assets/air-max-270.jpeg" alt="jordan shoes"/>
                    </div>
                </Col>
                <div class="col-md-6">
                    <div className="panel text left">
                        <h1>Nike's Latest</h1>
                        <p>you have to also be exporting the images from somewhere in order to be able to import them anywhere and not just from within the same directory, Which is what would be the case if they were not being exported. They would have to reside in the same directory as the component they were being imported into. You will notice that with any new React app created with CRA for example, the logo.svg file resides in the same directory as App.js, where it is imported. I wrote a piece on importing images in React here:</p>
                    </div>
                </div>
                <div class="col-md-6">
                    
                </div>
            </div>
          </section>
          <section class="section-2 container-fluid p-0">
            <div class="cover">
                <div class="content text-center ">
                    <h1>Something to be done</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, vitae fuga! Consectetur, perferendis facilis officia ex, rem itaque animi odio soluta incidunt accusamus dignissimos fuga totam! Aspernatur minus molestiae odit?</p>
                </div>

            </div>
            <div class="container-fluid">
                <div class="sales d-flex flex-md-row flex-wrap justify-content-center">
                    <div class="rect">
                        <h1>Nike Pulse</h1>
                    </div>
                    <div class="rect">
                        <h1>Nike Dunks</h1 >
                    </div>
                    <div class="rect">
                        <h1>Nike Leap</h1>
                    </div>
                </div>

            </div>
            <div class="purchase text-center">
                <h1>Purchase</h1>
                <div class="cards">
                    <div class="d-flex flex-row justify-content-center flex-wrap">
                    <ProductCard title="Nike" image="../assets/pegasus.jpeg" price="263.99"/>
                    <ProductCard title="Air Jordan 1 Mid" image="../assets/air-jordan.jpeg" price="75.99"/>
                    <ProductCard title="Reebok" price="205.99"/>
                    </div>
                </div>
            </div>
        </section>
        </main>
        <footer>

        </footer>
      </body>
    </div>
  );
}

export default App;
