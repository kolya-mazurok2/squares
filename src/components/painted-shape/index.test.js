import PaintedShape from './PaintedShape';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Interacts with a PaintedShape', () => {
  const shape = {
    row: 2,
    col: 5,
  };

  const handleHover = jest.fn();

  test('Has onHover callback prop, callback triggers after hovering with relevant data', () => {
    render(<PaintedShape row={shape.row} col={shape.col} onHover={handleHover} />);

    fireEvent.mouseOver(screen.getByTestId('painted-shape'));

    expect(handleHover).toBeCalledWith({
      row: shape.row,
      col: shape.col,
      active: true,
    });
  });

  test('Has not onHover callback prop, callback does not triggers', () => {
    render(<PaintedShape row={shape.row} col={shape.col} />);

    fireEvent.mouseOver(screen.getByTestId('painted-shape'));

    expect(handleHover).toBeCalledTimes(0);
  });
});
