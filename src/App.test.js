import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('Renders App component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    Object.values(screen.findAllByText(/search/i)).map(val => val.toBeInTheDocument());
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByAltText(/for search/i)).toBeInTheDocument();
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'test text');
    Object.values(screen.findAllByText(/test text/i)).map(val => val.toBeInTheDocument());
    expect(screen.getByDisplayValue(/test text/i)).toBeInTheDocument();
  })
})
