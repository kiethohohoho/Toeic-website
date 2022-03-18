import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
// import { courses } from "data/Courses";
import coursesApi from "../../../apis/coursesApi";
import { useEffect, useState } from "react";
import { courses } from "data/Courses";

const getCourses = async () => {
  try {
    const response = await coursesApi.getCourses();
    return response.courses;
  } catch (error) {
    console.log(error);
  }
};

const Course = () => {
  const [courses, setCourses] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await getCourses();
    setCourses(data);
  }, []);
  useEffect(() => {
    console.log(courses);
  });
  return (
    <div id="Course">
      <div className="Above">
        <div className="SectionList_headingWrap">
          <h2 className="SectionList_heading">Các khóa học</h2>
          <Link to="/courses" className="SectionList_viewAll">
            Xem tất cả
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              className="svg-inline--fa fa-chevron-right fa-w-10 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="Under">
        <div className="SectionList_body">
          {courses.length &&
            courses.map((val) => (
              <div className="Home_courseItem">
                <div className="CourseItem_wrapper">
                  <Link to={`/courses/${val._id}`}>
                    {/* <div
                      className="CourseItem_thumb"
                      title="Kiến Thức Nhập Môn IT"
                      // style={{
                      //   backgroundImage: `url(https://webtoeic.herokuapp.com//${val.thumbnail})`,
                      // }}
                    ></div> */}
                    <img
                      src={`https://webtoeic.herokuapp.com${val.thumbnail}`}
                      alt="aa"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 12,
                      }}
                    />
                  </Link>
                  <h3 className="CourseItem_title">
                    <Link to={`/courses/${val._id}`}>{val.name}</Link>
                  </h3>
                  <div>
                    <div className="CourseItem_studentsCount">
                      <GroupsIcon />
                      <span>{val.sellNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
