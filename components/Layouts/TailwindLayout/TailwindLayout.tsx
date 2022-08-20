import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface Props {
  children: React.ReactNode;
}

const TailwindLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default TailwindLayout;
