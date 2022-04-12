// import { useState } from "react";

// export default function CourseLessonList({ chapters }) {
//   const [active, setActive] = useState(0);

//   const handleClick = (index) => {
//     setActive(index);
//   };

//   const renderClass = (index) => {
//     return index === active ? "lessonList_content_panelHeading_active" : "";
//   };

//   const caculateLessons = () => {
//     return chapters.reduce((total, val) => total + val.lessons.length, 0);
//   };

//   return (
//     <div className="lessonList">
//       <div className="lessonList_title">
//         <div className="lessonList_titleblock">
//           <h3>Nội dung khóa học</h3>
//         </div>
//         <div className="lessonList_subtitle">
//           <ul>
//             <li className="">
//               <strong>{chapters.length}</strong>&nbsp;chương
//             </li>
//             <li className="">•</li>
//             <li>
//               <strong>{caculateLessons()}</strong>&nbsp;bài học
//             </li>
//             <li className="">•</li>
//             <li>
//               <span>Chúc các em đạt kết quả tốt 💪</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="lessonList_content">
//         <div className="lessonList_content_panelGroup">
//           {chapters.length
//             ? chapters.map((chapter, index) => (
//                 <div key={index} className="lessonList_content_panel">
//                   <div
//                     className={`lessonList_content_panelHeading noselect ${renderClass(
//                       index
//                     )}`}
//                     onClick={() => {
//                       handleClick(index);
//                     }}
//                   >
//                     <h5 className="lessonList_content_panelTitle">
//                       <div className="lessonList_content_panelHeadline">
//                         <span className="floatleft-span">
//                           <strong>{`${chapter.number}. ${chapter.name}`}</strong>
//                         </span>
//                         <span className="floatright-span">12 bài học</span>
//                       </div>
//                     </h5>
//                   </div>
//                   <div className="lessonList_content_collapse">
//                     <div className="lessonList_content_panelBody">
//                       {chapter.lessons.length
//                         ? chapter.lessons.map((lesson, index) => (
//                             <div
//                               key={index}
//                               className="lessonList_content_lesson"
//                             >
//                               <div className="lessonList_content_lessonName">
//                                 <div className="playLessonIcon">▶</div>
//                                 <span>{`${lesson.number}. ${lesson.title}`}</span>
//                               </div>
//                             </div>
//                           ))
//                         : ""}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : ""}
//         </div>
//       </div>
//     </div>
//   );
// }

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Divider } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CourseLessonList({
  chapter,
  index,
  panelActive,
  onPanelActive,
}) {
  const { lessons, name } = chapter;

  const handleChange = (panel) => (event, newExpanded) => {
    // setExpanded(newExpanded ? panel : false);
    onPanelActive(newExpanded ? panel : false);
  };

  const renderLessons = (lessons) => {
    return (
      lessons.length > 0 &&
      lessons.map((lesson, index) => (
        <>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              padding: "10px",
            }}
          >
            <SlowMotionVideoIcon />
            <Typography key={index}>
              {index + 1}. {lesson.title}
            </Typography>
          </div>
          {index < lessons.length - 1 && <Divider light />}
        </>
      ))
    );
  };

  return (
    <>
      <Accordion
        expanded={panelActive === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
      >
        <AccordionSummary>
          <Typography style={{ fontWeight: "500" }}>
            Phần {index}. {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{renderLessons(lessons)}</AccordionDetails>
      </Accordion>
    </>
  );
}
