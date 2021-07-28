import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  })
}));

test('renders the root component without crashing', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const appTitle = screen.getByText(/EQ-D/i);
  const x = await waitFor(() => screen.getByText(/EQ-D/i))
  expect(appTitle).toBeInTheDocument();
});
