import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the booking form', () => {
  render(<BookingForm />);
  expect(screen.getByText('Book Now')).toBeInTheDocument();
});

test('form validation works', async () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText('Book Now'));
  expect(screen.getByText('Name is required')).toBeInTheDocument();
  expect(screen.getByText('Email is required')).toBeInTheDocument();
});
