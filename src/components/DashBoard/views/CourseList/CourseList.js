import React from "react";
import { CCardBody, CCollapse, CTableDataCell, CTableRow } from "@coreui/react";

const CourseList = ({ visible, courseList }) => {
  return (
    <CTableRow>
      <CTableDataCell colSpan={7} className="p-0">
        <CCollapse
          visible={visible}
          style={{
            width: "100%",
          }}
        >
          {courseList ? (
            courseList.map((course, i) => (
              <CCardBody key={i}>
                <h6>
                  STT: <strong>{i + 1}</strong>
                </h6>
                <div>
                  ID: <strong>{course.id}</strong>
                </div>
                <div>
                  Tên khóa học: <strong>{course.title}</strong>
                </div>
              </CCardBody>
            ))
          ) : (
            <CCardBody>
              <h6 className="m-0 text-center">Không có gì để hiển thị</h6>
            </CCardBody>
          )}
        </CCollapse>
      </CTableDataCell>
    </CTableRow>
  );
};

export default CourseList;
