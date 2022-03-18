import Container from "components/Container";
import Navbar from "components/Header/Navbar";
import React from "react";

const LayoutMainPage = ({ children }) => {
  return (
    <React.Fragment>
      {/* container for header here */}
      <Container type="wide">
        <Navbar />
      </Container>

      {/* component children render in here */}
      {children}
    </React.Fragment>
  );
};

export default LayoutMainPage;
