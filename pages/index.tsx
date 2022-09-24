import type { NextPage } from "next";
import Experience from "../src/components/experience";
import Header from "../src/components/header";
import NavBar from "../src/components/navbar";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen border-b-2">
        <NavBar />
        <Header />
      </div>
      <Experience />
    </div>
  );
};

export default Home;
