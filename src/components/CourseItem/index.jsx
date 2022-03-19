import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import "./CourseItem.scss";

const CourseItem = ({ val }) => {
  return (
    <div className="courseItem">
      {/* img */}
      <Link to={`/courses/${val._id}`}>
        <img
          src={`https://webtoeic.herokuapp.com${val.thumbnail}`}
          alt="thumbnail course"
        />
      </Link>
      {/* content */}
      <div>
        <div className="courseItem_content flex-col">
          <h3 className="title">
            <Link to={`/courses/${val._id}`}>{val.name}</Link>
          </h3>
          <div className="quantity flex-row">
            <span>
              <GroupsIcon />
            </span>
            <span>
              <b>{val.sellNumber}</b> người tham gia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
