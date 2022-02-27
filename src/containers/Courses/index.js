import GroupsIcon from "@mui/icons-material/Groups";

const courses = [
  {
    type: "Kiến thức nền tảng",
    content: [
      {
        id: "12341",
        name: "Listening cho người mới bắt đầu",
      },
      {
        id: "12342",
        name: "3000 từ vựng & ngữ pháp",
      },
      {
        id: "12343",
        name: "Kỹ năng làm bài Reading",
      },
    ],
  },
  {
    type: "Luyện thi TOEIC",
    content: [
      {
        id: "123",
        name: "700+ TOEIC trong 3 tháng",
      },
      {
        id: "124",
        name: "Luyện thi cấp tốc 500+",
      },
    ],
  },
];

const Courses = () => {
  return (
    <div className="Courses_wrapper">
      <div className="p0_m0auto w100" style={{ maxWidth: 1920 }}>
        <div className="Courses_container">
          <div className="Courses_container-top">
            <h1 className="Courses_heading">Khóa học</h1>
            <div className="Markdown_wrapper Courses_desc">
              <p>
                Các khóa học được thiết kế phù hợp cho cả người mới, nội dung dễ
                hiểu.
              </p>
            </div>
          </div>
          <div className="container-body">
            {courses.map((course) => (
              <div key={Math.random()} className="ScrollList_vertical">
                <div>
                  <div className="ScrollList_heading-wrap">
                    <h2 className="ScrollList_heading">
                      <span rel="noreferrer" target="_self">
                        {course.type}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="ScrollList_body">
                  <div className="section_row">
                    {course.content.map((val) => (
                      <div key={val.id} className="section_col section_l-3">
                        <div className="CommonItem_wrapper">
                          <a
                            className="CommonItem_thumb"
                            title="Kiến Thức Nhập Môn IT"
                            target="_self"
                            href="/courses/lessons-for-newbie"
                            style={{
                              backgroundImage:
                                "url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)",
                            }}
                          >
                            <button className="Button_btn CommonItem_cta-btn">
                              Xem khóa học
                            </button>
                          </a>
                          <h3 className="CommonItem_title">
                            <a
                              target="_self"
                              href="/courses/lessons-for-newbie"
                            >
                              {val.name}
                            </a>
                          </h3>
                          <div className="CourseItem_students-count">
                            <GroupsIcon />
                            <span>60.654</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
