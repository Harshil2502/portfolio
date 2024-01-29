import React from "react";
import { motion as m } from "framer-motion";
import { slideAnimation } from "../../Assets/motion";
function Skills() {
  return (
    <m.div id="skills" {...slideAnimation("left")} className="w-full min-h-screen bg-[#030014] flex items-center justify-center flex-col pt-[4rem]  ">
      <p className="text-gray-200 text-[3rem] p-5 font-bold">Skills </p>
      &#123
      <m.div className="bg-[#ffffff10] backdrop-blur-sm  w-[75%] text-white flex justify-center items-center text-xl code p-5 rounded-md">
        <div>
          <p className="code text-blue-500 py-2 w-[90%] text-left">
            {" "}
            My_Profile = <span className="code text-yellow-500">{"{"} </span>{" "}
          </p>
          <p className="code text-cyan-200 py-2 px-10">
            {" "}
            Programing_Languages: <span className="code text-[#e79049]">"Typescript/Javascript" </span>,
          </p>
          <p className="code  text-cyan-200 py-2 px-10">
            {" "}
            Programing_Skills:<span className="code text-[#e79049]"> "DataStructure and Alogrithm DBMS OOPS"</span>,
          </p>
          <p className="code  text-cyan-200 py-2 px-10">
            {" "}
            Frontend_Skills:<span className="code text-purple-700">{"{"} </span>
          </p>
          <p className="code text-cyan-200 py-2 px-20"> Basic: <span className= " code text-[#e79049]">"Html Css JavaScript"</span>,</p>
          <p className="code  text-cyan-200 py-2 px-20">
            {" "}
            Javascript_Libraries: <span className="code text-[#e79049]">"NextJs ReactJs ReactQuery Axios React-Hook-Form
            etc"</span>,
          </p>
          <p className=" code text-cyan-200 py-2 px-20">
            {" "}
            UI_Libarries: <span className="text-[#e79049] code">"MaterialUI HeadlessUI Bootstrap TailwindCss etc"</span> ,
          </p>
          <p className="code  text-cyan-200 py-2 px-20">
            {" "}
            State_Management:  <span className= "code text-[#e79049]">"Redux RecoilJs Rxjs etc",</span>
          </p>
          <span className= "code text-purple-700 pl-[80px]">{"}"}</span>,
          <p className="code  text-cyan-200 py-2 px-10" >
            Version_Control:{" "}
            <span className="code text-[#e79049] py-2">"Git GitHub"</span>
          </p>
          <p className="code  text-cyan-200 py-2 px-10">
            {" "}
            My_Projects:<span className="code text-purple-700">{"{"} </span>
          </p>
          <p className="code text-cyan-200 py-2 px-20"> 1: <span  className= " code text-[#e79049]">CrypoCurrency PriceTracker App"</span>,</p>
          <p className="code  text-cyan-200 py-2 px-20">
            {" "}
            2: <span className="code text-[#e79049]">"B2B Website "</span>,
          </p>
          <p className=" code text-cyan-200 py-2 px-20">
            {" "}
            3: <span className="text-[#e79049] code">"MultiMedia Website"</span> ,
          </p>
          <p className="code  text-cyan-200 py-2 px-20">
            {" "}
           4:  <span className= "code text-[#e79049]">"Admin Dashboard"</span>,
          </p>
          <p className="code  text-cyan-200 py-2 px-20">
            {" "}
           5:  <span className= "code text-[#e79049]">"User Login/SignIn Authentication Page"</span>
          </p>
          <span className= "code text-purple-700 pl-[80px]">{"}"}</span>,
          <br/>
          <span className="code text-yellow-500 pl-[30px]">{"}"}</span>
        </div>
      </m.div>
    </m.div>
  );
}

export default Skills;
