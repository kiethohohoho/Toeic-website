import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://www.facebook.com/HoangToeicHCMC"
          target="_blank"
          rel="noopener noreferrer"
          title="Trung tâm luyện thi TOEIC"
        >
          HOÀNG TOEIC
        </a>
        <span className="ms-1">&copy; 2022 </span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
