import type { NextPage } from "next";
import Header from "../src/components/header";
import NavBar from "../src/components/navbar";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <NavBar />
      <Header />
    </div>
  );
};

export default Home;
