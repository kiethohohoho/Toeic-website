import PropTypes from "prop-types";
import React from "react";
import { CTabContent, CTabPane } from "@coreui/react";

// import packageJson from '../../package.json'

const DocsExample = (props) => {
  const { children } = props;

  // const _href = `https://coreui.io/react/docs/${packageJson.config.coreui_library_short_version}/${href}`

  return (
    <div className="example">
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-0 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  );
};

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default React.memo(DocsExample);
