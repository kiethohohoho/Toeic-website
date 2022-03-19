import coursesAPi from "apis/coursesApi";
import Container from "components/Container";
import LayoutMainPage from "components/LayoutMainPage";
import React from "react";
import { useParams } from "react-router-dom";
import CourseDetailInfo from "./CourseDetailInfo";
import DropdownCourse from "./DropdownCourse";

import "./CourseDetail.scss";

const CourseDetail = () => {
  const params = useParams();

  const [courseInfo, setCourseInfo] = React.useState([]);
  const [chapters, setChapters] = React.useState([]);

  React.useEffect(() => {
    getCourseId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(chapters);
  });

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
      infos.map((info, index) => (
        <CourseDetailInfo key={index} infoDetail={info} />
      ))
    );
  };

  const renderChapters = (chapters) => {
    return (
      chapters.length &&
      chapters.map((chapter, index) => (
        <DropdownCourse key={index} chapter={chapter} index={index + 1} />
      ))
    );
  };

  return (
    <LayoutMainPage>
      <Container type="normal">
        <div className="courseDetail flex-row-between">
          <div className="flex-col-gap-4">
            <h2>Thông tin khoá học</h2>
            {renderDetailInfo(courseInfo)}
          </div>
          <div className="courseChapters flex-col-gap-4">
            <h2>Thông tin chi tiết khoá học</h2>
            {renderChapters(chapters)}
          </div>
        </div>
      </Container>
    </LayoutMainPage>
  );
};

export default CourseDetail;
