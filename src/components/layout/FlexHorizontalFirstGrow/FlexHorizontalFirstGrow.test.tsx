import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexHorizontalFirstGrow from './FlexHorizontalFirstGrow';

describe('<FlexHorizontalFirstGrow />', () => {
  test('it should mount', () => {
    render(<FlexHorizontalFirstGrow />);

    const flexHorizontalFirstGrow = screen.getByTestId('FlexHorizontalFirstGrow');

    expect(flexHorizontalFirstGrow).toBeInTheDocument();
  });
});