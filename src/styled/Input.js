import styled from 'styled-components';

const Input = styled.input`
  min-width: 280px;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: rgb(89, 22, 153);
  font-size: 20px;
  caret-color: green;
  border: 1px solid blue;

  &::placeholder {
    color: rgba(138, 43, 226, 0.3);
  }
`;

export default Input;
