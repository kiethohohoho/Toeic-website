import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CRow,
  CTabContent,
  CTabPane,
  CFormSelect,
} from "@coreui/react";
import { useMediaQuery, useTheme } from "@material-ui/core";

const CustomStyles = ({ children }) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      {children}

      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
};

const Validation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <strong>Cách 1: Thêm từng người</strong>
            {!isMobile && (
              <strong>Bạn cần phải điền đầy đủ các trường bắt buộc</strong>
            )}
          </CCardHeader>
          <CCardBody>
            <div className="example">
              <CTabContent className="rounded-bottom">
                <CTabPane className="preview p-3" visible>
                  <CustomStyles>
                    <CCol md={3}>
                      <CFormLabel htmlFor="id">ID</CFormLabel>
                      <CFormInput type="text" id="id" required />
                      <CFormFeedback invalid>Vui lòng nhập ID</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel htmlFor="email">Email</CFormLabel>
                      <CFormInput type="text" id="email" required />
                      <CFormFeedback invalid>
                        Vui lòng cung cấp email
                      </CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel htmlFor="accType">Loại tài khoản</CFormLabel>
                      <CFormSelect>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                      </CFormSelect>
                      <CFormFeedback invalid>
                        Vui lòng xác định loại tài khoản
                      </CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel htmlFor="name">Họ tên</CFormLabel>
                      <CFormInput type="text" id="name" required />
                      <CFormFeedback invalid>
                        Vui lòng cung cấp họ tên
                      </CFormFeedback>
                    </CCol>
                  </CustomStyles>
                </CTabPane>
              </CTabContent>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <strong>Cách 2: Thêm nhiều người một lúc</strong>
            {!isMobile && <strong>Bạn cần phải chuẩn bị sẵn file Excel</strong>}
          </CCardHeader>
          <CCardBody>
            <div className="example">
              <CTabContent className="rounded-bottom">
                <CTabPane className="preview p-3" visible>
                  <CustomStyles>
                    <CCol className="special-col-md-75">
                      <CFormLabel htmlFor="file"></CFormLabel>
                      <CFormInput
                        type="file"
                        accept=".xlsx, .xls, .csv"
                        id="file"
                        required
                      />
                      <CFormFeedback invalid>
                        Vui lòng tải file lên
                      </CFormFeedback>
                    </CCol>
                  </CustomStyles>
                </CTabPane>
              </CTabContent>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Validation;
