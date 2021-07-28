import { render, cleanup, waitFor, screen } from '@testing-library/react';
import Layout from './Layout';
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  })
}));

describe("<Layout/>", () => {
  it('renders the Layout component with the child component that it wraps and a header element', async () => {
    const {getByTestId} = render(<Router><Layout><div data-testid="test">hello</div></Layout></Router>);
    
    const wrappedChildComponent = await waitFor(()=>getByTestId("test"));
    expect(wrappedChildComponent).toBeInTheDocument();
    const headerElement = await waitFor(()=> screen.getByTestId("header"));
    expect(headerElement).toBeInTheDocument();
  });
});


