import { Carousel } from "react-bootstrap";
import ProductCard2 from "./component/product_card2.js";
import { Link } from "react-router-dom";
import React from "react";
 
const Home = props => {
  const { products } = props;
    return (
      <div>
      <section className="">
                <div className="container has-text-centered">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                </div>
    
        </section>
      
        <section className="container">
            <div className="columns features"> 
                <div className="column is-6">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                            <h1 className=" ">Nike</h1>
                        <p className=" ">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-6">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                            <img
                        width="500"
                        className="wall img-fluid"
                        src="../assets/air-max-270.jpeg"
                        alt="jordan shoes"
                      />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns features"> 
                <div className="column is-6">
                    <div>
                        <ProductCard2
                    title="Running Shoes"
                    image="../assets/nike-run.png"
                  />
                    </div>
                </div>
                <div className="column is-6">
                            <ProductCard2
                    title="Causal Shoes"
                    image="../assets/nike-life.png"
                  />     
                </div>
            </div>
            <div className="intro column is-8 is-offset-2">
                <h2 className="title">Perfect for developers or designers!</h2><br />
                <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
            </div>
            <div className="sandbox">
            <div className="d-flex flex-row flex-wrap ">
                  { products.map((product) => (
                    <div
                      key={product.id}
                      id={product.id}
                      className="prodCard"
                    >
                      <Link to={`/detail/${product.id}`}>
                        <div>
                          <div className="card-body glow-on-hover">
                            <div className="title">
                              <div className="mb-2">
                                <button>
                                  <img
                                    width="270"
                                    src="../assets/pegasus.jpeg"
                                    alt="product card"
                                  />
                                </button>
                              </div>
                              <div className="card-title text-left">
                                <h5>{product.name}</h5>
                              </div>
                              <p className="text-left">Men's Shoe</p>
                              <div className="text-left pricing">
                                <h6>{product.price}</h6>
                                {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
        </section>
        </div>
    );
  }
 

export default Home;
