import React from 'react';
import "./style.scss";
import AboutImg from "../../assets/images/imgme.jpg"
import CV from "../../../public/CV.pdf"
import Info from './Info';
import { HiDocumentText } from "react-icons/hi"

const index = () => {
   return (
      <section className="about section" id='about'>
         <h2 className="section__title">About Me</h2>
         <span className="section__subtitle">My introduction</span>

         <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
               {/* <Info /> */}

               <p className="about__description">
                  Frontend devoloper , I create web pages with React JS
               </p>

               <a href={CV} download="" className="className='button btnSayHello button--flex btn__cv">Download CV
                  
                 <HiDocumentText fontSize="1.1em"     style={{margin:"0 5px"}}/>
               </a>
            </div>
         </div>

      </section>
   );
};

export default index; <h1>About</h1>