import { useState } from 'react';
import { PaintedShape as PaintedShapeType } from '../../types';
import StyledPaintedShape from './StyledPaintedShape';

interface Props {
  row: number;
  col: number;
  onHover?: (shape: PaintedShapeType) => void;
}

const PaintedShape = ({ row, col, onHover }: Props) => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    const newActive = !active;
    setActive(newActive);

    onHover?.({ row, col, active: newActive });
  };

  return (
    <StyledPaintedShape
      onMouseEnter={handleMouseEnter}
      active={active}
      data-testid="painted-shape"
    />
  );
};

export default PaintedShape;
