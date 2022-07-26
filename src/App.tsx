import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { getBoardConfigs } from './store/board-config/actions';
import { getBoardConfigsSelector } from './store/board-config/selectors';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const boardConfigs = useSelector(getBoardConfigsSelector);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await dispatch(getBoardConfigs());
      setLoad(true);
    };

    initialize();
  }, []);

  return <h1>{load ? JSON.stringify(boardConfigs) : 'Loading...'}</h1>;
};

export default App;
