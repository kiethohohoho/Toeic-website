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
      <Link to={`/courses/${course._id}`} title={course.name}>
        <img
          src={`https://webtoeic1.herokuapp.com${course.thumbnail}`}
          alt="thumbnail course"
        />
        <div className="middle">
          <div className="text">Xem chi tiết</div>
        </div>
        {course.saleOff !== 0 && <span>-{course.saleOff}%</span>}
      </Link>
      {/* content */}
      <div>
        <div className="courseItem_content flex-col">
          {/* title */}
          <h3 className="title overflow-text">
            <Link to={`/courses/${course._id}`} title={course.name}>
              {course.name}
            </Link>
          </h3>
          {/* author */}
          <div className="author flex-row">
            {/* <span>Giảng viên: </span> */}
            <span>
              <b>{course.owner}</b>
            </span>
          </div>

          {/* rating and quantity */}
          <div
            className="ratingAndQuantity flex-row-between"
            title={`${course.rating} sao`}
          >
            <Rating
              name="half-rating-read"
              value={course.rating}
              precision={0.1}
              readOnly
              title={`${course.rating} sao`}
            />
            <div className="quantity flex-row">
              <GroupsIcon />
              <span>
                <b>{course.sellNumber}</b>
              </span>
            </div>
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
