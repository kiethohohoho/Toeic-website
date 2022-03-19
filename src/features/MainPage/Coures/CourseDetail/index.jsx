import LayoutMainPage from "components/LayoutMainPage";
import React from "react";
import { useParams } from "react-router-dom";
import coursesAPi from "apis/coursesApi";
import Container from "components/Container";

const CourseDetail = () => {
  const params = useParams();

  React.useEffect(() => {
    getCourseId();
  }, []);

  const getCourseId = async () => {
    const { id } = params;
    try {
      const response = await coursesAPi.getCoursesId(id);
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  return (
    <LayoutMainPage>
      <Container type="normal">
        <div>Đây là trang detail product</div>
      </Container>
    </LayoutMainPage>
  );
};

export default CourseDetail;
