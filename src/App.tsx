import { Box, Container, Grid, Typography } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './components/board/Board';
import CellPositionList from './components/cell-position-list/CellPositionList';
import Header from './components/header/Header';
import SelectForm from './components/select-form/SelectForm';
import { AppDispatch } from './store';
import { getBoardConfigs } from './store/board-config/actions';
import { getBoardConfigsSelector } from './store/board-config/selectors';
import StyledApp from './StyledApp';
import { Option, PaintedShape } from './types';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const boardConfigs = useSelector(getBoardConfigsSelector);

  const [load, setLoad] = useState(false);
  const [boardSize, setBoardSize] = useState(0);
  const [activeShapes, setActiveShapes] = useState<PaintedShape[]>([]);

  const selectFormOptions = useMemo(() => {
    return boardConfigs.reduce((prev, curr) => {
      prev.push({
        name: curr.name,
        value: curr.field.toString(),
      });

      return prev;
    }, [] as Option[]);
  }, [boardConfigs]);

  const handleSelectFormSubmit = (value: string) => {
    setBoardSize(parseInt(value));
    setActiveShapes([]);
  };

  const handlePaintedShapeHover = useCallback(
    (inputShape: PaintedShape) => {
      if (inputShape.active) {
        const payloadShapes = [...activeShapes, inputShape]
          .sort((a, b) => a.col - b.col)
          .sort((a, b) => a.row - b.row);
        setActiveShapes(payloadShapes);
      } else {
        setActiveShapes(
          activeShapes.filter(
            (activeShape) =>
              activeShape.col !== inputShape.col || activeShape.row !== inputShape.row
          )
        );
      }
    },
    [activeShapes]
  );

  useEffect(() => {
    const initialize = async () => {
      await dispatch(getBoardConfigs());
      setLoad(true);
    };

    initialize();
  }, []);

  return (
    <StyledApp>
      <Header />

      <Box>
        <Container maxWidth="lg">
          {load ? (
            <Grid container spacing={4}>
              <Grid item md={8} xs={12}>
                <SelectForm options={selectFormOptions} onSubmit={handleSelectFormSubmit} />

                <Board size={boardSize} onPaintedShapeHover={handlePaintedShapeHover} />
              </Grid>

              <Grid item md={4} xs={12}>
                <Typography variant="h4">Hovered squares</Typography>

                <CellPositionList cells={activeShapes} />
              </Grid>
            </Grid>
          ) : (
            <Typography variant="h4">Loading...</Typography>
          )}
        </Container>
      </Box>
    </StyledApp>
  );
};

export default App;
