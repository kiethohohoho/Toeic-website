import { useParams } from "react-router-dom";
const Course = () => {
  let { course } = useParams();
  return (
    <>
      <p>
        hello course <strong>{course}</strong>
      </p>
    </>
  );
};

export default Course;
