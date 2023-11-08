import styled from 'styled-components';

const CopyButton = styled.button`
  background-color: #fffeff;
  color: #232323;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.1s;

  &:hover {
    background-color: #c4c2c4;
  }

  &:active {
    background-color: #005c00;
  }

`;

export default CopyButton;