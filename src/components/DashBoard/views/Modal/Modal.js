import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";

const Modal = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton
        shape="rounded"
        variant="outline"
        onClick={() => setVisible(!visible)}
      >
        {title}
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader style={{ alignItems: "flex-start" }}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <strong className="text-center mt-1">CHỌN 1 TRONG 2 CÁCH</strong>
        <CModalBody>{children}</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Modal;
