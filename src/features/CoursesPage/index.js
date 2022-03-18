import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { courses } from "data/Courses";
import Course from "../MainPage/Coures";

const Courses = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="Courses_wrapper">
      <div className="p0_m0auto w100" style={{ maxWidth: 1920 }}>
        <div className="Courses_container">
          <div className="Courses_container-top">
            <h1 className="Courses_heading">Khóa học</h1>
            <div className="Markdown_wrapper Courses_desc">
              <p>
                Các khóa học được thiết kế phù hợp cho cả người mới, nội dung dễ
                hiểu.
              </p>
            </div>
          </div>
          {isMobile ? (
            <Course />
          ) : (
            <div className="container-body">
              {courses.map((course) => (
                <div key={Math.random()} className="ScrollList_vertical">
                  <div>
                    <div className="ScrollList_heading-wrap">
                      <h2 className="ScrollList_heading">
                        <span rel="noreferrer" target="_self">
                          {course.type}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="ScrollList_body">
                    <div className="section_row">
                      {course.content.map((val) => (
                        <div key={val.id} className="section_col section_l-3">
                          <div className="CommonItem_wrapper">
                            <Link
                              className="CommonItem_thumb"
                              to={`/courses/${val.id}`}
                              style={{
                                backgroundImage:
                                  "url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)",
                              }}
                            >
                              <button className="Button_btn CommonItem_cta-btn">
                                Xem khóa học
                              </button>
                            </Link>
                            <h3 className="CommonItem_title">
                              <Link to={`/courses/${val.id}`}>{val.name}</Link>
                            </h3>
                            <div className="CourseItem_students-count">
                              <GroupsIcon />
                              <span>60.654</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
