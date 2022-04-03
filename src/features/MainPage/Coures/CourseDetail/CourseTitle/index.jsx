import React from "react";

const CourseTitle = ({ courseInfo }) => {
  const name = courseInfo ? courseInfo.name : "";
  let description = courseInfo ? courseInfo.description : "";
  return (
    <>
      <h2 className="CourseDetail_courseName">{name}</h2>
      <p className="CourseDetail_textContent">{description}</p>
    </>
  );
};

export default CourseTitle;
