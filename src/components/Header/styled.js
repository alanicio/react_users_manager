import styled from "@emotion/styled";

export const Container = styled.header`
  background-color: #ffffff;
  padding: 2rem 4rem;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #e8e8e8;

  @media (max-width: 500px) {
    display: block;
  }

  h3 {
    font-weight: 100;
    font-size: 22px;
  }

  p {
    color: #969696;
    font-size: 16px;
  }

  div {
    &:nth-of-type(2) {
      margin-left: auto;
    }
  }
`;

export const Button = styled.button`
  margin-top: 25px;
  padding: 1rem 2rem;
  margin-left: 60px;
  cursor: pointer;

  ${({ withBackground }) =>
    withBackground &&
    `
      background-color: #ff6a28;
      border: 1px solid #ff6a28;
      color: #fff;
    `}

  ${({ withBackground }) =>
    !withBackground &&
    `
      background-color: #fff;
      border: 1px solid #ff6a28;
      color: #ff6a28;
    `}

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;
