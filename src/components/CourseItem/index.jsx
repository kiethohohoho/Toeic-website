import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "./CourseItem.scss";
import { localeNumber } from "components/common";

const CourseItem = ({ course }) => {
  // console.log(course);
  return (
    <div className="courseItem flex-col">
      {/* img */}
      <Link to={`/courses/${course._id}`}>
        <img
          src={`https://webtoeic.herokuapp.com${course.thumbnail}`}
          alt="thumbnail course"
        />
        {course.saleOff !== 0 && <span>-{course.saleOff}%</span>}
      </Link>
      {/* content */}
      <div>
        <div className="courseItem_content flex-col">
          {/* title */}
          <h3 className="title">
            <Link to={`/courses/${course._id}`}>{course.name}</Link>
          </h3>
          {/* author */}
          <div className="author flex-row">
            <span>Tác giả: </span>
            <span>
              <b>{course.owner}</b>
            </span>
          </div>

          {/* rating */}
          <div className="rating flex-row">
            <span>Đánh giá:</span>
            <Rating
              name="half-rating-read"
              // defaultValue={2.5}
              value={course.rating}
              precision={0.5}
              readOnly
            />
          </div>

          {/* quantity */}
          <div className="quantity flex-row">
            <span>
              <GroupsIcon />
            </span>
            <span>
              <b>{course.sellNumber}</b> người tham gia
            </span>
          </div>

          {/* price */}
          <div className="price flex-row">
            {/* giá hiện tại */}
            <span>Giá:</span>
            <span className="price-current">
              {localeNumber(course.currentPrice)}đ
            </span>
            {/* giá gốc */}
            {course.saleOff !== 0 && (
              <span className="price-original flex-row">
                {localeNumber(course.originalPrice)}đ
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;