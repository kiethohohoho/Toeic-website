import React from "react";

const CourseDetailInfo = ({ infoDetail }) => {
  return (
    <div>
      <div>
        <img
          src="https://webtoeic.herokuapp.com/uploads/images/1644672941813-1.jpg"
          alt="logo"
        />
        <span>Giảm giá</span>
      </div>
      {/* name course */}
      <div>
        <span>Tên khoá học:</span>
      </div>
      {/* author */}
      <div>
        <span>Tên tác giả:</span>
      </div>
      {/* desciption */}
      <div>
        <span>Nội dung truyền đạt:</span>
      </div>
      {/* price */}
      <div>
        {/* current price  */}
        <span>Giá hiện tại:</span>
        {/* original price*/}
        <span>Giá gốc:</span>
      </div>
      {/* rating */}
      <div>
        <span>Đánh giá:</span>
      </div>
      {/* quantity */}
      <div>
        <span>Người mua:</span>
      </div>
    </div>
  );
};

export default CourseDetailInfo;
