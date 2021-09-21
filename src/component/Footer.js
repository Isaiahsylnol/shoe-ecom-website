import Row from 'react-bootstrap/Row'
import React from 'react';

const Footer = (props) =>{
    return(<div>
        <section>
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

        </section>
    </div>);

}

export default Footer