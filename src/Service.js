
// import "./style.css";
// import {FaDribbble, FaFile,FaLayerGroup,FaTachometerAlt} from "react-icons/fa";
// // import Register from './Register';
// // import LoginModal from "./LoginModal";
// // <div class="text-center">
// //   <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLRForm">Launch
// //     Modal Register Form</a>
// // </div>
// //  <Register/>
// //  <LoginModal/>

// function Service() {
//   return (
    
//     <section id="services" class="services section-bg">
       
        
//     <div class="container" data-aos="fade-up">

//       <div class="section-title">
//         <h2>Services</h2>
//         <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
//       </div>

//       <div class="row">
//         <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
//           <div class="icon-box">
//             <div class="icon"><i><FaDribbble/></i></div>
//             <h4><a href="">Lorem Ipsum</a></h4>
//             <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
//           </div>
//         </div>

//         <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
//           <div class="icon-box">
//             <div class="icon"><i><FaFile/></i></div>
//             <h4><a href="">Sed ut perspici</a></h4>
//             <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
//           </div>
//         </div>

//         <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
//           <div class="icon-box">
//             <div class="icon"><i><FaTachometerAlt/></i></div>
//             <h4><a href="">Magni Dolores</a></h4>
//             <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
//           </div>
//         </div>

//         <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
//           <div class="icon-box">
//             <div class="icon"><i><FaLayerGroup/></i></div>
//             <h4><a href="">Nemo Enim</a></h4>
//             <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
//           </div>
//         </div>

//       </div>

//     </div>
//   </section> 
//   );
// }

// export default Service;


import ServiceCard from './ServiceCard';
import "./style.css";
import {FaDribbble, FaFile,FaLayerGroup,FaTachometerAlt} from "react-icons/fa";



function Service() {
  return (
    
    <section id="services" class="services section-bg">
        
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Services</h2>
        <p>Time to end your worries on anything related to your Construction work, letusbuild is here with you , From building Materials to Construction Team to Architect and Plumbing or Electrical Services and many more we are here.</p>
      </div>

      <div class="row">

      <ServiceCard 
       heading="Building Materials"
       data="One stop solution for your Building Materials needs"
      />
      <ServiceCard
       heading="Construction Team"
       data="Need any rennovations or Project from scratch ,Team of experienced professionals is here"
      />
      <ServiceCard
       heading="Plumbing Services"
       data="All your Sanitary Rennovations and Repair Work is our Headache now Just book your time slot"
      />
      <ServiceCard
       heading="Electrician"
       data="Neeed any RepairWork or rennovations in previous fiitings just register yourself our team will be their with you."
      />


      </div>

    </div>
  </section> 
  );
}

export default Service;