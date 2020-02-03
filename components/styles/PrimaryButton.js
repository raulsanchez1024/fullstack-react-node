import styled from 'styled-components';

const PrimaryButton = styled.button`
  border-radius: 3px;
  border: #fac6c4 1px solid;
  background-color: #fff5f2;
  color: #ef7775;
  width: 85px;
  height: 35px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default PrimaryButton;
