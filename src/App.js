import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './component/product_card.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {
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
        </nav>
        </div>

        <div className="container text-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="logo-div row">
                <img width="95" src="../assets/nike-logo.png" alt="Nike logo"/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
            <Carousel plugins={[
              'infinite',
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 4400,
                }
              },
            ]}
            animationSpeed={1000}>
              <img width="845" className="img-fluid" src="../assets/nocta-2.jpeg" />
              <img width="845" className="img-fluid" src="../assets/nocta-3.jpeg" />
              <img width="845" className="img-fluid" src="../assets/nocta-2.jpeg" />
            </Carousel>
            </div>
          </div>
        </div>
        </header>
        <main>
          <section className="container">
          <div className="row mt-5">
                <Col xl={4} lg={5} md={2} sm={2} xs={2}>
                    <div >
                        <img width="500" src="../assets/air-max-270.jpeg" alt="jordan shoes"/>
                    </div>
                </Col>
                <div className="col-md-6">
                    <div className="panel text left">
                        <h1>Nike's Latest</h1>
                        <p>you have to also be exporting the images from somewhere in order to be able to import them anywhere and not just from within the same directory, Which is what would be the case if they were not being exported. They would have to reside in the same directory as the component they were being imported into. You will notice that with any new React app created with CRA for example, the logo.svg file resides in the same directory as App.js, where it is imported. I wrote a piece on importing images in React here:</p>
                    </div>
                </div>
                <div className="col-md-6">

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

        </footer>
      </div>
    </div>
  );
}

export default App;
