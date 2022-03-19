import coursesApi from "apis/coursesApi";
import Container from "components/Container";
import CourseItem from "components/CourseItem";
import LayoutMainPage from "components/LayoutMainPage";
import { useEffect, useState } from "react";
import "./Courses.scss";

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

  const renderCourses = (courses) => {
    return (
      courses.length &&
      courses.map((course, index) => <CourseItem key={index} val={course} />)
    );
  };

  return (
    <LayoutMainPage>
      <Container type="normal">
        <div className="courses flex-col-gap-4">
          <div className="title flex-row-between">
            <h2>Các khóa học</h2>
            <span>Xem thêm</span>
          </div>
          <div className="courseList flex-row-gap-4">
            {renderCourses(courses)}
          </div>
        </div>
      </Container>
    </LayoutMainPage>
  );
};

export default Course;
