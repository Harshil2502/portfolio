// import React from "react";


// function Footer() {
  
//   return (
//     <div className="w-full h-[200px]  bg-[#ffffff0e] backdrop-blur-sm flex items-center justify-center flex-col ">
 
// <div >

//   <p className="text-white z-50 cursor-pointer  py-1">developed By <span onClick={()=>{
//     window.open('www.linkedin.com/in/harshil-sharma-8923b1205', '_blank');
//   }} className="text-blue-700 cursor-pointer py-1">Harshil</span></p>

//  <p className="text-white z-50 cursor-pointer text-left py-1">email:sharmaharshil5212@gmail.com</p>
//  <p className="text-white z-50 cursor-pointer text-left py-1">phone:+91 9068999678</p>
// </div>
// </div>
//   );
// }

import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { AiOutlineTwitter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
 function Footer () {
  const naigate = useNavigate()
  return (
    <div>
      <div className="footer  bg-[#ffffff10] z-50">
        <div className="footericons">
          <span onClick={()=>{window.open("https://www.linkedin.com/in/harshil-sharma-8923b1205/  ")}}>
         
            <BiLogoLinkedin />
           
          </span>
          <span onClick={()=>{window.open("https://github.com/Harshil2502")}}>
            <PiGithubLogoFill />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
        </div>
        <div className="footer-text">
          <span>info </span>
          <span>support </span>
          <span>marketing </span>
        </div>
        <div className="footer-text">
          <span>term of use</span>
          <span>privacy use</span>
        </div>
        <div className="footer-text">
          <span>&copy; 2024 harshil sharma</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
