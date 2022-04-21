import { useState, useEffect } from "react";
import coursesAPi from "apis/coursesApi";
import { useParams } from "react-router-dom";
import CourseTitle from "./CourseTitle";
import CourseGains from "./CourseGains";
import CourseLessonList from "./CourseLessonList";
import CourseRequirements from "./CourseRequirements";
import CoursePurchaseBadge from "./CoursePurchaseBadge";

import "./CourseDetail.scss";
import LayoutMainPage from "components/LayoutMainPage";

const CourseDetail = () => {
  const params = useParams();

  const [courseInfo, setCourseInfo] = useState([]);
  const [chapters, setChapters] = useState([]);
  //set panel dropdown
  const [panel, setPanel] = useState("");

  useEffect(() => {
    getCourseId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(chapters);
  // }, [chapters]);

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

  const renderChapters = (chapters) => {
    return (
      chapters.length > 0 &&
      chapters.map((chapter, index) => (
        <CourseLessonList
          key={index}
          index={index + 1}
          chapter={chapter}
          onPanelActive={handlePanel}
          panelActive={panel}
        />
      ))
    );
  };

  const handlePanel = (panel) => {
    console.log("dsasdasd", panel);
    setPanel(panel);
  };

  return (
    <LayoutMainPage>
      <div className="coureDetailWrapper">
        <div className="left">
          <CourseTitle courseInfo={courseInfo[0]} />
          <CourseGains />
          {/* course info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h2>Nội dung khoá học</h2>
            <div>{renderChapters(chapters)}</div>
          </div>
          <CourseRequirements />
        </div>
        <div className="right">
          <CoursePurchaseBadge courseInfo={courseInfo[0]} />
        </div>
      </div>
    </LayoutMainPage>
  );
};

export default CourseDetail;
