import styled from 'styled-components';

interface Props {
  active: boolean;
}

const StyledPaintedShape = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.active ? '#1976d2' : '#fff')};
`;

export default StyledPaintedShape;
