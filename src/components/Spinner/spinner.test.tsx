import { render, cleanup } from '@testing-library/react';
import Spinner from './Spinner';
import messages from "../../utils/messages";


afterEach(cleanup);


describe("<Spinner/>", () => {
  it('renders the spinner icon with the correct message', () => {

    const {getByTestId, queryByTestId, getByText} = render(<Spinner/>);
    const spinner = getByTestId("custom-spinner");
    expect(spinner).toBeInTheDocument();
    expect(getByText(messages.loading)).toBeInTheDocument();
  });
});


