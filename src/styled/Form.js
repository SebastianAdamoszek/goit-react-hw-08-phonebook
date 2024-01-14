import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  font-family: Coiny;
  gap: 12px;
  font-size: 20px;

  @media screen and (min-width: 520px) {
    & {
      align-items: flex-start;
      margin: 20px;
    }
  }
`;

export default Form;
