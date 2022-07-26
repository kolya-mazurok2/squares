import styled from 'styled-components';

const StyledSelectForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .MuiFormControl-root:first-child {
    width: calc(100% - 100px);
    max-width: 400px;
  }
`;

export default StyledSelectForm;
