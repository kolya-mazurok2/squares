import styled from 'styled-components';

interface Props {
  inputWidth: string;
}

const StyledBoard = styled.div<Props>`
  table tbody tr td {
    width: ${(props) => props.inputWidth};
    padding: 0;
    border: 1px solid #ccc;
    line-height: 1;
    position: relative;

    &:after {
      content: '';
      display: block;
      margin-top: 100%;
      font-size: 0;
    }
  }
`;

export default StyledBoard;
