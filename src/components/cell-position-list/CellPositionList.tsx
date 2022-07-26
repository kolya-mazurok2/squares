import { List, ListItem } from '@mui/material';
import StyledCellPositionList from './StyledCellPositionList';

interface Cell {
  row: number;
  col: number;
}

interface Props {
  cells: Cell[];
}

const CellPositionList = ({ cells = [] }: Props) => {
  return (
    <StyledCellPositionList className="cell-position-list">
      <List>
        {cells.map((cell, index) => (
          <ListItem key={index}>
            row {cell.row} col {cell.col}
          </ListItem>
        ))}
      </List>
    </StyledCellPositionList>
  );
};

export default CellPositionList;
