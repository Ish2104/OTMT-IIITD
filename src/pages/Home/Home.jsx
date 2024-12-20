import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import logo1 from "../../images/logo_1.jpg";
import logo2 from "../../images/logo_2.jpg";
import logo3 from "../../images/logo_3.jpg";
import logo4 from "../../images/logo_4.jpg";

function Home() {
  return (
    <div className="home">
      <section className="otmt_section">
        <div className="otmt">
          <h1>Office of Technology Management and Transfer</h1>
          <br />
          <div
            className="title_decoration"
            style={{
              height: "0.6rem",
              width: "35vh",
              marginRight: "7vh",
              marginTop: "1vh",
            }}
          ></div>
          <br />
          <p>
            At IIIT Delhi, we are driven by innovation, collaboration, and the
            pursuit of a brighter future. Our multifaceted Office of Technology
            Management and Transfer (OTMT) is at the forefront of fostering
            positive change, advancing technology, and ensuring innovation has a
            long lasting impact.
          </p>
          <br />
          <p>
            Innovation is at the heart of what we do. The division is dedicated
            to the advancement, commercialization, and licensing of technology
            and intellectual assets generated by our talented faculty,
            researchers, students, and collaborators and also supports students,
            faculty and researchers and Entrepreneurs who need our expertise.
          </p>
        </div>
      </section>

      <section className="what-we-do">
        <div id="what_we_do">
          <h2>What we do</h2>
          <div
            className="title_decoration"
            style={{ height: "0.25rem", width: "35vh", marginRight: "7vh" }}
          ></div>
          <div className="services">
            <div className="service-item">
              Creating Awareness and Sensitization
              <p>
                We raise awareness about technology and innovation, ensuring
                that promising ideas don't go unnoticed.
              </p>
            </div>
            <div className="service-item">
              Find the best ways to sell Innovations
              <p>
                We help figure out the smartest ways to market new inventions so
                they stand out and reach the right people.
              </p>
            </div>
            <div className="service-item">
              Finding and getting new Tech
              <p>
                We actively look for and help buy the latest technology and
                intellectual property for companies, whether it’s from IIIT
                Delhi or elsewhere.
              </p>
            </div>
            <div className="service-item">
              Teaming up for special Research
              <p>
                We work closely with partners to dive deep into research, either
                to come up with new inventions or to explore new ways of doing
                things in the business world.
              </p>
            </div>
            <div className="service-item">
              Supporting Intellectual Properties
              <p>
                We assist in managing intellectual property rights, protecting
                innovations, and navigating the world of patents and copyrights.
              </p>
            </div>
            <div className="service-item">
              Easing the handover of Technology
              <p>
                We make the process of passing new technologies from creators to
                users or companies smooth and trouble-free.
              </p>
            </div>
            <div className="service-item">
              Linking Up Innovators
              <p>
                We connect people who create new technologies with those who
                might want to use them, invest in them, or work with them to
                bring these ideas to life.
              </p>
            </div>
            <div className="service-item">
              Assessing Commercial Potential
              <p>
                We evaluate the commercial viability of innovations and offer
                strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="buttons-container">
        <Link to="/stu_res">
          <button className="cus_button">
            Resources for Students
          </button>
        </Link>
        <Link to="/Fac_Res">
          <button className="cus_button">
            Resources for Faculty
          </button>
        </Link>
        <Link to="/Ipr">
          <button className="cus_button">Apply for IPR</button>
        </Link>
        <Link to="/Collaborate">
          <button className="cus_button">Commercialize your Technology</button>
        </Link>
        <Link to="/Startup">
          <button className="cus_button">Start a Venture</button>
        </Link>
      </div>

      <section className="technology-highlights">
        <div id="technology_highlights">
          <h2>Technology Highlights</h2>
          <div
            className="title_decoration"
            style={{ height: "0.25rem", width: "25vw" }}
          ></div>

          <div className="highlights">
            <div className="highlight-item">
              <img src={logo1} alt="Seek and Suspect" />
              <p>Seek and Suspect</p>
              <p className="text">
                The novel aspect of this project lies in an innovative and fully
                automated technology for facial image retrieval in criminal
                investigations.
              </p>
              <a
                href="/Brochure_New/SEEKnSUSPECT_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>

            <div className="highlight-item">
              <img src={logo2} alt="Cloud Labs" />
              <p>Cloud Labs</p>
              <p className="text">
                Cloud Lab is an innovative platform at the forefront of
                reshaping hands-on learning for the digital era.
              </p>
              <a
                href="/Brochure_New/Cloud_labs_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>

            <div className="highlight-item">
              <img src={logo3} alt="TATDC" />
              <p>TATDC</p>
              <p className="text">
                The Trainer and Tester for Digital Circuits (TATDC) is an
                innovative project that leverages advanced technology to provide
                a comprehensive solution for digital circuit experimentation.
              </p>
              <a
                href="/Brochure_New/TATDC_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>

            <div className="highlight-item">
              <img src={logo4} alt="FOODLE" />
              <p>FOODLE</p>
              <p className="text">
                Foodle, a culinary word game, capitalizes on the intrinsic
                connection between language and food.
              </p>
              <a
                href="/Brochure_New/Foodle_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="brochure_btn">Brochure</button>
              </a>
            </div>
          </div>
         
          <div className="back_block"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
