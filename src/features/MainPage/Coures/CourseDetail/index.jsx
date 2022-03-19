import coursesAPi from "apis/coursesApi";
import Container from "components/Container";
import LayoutMainPage from "components/LayoutMainPage";
import React from "react";
import { useParams } from "react-router-dom";
import CourseDetailInfo from "./CourseDetailInfo";

const CourseDetail = () => {
  const params = useParams();

  const [courseInfo, setCourseInfo] = React.useState([]);
  const [chapters, setChapters] = React.useState([]);

  React.useEffect(() => {
    getCourseId();
  }, []);

  const getCourseId = async () => {
    const { id } = params;
    try {
      const response = await coursesAPi.getCoursesId(id);
      const { course, chapters } = response;
      setCourseInfo(course);
      setChapters(chapters);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderDetailInfo = (infos) => {
    return (
      infos.length &&
      infos.map((info, index) => <CourseDetailInfo info={info} />)
    );
  };

  return (
    <LayoutMainPage>
      <Container type="normal">
        <div className="flex-row-between">
          <div>
            <h2>Thông tin khoá học</h2>
          </div>
          <div>2</div>
        </div>
      </Container>
    </LayoutMainPage>
  );
};

export default CourseDetail;
