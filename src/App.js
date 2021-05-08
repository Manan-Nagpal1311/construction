import logo from './logo.svg';
import x from './Studio_Project.jpeg';
import './App.css';
import {Navbar, Nav, NavItem,Form ,FormControl,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Header from "./Header";
import Hero from './Hero';
import Plans from './Plans';
import US from './US';
import PdComp from './PdComp';
import Service from "./Service";
import Team from "./Team";
import Show from "./Show";
import Contact from "./Contact";
import About from './About';
import Footer from './Footer';
import FAQ from "./Frequentlyaskedquestions";
import Products from './Products';
import Portfolio from './Portfolio';


function App() {
  return (
    
    <div>
       
     <Header />
     <Hero/>
     <Products/>
     <About/>
     <Service />
     <Plans/>
     <US/>
     <Show/>
     <FAQ/>
     <Portfolio/>
     <Contact />
     <Team />
     <Register/>
     {/* <a href="#" class="back-to-top"><i class="fas fa-chevron-up" ></i></a>
    <div id="preloader"></div> */}
    <Footer/>
    </div>
  );
}

export default App;
