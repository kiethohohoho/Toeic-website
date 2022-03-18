import { useMediaQuery, useTheme } from "@material-ui/core";
import { imageSlider } from "contants";
import { Link } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import { useStyles } from "styles";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const SliderBanner = () => {
  const classes = useStyles();
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
