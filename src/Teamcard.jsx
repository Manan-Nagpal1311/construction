
import { NavLink } from 'react-router-dom';
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

function Teamcard(props) {
  return (
    <div class="col-lg-4 mb-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFYzEVJIkSPAg/profile-displayphoto-shrink_800_800/0/1620065946219?e=1625702400&v=beta&t=Rs0PhzphTd7HkIvDHsHnKxhbp44BATwbTaE5VqvJsYg" class="img-fluid" alt=""/></div>
              <div class="member-info">

                <h4>{props.name}</h4>
                <span>Co-Founder</span>
                <p>{props.about}</p>
                <div class="social">
                  <a target="blank" href=""><FaTwitter /></a>
                  <a target="blank" href=""><FaInstagram/></a>
                  <a target="blank" href=""><FaFacebook/></a>
                  <a target="blank" href={props.imgsrc} ><FaLinkedinIn/></a>
                </div>
              </div>
            </div>
          </div>
  );
}

export default Teamcard;
