import { Spin } from "antd";
import messages from "../../utils/messages";
import React from "react";

const Spinner = (): JSX.Element => {
  return (
    <Spin size="large" tip={messages.loading} data-testid="custom-spinner" />
  );
};

export default Spinner;
