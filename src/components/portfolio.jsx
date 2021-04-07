import React from "react";

//import nteract
import nteract from "../img/nteract.png";
import face from "../img/face.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                {/* <p className="subtitle-a">
                </p> */}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://my-smart-face-detector.herokuapp.com/" data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={face} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Smart Face Detector</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            NodeJS, Express, PostgreSQL, ReactJS, Clarifai API(AI face detection technology)
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a> 
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={nteract} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={nteract} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Nteract Game App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                             NodeJS, Express, PostgreSQL, ReactJS, Auth0, customized RESTful API 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>  
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
