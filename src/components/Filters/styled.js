import styled from "@emotion/styled";


export const Container = styled.div`
  background-color: #ffffff;
  margin-top: 2rem;
  padding: 2rem 4rem;
  border: 1px solid #e8e8e8;

  @media (max-width: 680px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 474px) {
    padding: 2rem 1rem;
  }
`;

export const TextInput = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e8e8e8;
  width: 400px;
  padding: 1rem 2rem;
  margin-right: 10rem;
  display: inline-block;

  @media (max-width: 680px) {
    max-width: 80%;
  }

  @media (max-width: 400px) {
    max-width: 75%;
  }
  
  label {
    color: #5f5f5f;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;

    background-color: #f9f9f9;
    border: none;
    margin-left: 1rem;
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
  } 
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;

  background-color: #f9f9f9;
  border: 1px solid #e8e8e8;
  padding: 0.5rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: center;
  color: #5f5f5f;
  margin-right: 2rem;
  cursor: pointer;

  @media (max-width: 809px) {
    margin-top: 2rem;
  }

  @media (max-width: 528px) {
    margin-right: 0.5rem;
  }
`;

export const Icon = styled.i`
  margin-left: 2rem;
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.selected ? '#ff6a28' : '#bcbcbc'};

  @media (max-width: 1635px) {
    margin-top: 2rem;
  }
`;