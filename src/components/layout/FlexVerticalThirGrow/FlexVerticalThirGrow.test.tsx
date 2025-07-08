import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexVerticalThirGrow from './FlexVerticalThirGrow';

describe('<FlexVerticalThirGrow />', () => {
  test('it should mount', () => {
    render(<FlexVerticalThirGrow />);

    const flexVerticalThirGrow = screen.getByTestId('FlexVerticalThirGrow');

    expect(flexVerticalThirGrow).toBeInTheDocument();
  });
});