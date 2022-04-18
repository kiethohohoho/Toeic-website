import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMedicalCross, cilPen, cilTrash } from "@coreui/icons";
import CourseList from "../CourseList/CourseList";
import Modal from "../Modal/Modal";
import Validation from "../forms/validation/Validation";

const UsersManage = () => {
  const tableExample = [
    {
      id: 123456780,
      email: "a@a.a",
      typeAccount: "Học viên",
      name: "Yiorgos Avraamu",
      courseList: [
        { id: "111", title: "Toeic cơ bản", status: "active" },
        { id: "111", title: "Toeic cơ bản", status: "active" },
      ],
    },
    {
      id: 623456781,
      email: "b@b.b",
      typeAccount: "Giáo viên",
      name: "Harry Maquai",
    },
  ];

  const [originalTable] = useState(tableExample);
  const [ftValue, setFtValue] = useState("");
  const [filterTable, setFilterList] = useState(originalTable);
  const [showCourseList, setShowCourseList] = useState(-1);
  const handleAdd = () => {};
  const handleDelete = (uid) => {};
  const handleUpdate = (uid) => {};

  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (let i = 0; i < AccentsMap.length; i++) {
      let re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      let char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

  useEffect(() => {
    if (ftValue) {
      const newTable = originalTable.filter(
        (val) =>
          removeAccents(val.id.toString())
            .toLowerCase()
            .startsWith(removeAccents(ftValue.toLowerCase())) > 0 ||
          removeAccents(val.email.toString())
            .toLowerCase()
            .startsWith(removeAccents(ftValue.toLowerCase())) > 0 ||
          removeAccents(val.typeAccount.toString())
            .toLowerCase()
            .startsWith(removeAccents(ftValue.toLowerCase())) > 0 ||
          removeAccents(val.name.toString())
            .toLowerCase()
            .startsWith(removeAccents(ftValue.toLowerCase())) > 0
      );
      setFilterList(newTable);
    } else {
      setFilterList(originalTable);
    }
  }, [ftValue, originalTable]);

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Tất cả người dùng</CCardHeader>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "1rem 1rem 0 1rem",
              justifyContent: "space-between",
            }}
            onClick={handleAdd}
          >
            <div
              onClick={handleAdd}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  padding: 7,
                  borderRadius: "50%",
                  backgroundColor: "#f05123",
                  color: "#fff",
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CIcon icon={cilMedicalCross} />
              </span>
              <Modal title={"Thêm người dùng"}>
                <Validation />
              </Modal>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <strong style={{ minWidth: 80 }}>Tìm kiếm</strong>
              <CFormInput
                label="Email address"
                placeholder="Type string..."
                value={ftValue}
                onChange={(e) => setFtValue(e.target.value.toString())}
              />
            </div>
          </div>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    ID
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Email
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Loại tài khoản
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Họ tên
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Khóa học đã mua
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterTable.map((item, index) => (
                  <React.Fragment key={index}>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                        <strong>{item.id}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.email}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.typeAccount}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.name}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton
                          shape="rounded"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (
                              showCourseList === -1 ||
                              showCourseList !== index
                            ) {
                              setShowCourseList(index);
                            } else setShowCourseList(-1);
                          }}
                        >
                          {showCourseList === index ? "Hide" : "Show"}
                        </CButton>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          icon={cilTrash}
                          onClick={() => handleDelete(item.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          icon={cilPen}
                          onClick={() => handleUpdate(item.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </CTableDataCell>
                    </CTableRow>
                    <CourseList
                      visible={showCourseList === index}
                      courseList={item.courseList}
                    />
                  </React.Fragment>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default UsersManage;
