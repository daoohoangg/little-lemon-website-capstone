import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './nav/BookingForm';

test('renders learn react link', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("BookingForm");;
  expect(headingElement).toBeInTheDocument();
});
