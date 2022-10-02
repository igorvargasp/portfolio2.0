import type { NextPage } from "next";
import Contact from "../src/components/contact";
import Experience from "../src/components/experience";
import Header from "../src/components/header";
import NavBar from "../src/components/navbar";
import Project from "../src/components/projects";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen border-b-2">
        <NavBar />
        <Header />
      </div>
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
