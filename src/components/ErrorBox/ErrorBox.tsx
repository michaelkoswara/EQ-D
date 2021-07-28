import { Alert, Button } from "antd";
import React from "react";

export interface IErrorBox {
  message: string;
  showIcon?: boolean;
  showRetryButton?: boolean;
  onRetryClick?: () => void;
}

const ErrorBox = ({
  message,
  showIcon,
  showRetryButton,
  onRetryClick,
}: IErrorBox): JSX.Element => {
  return (
    <>
      <Alert
        message="Error"
        description={message}
        type="error"
        showIcon={showIcon}
        data-testid="error-box"
      />
      {showRetryButton && onRetryClick && (
        <div>
          <Button
            type="primary"
            onClick={onRetryClick}
            style={{ marginTop: "1rem" }}
            data-testid="retry-button"
          >
            Refresh
          </Button>
        </div>
      )}
    </>
  );
};

export default ErrorBox;
