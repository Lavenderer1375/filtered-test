import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import TableComp from './TableComp';

it('Should verify the Navbar Component in the Table Component.', () => {
  render(<TableComp />);
  const NavComp = screen.getByTitle('nav');
  expect(NavComp).toBeInTheDocument();
});
