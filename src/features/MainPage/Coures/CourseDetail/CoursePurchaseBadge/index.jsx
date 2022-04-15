import Rating from "@mui/material/Rating";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { localeNumber } from "components/common";

const CoursePurchaseBadge = ({ courseInfo }) => {
  const originalPrice = courseInfo
    ? localeNumber(courseInfo.originalPrice) + " ₫"
    : "";

  const currentPrice = courseInfo
    ? localeNumber(courseInfo.currentPrice) + " ₫"
    : "";

  const courseThumnail = courseInfo
    ? `https://webtoeic1.herokuapp.com${courseInfo.thumbnail}`
    : "";

  const rating = courseInfo ? courseInfo.rating : 0;

  return (
    <div className="CourseDetail_purchaseBadge">
      <div className="CourseDetail_imgPreview">
        <div
          className="CourseDetail_bg"
          style={{
            backgroundImage: `url(${courseThumnail})`,
          }}
        ></div>
        <SlowMotionVideoIcon
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "#fff",
            fontSize: 60,
            transform: "translate(-50%, -50%)",
            visibility: "hidden",
          }}
        />
      </div>
      <button className="btnLearnNow">ĐĂNG KÝ HỌC</button>
      <div className="courseDetailPrice flex-row-center">
        <h5>{currentPrice}</h5>
        {currentPrice !== originalPrice && (
          <p className="CourseDetail_textContent text-line-through">
            {originalPrice}
          </p>
        )}
      </div>
      <ul>
        <li>
          <i>✔</i>
          <span>Trình độ cơ bản</span>
        </li>
        <li>
          <i>✔</i>
          <span>
            Tổng số <strong>145</strong> bài học
          </span>
        </li>
        <li>
          <i>✔</i>
          Đánh giá:
          {rating ? (
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
          ) : (
            ""
          )}
        </li>
        <li>
          <i>✔</i>
          <span>Học mọi lúc, mọi nơi</span>
        </li>
      </ul>
    </div>
  );
};

export default CoursePurchaseBadge;
