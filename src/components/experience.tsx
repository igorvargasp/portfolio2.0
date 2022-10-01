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

const Experience = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex row justify-center w-full pt-20 font-roboto font-bold gap-16 items-center ">
        <br />
        <h2 className="text-blue-600 text-5xl">EXPERIENCE</h2>
        <BsArrowRight className="text-6xl" />
        <h2 className="text-blue-600 text-5xl">WHERE</h2>
        <BsArrowRight className="text-6xl" />
        <h2 className="text-blue-600 text-5xl">TECHNOLOGIES</h2>
      </div>
      <div className="w-full flex flex-col pt-40 gap-10">
        <ExperienceTable
          year="1 year"
          logo={ibmLogo}
          link="https://www.ibm.com/br-pt"
          tech={[
            {
              img: react,
              color: "border-cyan-400",
              link: "https://pt-br.reactjs.org/",
            },
            {
              img: nodeJs,
              color: "border-green-400",
              link: "https://nodejs.org/en/",
            },
            {
              img: kubernets,
              color: "border-blue-400",
              link: "https://kubernetes.io/pt-br/",
            },
            {
              img: docker,
              color: "border-blue-400",
              link: "https://kubernetes.io/pt-br/",
            },
          ]}
        />
        <ExperienceTable
          year=" 8 months"
          logo={compassoLogo}
          link="https://compass.uol/en/home/"
          tech={[
            {
              img: react,
              color: "border-cyan-400",
              link: "https://pt-br.reactjs.org/",
            },
            {
              img: nodeJs,
              color: "border-green-400",
              link: "https://nodejs.org/en/",
            },
            {
              img: typescriptLogo,
              color: "border-blue-400",
              link: "https://www.typescriptlang.org/",
            },
            {
              img: javascriptLogo,
              color: "border-yellow-400",
              link: "https://www.javascript.com/",
            },
          ]}
        />
        <ExperienceTable
          year="1 year"
          logo={ufsmLogo}
          link="https://www.ufsm.br/"
          tech={[
            {
              img: react,
              color: "border-cyan-400",
              link: "https://pt-br.reactjs.org/",
            },
            {
              img: nodeJs,
              color: "border-green-400",
              link: "https://nodejs.org/en/",
            },
            {
              img: javascriptLogo,
              color: "border-yellow-400",
              link: "https://www.javascript.com/",
            },
            {
              img: htmlLogo,
              color: "border-orange-400",
              link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
