import Image from "../Images/image";

export const experiences = [
  {
 
    title: "FrontEnd Intern",
    company_name: "MobileCoderz Pvt Ltd",
    icon: Image?.Mobilecoderz,
    iconBg: "#383E56",
  
    date: "Jun 2023 - Sep 2023",
    points: [
      "Successfully completed a comprehensive training program on Frontend Development with a focus on ReactJS and NextJS.",
      "Developed and enhanced web applications using ReactJS, HTML, CSS, and JavaScript and gained proficiency in typescript",
      "Collaborated with a team on projects, contributing to increased productivity and high-quality deliverables",
  
    ],
  },
  {
    title: "Software Engineer",
    company_name: "MobileCoderz Pvt Ltd",
    icon: Image?.Mobilecoderz,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Developed Admin Dashboard for a B2B Website with ReactJs and NextJs",
      "Worked on a B2B website in a test driven environment fulfilling client needs and delivering the project on time",
      "Worked with the team and learned to collaborate with the backend team and testing team",
  
    ],
  }
];

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[3rem] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-bold md:text-[3rem] sm:text-[3rem] xs:text-[3rem] text-[30px]",
  sectionSubText: 
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };