import { Rating } from "@mui/material";
import { localeNumber } from "components/common";
import React from "react";
import "./CourseDetailInfo.scss";

const CourseDetailInfo = ({ infoDetail }) => {
  // console.log(infoDetail);
  return (
    <div className="courseInfo flex-col-gap-6">
      {/* image here */}
      <div className="courseImage">
        <img
          src={`https://webtoeic.herokuapp.com${infoDetail.thumbnail}`}
          alt="logo"
        />
        {infoDetail.saleOff !== 0 && <span>-{infoDetail.saleOff}%</span>}
      </div>
      {/* content here */}
      <div className="courseContent flex-col-gap-4">
        {/* name course */}
        <div class="title overflow-text">
          <span>Tên khoá học:</span>
          <span>{infoDetail.name}</span>
        </div>
        {/* author */}
        <div class="">
          <span>Tên tác giả:</span>
          <span>{infoDetail.owner}</span>
        </div>
        {/* desciption */}
        <div class="">
          <span>Nội dung:</span>
          <span>{infoDetail.description}</span>
        </div>
        {/* original price*/}
        <div class="">
          <span>Giá gốc:</span>
          <span>{localeNumber(infoDetail.originalPrice)}đ</span>
        </div>
        {/* current price  */}
        <div class="">
          <span>Giá hiện tại:</span>
          <span>{localeNumber(infoDetail.currentPrice)}đ</span>
        </div>
        {/* rating */}
        <div class="">
          <span>Đánh giá:</span>
          <Rating
            name="half-rating-read"
            // defaultValue={2.5}
            value={infoDetail.rating}
            precision={0.5}
            readOnly
          />
        </div>
        {/* quantity */}
        <div class="">
          <span>Người mua:</span>
          <span>{infoDetail.sellNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailInfo;
