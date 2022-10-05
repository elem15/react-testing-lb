import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('Renders async user name', async () => {
    render(<App />);
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    await screen.findAllByText(/search/i);
    expect(screen.getByAltText(/for search/i)).toHaveClass('image');
    expect(screen.getByAltText(/for search/i)).toHaveStyle('width: 300px');
    expect(screen.getByRole('searchbox')).toBeRequired();
    expect(screen.getByRole('searchbox')).toBeEmptyDOMElement();
    expect(screen.getByRole('searchbox')).toHaveAttribute('id');
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByAltText(/for search/i)).not.toHaveAttribute('id');

  })
  it('Renders App component', () => {
    render(<App />);
    expect(screen.queryByText(/Search for: React/i)).toBeNull();
    expect(screen.getByText(/Search for:/i)).toBeInTheDocument();
  })
})
