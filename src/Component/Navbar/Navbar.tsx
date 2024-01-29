import React from "react";

const Navbar = () => {
  const downloadResume = ()=>{
    window.open("https://drive.google.com/file/d/1Le0VNIVkDmtsNngAcXI0kfkofqevmc7t/view")
  }
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto ">
        <a
          href="#AboutMe"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold text-3xl px-3 ml-[10px] hidden md:block  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300">
            HARSHIL
          </span>
        </a>

        <div className="w-[700px] float-right h-full flex flex-row items-center justify-between md:mr-10">
          <div className="flex items-center justify-between w-full h-auto  bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              className="group text-gray-200 transition-all duration-300 ease-in-out"
              href="#AboutMe"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-gray-200 to-gray-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                About me
              </span>
            </a>
            <a
              className="group text-gray-200 transition-all duration-300 ease-in-out"
              href="#skills"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-gray-200 to-gray-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Skills
              </span>
            </a>
            <a
              className="group text-gray-200 transition-all duration-300 ease-in-out"
              href="#experience"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-gray-200 to-gray-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Work Experience
              </span>
            </a>
            <a
              className="group text-gray-200 transition-all duration-300 ease-in-out"
             href="/#"
            >
              <span  onClick={downloadResume} className="bg-left-bottom bg-gradient-to-r from-gray-200 to-gray-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out" 
              >
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
