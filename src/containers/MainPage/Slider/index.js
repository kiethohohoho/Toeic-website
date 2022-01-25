import { Zoom } from "react-slideshow-image";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sliderWrapper: {
    display: "flex",
    width: "100%",
    height: 300,
    padding: "20px 50px",
    borderRadius: 25,
  },
  sliderLeft: {
    flexBasis: "70%",
    fontFamily: "'Merienda', cursive",
    color: "#fff",
    lineHeight: 2,
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.7,
    },
  },
  sliderRight: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  main: {
    maxWidth: 600,
    marginTop: 0,
  },
  link: {
    color: "#fff",
    fontSize: "3rem",
    fontWeight: 900,
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
}));

const images = [
  {
    background:
      "linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))",
    content: {
      title: "học ReactJS miễn phí",
      main: "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
    },
    linkPost: "",
    image:
      "https://cdn.fullstack.edu.vn/f8-production/banners/Banner_web_ReactJS.png",
  },
  {
    background:
      "linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))",
    content: {
      title: "thành quả của học viên",
      main: "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
    },
    linkPost: "",
    image: "https://cdn.fullstack.edu.vn/f8-production/banners/Banner_01_2.png",
  },
  {
    background: "linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))",
    content: {
      title: "f8 trên youtube",
      main: "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
    },
    linkPost: "",
    image: "https://cdn.fullstack.edu.vn/f8-production/banners/Banner_01_2.png",
  },
  {
    background: "linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))",
    content: {
      title: "f8 trên facebook",
      main: "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
    },
    linkPost: "",
    image: "https://cdn.fullstack.edu.vn/f8-production/banners/Banner_04_2.png",
  },
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className={classes.sliderWrapper}
            style={{ background: each.background }}
          >
            <div className={classes.sliderLeft}>
              <h2>
                <a
                  className={classes.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={each.linkPost}
                >
                  {each.content.title}
                </a>
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
              <a rel="noopener noreferrer" target="_blank" href={each.linkPost}>
                <img
                  src={each.image}
                  alt={each.title}
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
