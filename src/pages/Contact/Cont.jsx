import React from "react";
import "./Cont.css";
import logo1 from '../../images/contact.png';
import logo2 from '../../images/map.png';

import { Link } from "react-router-dom";

function Cont() {
  return (
    <div className="cont_home">
      <section className="cont_hed">
        <div className="cont">
          <h1>Contact Us </h1>
          <div
            className="title_decoration"
            style={{ height: "0.6rem", width: "35vh", "margin-right": "7vh", "marginTop":"2vh" }}
          >
            {" "}
            hello
          </div>
           
          <br />
          <img src={logo1} alt="details" />
        </div>
      </section>

      <section className="Cont_Cards">
        <div className="cont_types">
          <div className="cont_type1">
            {/* <img src={logo2} alt="maps" /> */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.859493968734!2d77.26904477495351!3d28.543942688099083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1721920970948!5m2!1sen!2sin"
            //   style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            //   width="100%"
            //   height="auto"
            width="200" height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="location"
            ></iframe>

            <p className="discription">
              {" "}
              Locate us on Maps.
            </p>
          </div>

          <div className="cont_type1">
            <p>
             Contact Us
            </p>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email ID" />
              <textarea placeholder="Query"></textarea>
              <button type="submit" className="cont_btn">Submit Details</button>
            </form>


        </div>

        

                 
        </div>
      </section>
    </div>
  );
}

export default Cont;