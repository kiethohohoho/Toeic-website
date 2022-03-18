import Container from "components/Container";
import LayoutMainPage from "components/LayoutMainPage";
import SliderBanner from "components/SliderBanner";
import React from "react";

const HomePage = () => {
  return (
    <LayoutMainPage>
      <Container type="wide">
        {/* slider banner here */}
        <SliderBanner />
      </Container>
    </LayoutMainPage>
  );
};

export default HomePage;
