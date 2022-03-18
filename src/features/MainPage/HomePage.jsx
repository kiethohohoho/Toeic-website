import Container from "components/Container";
import LayoutMainPage from "components/LayoutMainPage";
import SliderBanner from "components/SliderBanner";
import React from "react";

const HomePage = () => {
  return (
    <LayoutMainPage>
      {/* slider banner here */}
      <Container type="wide">
        <SliderBanner />
      </Container>
    </LayoutMainPage>
  );
};

export default HomePage;
