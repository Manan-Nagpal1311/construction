import './style.css';
import React from 'react';
import Faqcard from './Faqcard';
import { FaChevronUp,FaChevronDown, FaRegQuestionCircle } from 'react-icons/fa';
import Faqdata from './Faqdata';



export default function FAQ() {
 return (
    <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="faq-list">
      <ul>
      {
              Faqdata.map((val,ind) =>{
                return <Faqcard
                 key={ind}
                 faq={val.faq}
                 target={val.target}
                 reply={val.reply}
                 targetdata={val.targetdata}
                />
              })
            }
        </ul>
      </div>

    </div>
  </section>
  );
}
