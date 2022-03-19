import { CircularProgress } from "@mui/material";
import coursesApi from "apis/coursesApi";
import Container from "components/Container";
import CourseItem from "components/CourseItem";
import LayoutMainPage from "components/LayoutMainPage";
import { useEffect, useState } from "react";
import "./Courses.scss";

const Course = () => {
  const [courses, setCourses] = useState([]);

  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState(4);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const params = { page, limit };
    try {
      const response = await coursesApi.getCourses(params);
      const { courses } = response;
      setCourses(courses);

      //handle show more
      const newLimit = limit + 4;
      console.log(newLimit);
      setLimit(newLimit);
    } catch (error) {
      console.log("lỗi rồi", error);
    }
  };

  const renderCourses = (courses) => {
    if (!courses.length) {
      return <CircularProgress className="spinner" />;
    }
    return (
      courses.length &&
      courses.map((course, index) => <CourseItem key={index} course={course} />)
    );
  };

  const handleShowMore = () => {
    getCourses();
  };

  return (
    <LayoutMainPage>
      <Container type="normal">
        <div className="courses flex-col-gap-4">
          <div className="title flex-row-between">
            <h2>Danh sách các khóa học</h2>
            <span onClick={() => handleShowMore()}>Xem thêm</span>
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
