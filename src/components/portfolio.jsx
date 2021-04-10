import React from "react";

//import nteract
import nteract from "../img/nteract.png";
import face from "../img/face.png";
import robot from "../img/robot.png";
import chirper from "../img/chirper.png";
import hacker from "../img/hacker.png";
import lightsout from "../img/lightsout.png";



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
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://my-smart-face-detector.herokuapp.com/">
                  <div className="work-img">
                    <img src={face} alt="" className="img-fluid" />
                  </div>
                  </a>
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
                      <div className="col-sm-4">
                        <a href="https://github.com/celinevalentine/facedetectorfrontend" role="button">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                         </a>
                      </div>
                     
                    </div>
                  </div>
               
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://nteract-games.herokuapp.com/">
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
                      <div className="col-sm-4">
                        <a href="https://github.com/celinevalentine/nteract-games" role="button">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
             <div className="col-md-4">
              <div className="work-box">
                <a href="https://celinevalentine.github.io/robotbuddies/">
                  <div className="work-img">
                    <img src={robot} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Robot Buddies</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                             ReactJS, Tachyons, robohash API, JSONPlaceHolder API
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <a href="https://github.com/celinevalentine/robotbuddies" role="button">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </a> 
              </div>
            </div>
             <div className="col-md-4">
              <div className="work-box">
                <a href="http://chirper-pythonflask.herokuapp.com/">
                  <div className="work-img">
                    <img src={chirper} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Chirper</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                             Python Flask SQLAlchemy PostgreSQL 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <a href="https://github.com/celinevalentine/pythonflask-chirper" role="button">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </a> 
              </div>
            </div>
             <div className="col-md-4">
              <div className="work-box">
                <a href="https://celinevalentine.github.io/hackernews/">
                  <div className="work-img">
                    <img src={hacker} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Hacker News Clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                             HTML, CSS, Javascript (Object Oriented Programming)hackernews API 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <a href="https://github.com/celinevalentine/hackernews" role="button">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </a> 
              </div>
            </div>
             <div className="col-md-4">
              <div className="work-box">
                <a href="https://neonlightsout.netlify.app">
                  <div className="work-img">
                    <img src={lightsout} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lights Out</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                             ReactJS, HTML, CSS
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <a href="https://github.com/celinevalentine/lightsout" role="button">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                        </a>
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
