import { useState } from "react";

export default function CourseLessonList({ chapters }) {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const renderClass = (index) => {
    return index === active ? "lessonList_content_panelHeading_active" : "";
  };

  const caculateLessons = () => {
    return chapters.reduce((total, val) => total + val.lessons.length, 0);
  };

  return (
    <div className="lessonList">
      <div className="lessonList_title">
        <div className="lessonList_titleblock">
          <h3>Nội dung khóa học</h3>
        </div>
        <div className="lessonList_subtitle">
          <ul>
            <li className="">
              <strong>{chapters.length}</strong>&nbsp;chương
            </li>
            <li className="">•</li>
            <li>
              <strong>{caculateLessons()}</strong>&nbsp;bài học
            </li>
            <li className="">•</li>
            <li>
              <span>Chúc các em đạt kết quả tốt 💪</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lessonList_content">
        <div className="lessonList_content_panelGroup">
          {chapters.length
            ? chapters.map((chapter, index) => (
                <div key={index} className="lessonList_content_panel">
                  <div
                    className={`lessonList_content_panelHeading noselect ${renderClass(
                      index
                    )}`}
                    onClick={() => {
                      handleClick(index);
                    }}
                  >
                    <h5 className="lessonList_content_panelTitle">
                      <div className="lessonList_content_panelHeadline">
                        <span className="floatleft-span">
                          <strong>{`${chapter.number}. ${chapter.name}`}</strong>
                        </span>
                        <span className="floatright-span">12 bài học</span>
                      </div>
                    </h5>
                  </div>
                  <div className="lessonList_content_collapse">
                    <div className="lessonList_content_panelBody">
                      {chapter.lessons.length
                        ? chapter.lessons.map((lesson, index) => (
                            <div
                              key={index}
                              className="lessonList_content_lesson"
                            >
                              <div className="lessonList_content_lessonName">
                                <div className="playLessonIcon">▶</div>
                                <span>{`${lesson.number}. ${lesson.title}`}</span>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
