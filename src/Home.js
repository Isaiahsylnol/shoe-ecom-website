import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import ProductCard2 from "./component/product_card2.js";
import ProductCard from "./component/product_card.js";

const Home = () => {
    return(
        <div className="container-fluid p-0">
            <div>
            <div className="container text-center">
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Carousel>
                    <Carousel.Item interval={500}>
                      <img
                        className="d-block w-100"
                        src="../assets/nocta-3.jpeg"
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        className="d-block w-100"
                        src="../assets/nocta-1.jpeg"
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../assets/nocta-4.png"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../assets/nocta-7.png"
                        alt="fourth slide"
                      />
                      <Carousel.Caption>
                        <h3>fourth slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
               
              </Col>
            </div>
          <main>
            <section className="container">
              <div className="row mt-5">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="card-background">
                    <div className="sec-2">
                      <Row>
                        <h1 className="title-h">Nike</h1>
                        <p className="para">
                          Esse occaecat eiusmod aliqua veniam. Irure aute qui ad
                          ex. Ut veniam proident culpa consequat et enim
                          incididunt eiusmod do incididunt elit sint ex. Ut
                          veniam nisi in ullamco esse nisi ea irure ex eiusmod
                          exercitation tempor. Ea enim eu ipsum ipsum
                          consectetur fugiat excepteur veniam in consectetur
                          quis ad labore. Nulla do amet ipsum voluptate Lorem
                          dolore ea laborum quis magna ullamco laborum elit.
                          Cillum id excepteur aliqua tempor sint exercitation
                          enim do reprehenderit labore nisi pariatur.
                        </p>
                      </Row>

                      <img
                        width="500"
                        className="wall img-fluid"
                        src="../assets/air-max-270.jpeg"
                        alt="jordan shoes"
                      />
                    </div>
                  </div>
                </Col>

                <div className="col-md-6"></div>
              </div>
            </section>
            <section>
              <div className="cards">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <ProductCard2
                    title="Running Shoes"
                    image="../assets/nike-run.png"
                  />
                  <ProductCard2
                    title="Causal Shoes"
                    image="../assets/nike-life.png"
                  />
                </div>
              </div>
            </section>
            <section className="section-2 container-fluid p-0">
              <div className="cover">
                <div className="content text-center ">
                  <h1>Something</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis, vitae fuga! Consectetur, perferendis facilis
                    officia ex, rem itaque animi odio soluta incidunt accusamus
                    dignissimos fuga totam! Aspernatur minus molestiae odit?
                  </p>
                </div>
              </div>
              <div className="container-fluid">
                <div className="sales d-flex flex-md-row flex-wrap justify-content-center">
                  <div className="rect">
                    <h1>Nike Pulse</h1>
                  </div>
                  <div className="rect">
                    <h1>Nike Dunks</h1>
                  </div>
                  <div className="rect">
                    <h1>Nike Leap</h1>
                  </div>
                </div>
              </div>
              <div className="purchase text-center">
                <h1>Purchase</h1>
                <div className="d-flex flex-row flex-wrap">
                  <ProductCard />
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
                        <a href="#!" className="text-dark">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Contact</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-dark">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">FAQs</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-dark">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-dark">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-dark">
                          Link 4
                        </a>
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
                <a className="text-reset fw-bold" href="#!">
                  {" "}
                  Isaiah Sylvester
                </a>
              </div>
              {/* Copyright */}
            </Row>
          </footer>
        </div>
      </div>
    )
}

export default Home;