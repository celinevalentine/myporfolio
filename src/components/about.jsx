import React from "react";
// import myImage from "../img/myImage.png";
//https://codepen.io/wind_hill/pen/rLAKLx


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "85%", value: "85" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
      
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "SQL_skill",
          content: "SQL/PostgreSQL",
          porcentage: "90%",
          value: "90"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "As a tech-savvy online STEM educator, I have been always curious about web applications. I started my first line of code eight years ago when I built a first website for my online classrooms as well as business websites for my family members with WordPress. My problem-solving inclination and curiosity eventually led me to change my career to become a full-time software engineer." 
        },
        {
          id: "second-p-about",
          content:
            "Currently, I am working as a pro bono founding full-stack engineer at nteract, a startup company that helps people improve their social skills with game applications. Meanwhile, I am actively seeking full-time positions as a frontend, backend or full-stack software developer at reputable companies that value applicants with a non-traditional background. "
        },
    
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                             <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://resume.creddle.io/resume/tmnd143dbr"
                  role="button"
                >
                  My Resume
                </a>
              </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </section>
    );
  }
}

export default About;
