import { BsArrowRight } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import ExperienceTable from "./experienceTable";
import ufsmLogo from "../../public/ufsm-logo.png";
import compassoLogo from "../../public/compasso-logo.png";
import ibmLogo from "../../public/ibm-logo.png";
import nodeJs from "../../public/nodeJs_logo.png";
import react from "../../public/react_logo.png";
import docker from "../../public/docker_logo.png";
import kubernets from "../../public/kubernets_logo.png";
import typescriptLogo from "../../public/typescript-logo.png";
import springbootLogo from "../../public/springboot-logo.png";
import javascriptLogo from "../../public/javascript-logo.png";
import htmlLogo from "../../public/html-logo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = () => {
  return (
    <div className="w-full flex flex-col" id="experience">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce>
        <div className="flex row justify-center w-full pt-20 font-roboto font-bold gap-16 items-center  ">
          <br />
          <h2 className="text-blue-600 lg:text-5xl md:text-2xl">EXPERIENCE</h2>
          <BsArrowRight className="text-6xl" />
          <h2 className="text-blue-600 lg:text-5xl md:text-2xl">WHERE</h2>
          <BsArrowRight className="text-6xl" />
          <h2 className="text-blue-600 lg:text-5xl md:text-2xl">
            TECHNOLOGIES
          </h2>
        </div>
      </AnimationOnScroll>
      <div className="w-full flex flex-col pt-40 gap-10">
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          duration={1}
          animateOnce
        >
          <ExperienceTable
            year="1 year"
            logo={ibmLogo}
            link="https://www.ibm.com/br-pt"
            tech={[
              {
                img: react,
                color: "hover:border-cyan-400",
                link: "https://pt-br.reactjs.org/",
              },
              {
                img: nodeJs,
                color: "hover:border-green-400",
                link: "https://nodejs.org/en/",
              },
              {
                img: kubernets,
                color: "hover:border-blue-400",
                link: "https://kubernetes.io/pt-br/",
              },
              {
                img: docker,
                color: "hover:border-blue-400",
                link: "https://kubernetes.io/pt-br/",
              },
            ]}
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          duration={2}
          animateOnce
        >
          <ExperienceTable
            year=" 8 months"
            logo={compassoLogo}
            link="https://compass.uol/en/home/"
            tech={[
              {
                img: react,
                color: "hover:border-cyan-400",
                link: "https://pt-br.reactjs.org/",
              },
              {
                img: nodeJs,
                color: "hover:border-green-400",
                link: "https://nodejs.org/en/",
              },
              {
                img: typescriptLogo,
                color: "hover:border-blue-400",
                link: "https://www.typescriptlang.org/",
              },
              {
                img: javascriptLogo,
                color: "hover:border-yellow-400",
                link: "https://www.javascript.com/",
              },
            ]}
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          duration={3}
          animateOnce
        >
          <ExperienceTable
            year="1 year"
            logo={ufsmLogo}
            link="https://www.ufsm.br/"
            tech={[
              {
                img: react,
                color: "hover:border-cyan-400",
                link: "https://pt-br.reactjs.org/",
              },
              {
                img: nodeJs,
                color: "hover:border-green-400",
                link: "https://nodejs.org/en/",
              },
              {
                img: javascriptLogo,
                color: "hover:border-yellow-400",
                link: "https://www.javascript.com/",
              },
              {
                img: htmlLogo,
                color: "hover:border-orange-400",
                link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
              },
            ]}
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Experience;
