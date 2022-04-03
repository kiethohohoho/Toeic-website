import { useState, useEffect } from "react";
import coursesAPi from "apis/coursesApi";
import { useParams } from "react-router-dom";
import CourseTitle from "./CourseTitle";
import CourseGains from "./CourseGains";
import CourseLessonList from "./CourseLessonList";
import CourseRequirements from "./CourseRequirements";
import CoursePurchaseBadge from "./CoursePurchaseBadge";

import "./CourseDetail.scss";

const CourseDetail = () => {
  const params = useParams();

  const [courseInfo, setCourseInfo] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getCourseId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(courseInfo);
  // }, [courseInfo]);

  useEffect(() => {
    console.log(chapters);
  }, [chapters]);

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

  return (
    <div className="coureDetailWrapper">
      <div className="left">
        <CourseTitle courseInfo={courseInfo[0]} />
        <CourseGains />
        <CourseLessonList chapters={chapters} />
        <CourseRequirements />
      </div>
      <div className="right">
        <CoursePurchaseBadge courseInfo={courseInfo[0]} />
      </div>
    </div>
  );
};

export default CourseDetail;
