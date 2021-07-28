import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders the root component without crashing', async () => {
  render(<App />);
  const appTitle = screen.getByText(/EQ-D/i);
  const x = await waitFor(() => screen.getByText(/EQ-D/i))
  expect(appTitle).toBeInTheDocument();
});
