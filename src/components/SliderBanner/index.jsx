import { useMediaQuery, useTheme } from "@material-ui/core";
import { imageSlider } from "contants";
import { Link } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import { sliderStyles } from "styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./SliderBanner.scss";

const BtnPrev = ({ onClick }) => {
  return (
    <button className="btnSlide btnPrev" onClick={onClick}>
      <ChevronLeftIcon color="success" />
    </button>
  );
};
const BtnNext = ({ onClick }) => {
  return (
    <button className="btnSlide btnNext" onClick={onClick}>
      <ChevronRightIcon color="success" />
    </button>
  );
};

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
  autoplay: true,
  prevArrow: <BtnPrev />,
  nextArrow: <BtnNext />,
};

const SliderBanner = () => {
  const classes = sliderStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {imageSlider.map((each, index) => (
          <div
            key={index}
            className={classes.sliderWrapper}
            style={{ background: each.background }}
          >
            <div className={classes.sliderLeft}>
              <h2>
                <Link className={classes.link} to={each.linkPost}>
                  {each.content.title}
                </Link>
              </h2>
              <p
                className={
                  classes.main +
                  (isMobile ? " contentTextMobile" : " contentTextDesktop")
                }
              >
                {each.content.main}
              </p>
            </div>
            <div className={classes.sliderRight}>
              <Link to={each.linkPost}>
                <img
                  src={each.image}
                  alt={each.title}
                  style={{ width: "100%" }}
                />
              </Link>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SliderBanner;
