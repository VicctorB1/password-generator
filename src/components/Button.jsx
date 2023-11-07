import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: #017400;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005c00;
  }
`;

export default CustomButton;