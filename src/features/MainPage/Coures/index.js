import coursesApi from "apis/coursesApi";
import Container from "components/Container";
import CourseItem from "components/CourseItem";
import LayoutMainPage from "components/LayoutMainPage";
import { useEffect, useState } from "react";
import CoursesSkeleton from "./Skeleton";
import "./Courses.scss";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const [page] = useState("1");
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    getCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCourses = async () => {
    limit === 4 && setCourses([]);
    setLoading(true);
    const params = { page, limit };
    try {
      const response = await coursesApi.getCourses(params);
      setLoading(false);
      const { courses, total } = response;

      setCourses(courses);
      setTotal(total);

      //handle show more, hide
      const newLimit = limit < total ? limit + 4 : 4;

      setLimit(newLimit);
    } catch (error) {
      console.log("lỗi rồi", error);
    }
  };

  const renderCourses = (courses) => {
    let result = [];
    if (courses?.length) {
      let a = courses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ));
      result = [...result, a];
    }
    if (loading) {
      let skeleton = [1, 2, 3, 4].map((val) => <CoursesSkeleton key={val} />);
      result = [...result, skeleton];
    }
    return result;
  };

  const handleShowMore = () => {
    setLoading(true);
    getCourses();
  };

  return (
    <LayoutMainPage>
      <Container type="normal">
        <div className="courses flex-col-gap-6">
          <div className="headingTitle">
            <h2>Danh sách các khóa học</h2>
          </div>
          <div className="courseList flex-row">{renderCourses(courses)}</div>
          <div className="showMoreBtn flex-row-center">
            <hr />
            {total > courses.length ? (
              <button onClick={() => handleShowMore()}>Xem thêm</button>
            ) : (
              <button onClick={() => handleShowMore()}>Ẩn đi</button>
            )}
            <hr />
          </div>
        </div>
      </Container>
    </LayoutMainPage>
  );
};

export default Course;
