import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import "./CourseItem.scss";
import { Rating } from "@mui/material";

const CourseItem = ({ course }) => {
  console.log(course);
  return (
    <div className="courseItem">
      {/* img */}
      <Link to={`/courses/${course._id}`}>
        <img
          src={`https://webtoeic.herokuapp.com${course.thumbnail}`}
          alt="thumbnail course"
        />
      </Link>
      {/* content */}
      <div>
        <div className="courseItem_content flex-col">
          <h3 className="title">
            <Link to={`/courses/${course._id}`}>{course.name}</Link>
          </h3>
          <div className="author">
            <span>
              Tác giả: <b>{course.owner}</b>
            </span>
          </div>
          <div className="rating flex-row-gap-4">
            <span>Đánh giá:</span>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              // precision={0.5}
              readOnly
            />
          </div>
          <div className="quantity flex-row">
            <span>
              <GroupsIcon />
            </span>
            <span>
              <b>{course.sellNumber}</b> người tham gia
            </span>
          </div>
          <div className="prices">
            <span>
              Giá: <b>{course.price}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
