import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaRegQuestionCircle } from 'react-icons/fa';
import './style.css';
import './faq.css';

function Faqcard(props) {
  return (
    <li data-aos="fade-up" data-aos-delay="100">
    <i className="bx bx-help-circle icon-help" style={{fontSize:"25px"}}><FaRegQuestionCircle/></i> 
    <a data-toggle="collapse" className="collapse " data-target={props.targetdata}>
     <span className="style">{props.faq}</span> 
      <i class="bx bx-chevron-down icon-show">
        <FaChevronDown/></i>
        <i class="bx bx-chevron-up icon-close"><FaChevronUp/></i></a>
    <div id={props.target} class="collapse show" data-parent=".faq-list">
      <p>
          {props.reply}
        </p>
    </div>
  </li>
  );
}

export default Faqcard;


