import { render, cleanup } from '@testing-library/react';
import ErrorBox, { IErrorBox } from './ErrorBox';

afterEach(cleanup);


describe("<ErrorBox/>", () => {
  it('renders the ErrorBox with the correct message and without andy button', () => {
    const eBoxParam:IErrorBox = {
        message:"an error has occurred",
        showIcon:true,
    };

    const {getByTestId, queryByTestId, getByText} = render(<ErrorBox {...eBoxParam} />);
    const errorBox = getByTestId("error-box");
    expect(errorBox).toBeInTheDocument();
    expect(getByText(eBoxParam.message)).toBeInTheDocument();
    expect(queryByTestId("retry-button")).not.toBeInTheDocument();
  });

  it('renders the ErrorBox with a retry button', () => {
    const eBoxParam:IErrorBox = {
        message:"an error has occurred",
        showIcon:true,
        onRetryClick: jest.fn(),
        showRetryButton:true
    };

    const {getByTestId, queryByTestId} = render(<ErrorBox {...eBoxParam} />);
    const errorBox = getByTestId("error-box");
    expect(errorBox).toBeInTheDocument();
    const retryButton = queryByTestId("retry-button");
    expect(retryButton).toBeInTheDocument();
    retryButton?.click();
    expect(eBoxParam.onRetryClick).toHaveBeenCalledTimes(1);
  });
});


