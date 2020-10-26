import styled from "@emotion/styled";

export const Modal = styled.div`
  display: ${({displayModal}) => displayModal ? null : "none"};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 9rem 0;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: auto;
  border: 1px solid #888;
  width: 30%;
  padding: 3rem 6rem;
  overflow: hidden;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }

  h4 {
    font-family: Arial, Helvetica, sans-serif;
  }

  input[type="text"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: #f9f9f9;
    border: 1px solid #e8e8e8;
    padding: 0.75rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: #f9f9f9;
    border: 1px solid #e8e8e8;
    padding: 0.75rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid #e8e8e8;

    width: 1200px;
    margin-left: -300px;

  }
`;

export const Photo = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #f4f4f4;
  display: inline-block;

  background-image: url(${({ photo }) => photo});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

export const InputFile = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 6rem;
  input[type="file"] {
    display: none;
  }

  label:first-of-type {
    color: #959595;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 1rem;
  }

  label:last-of-type {
    border: none;
    background-color: #ff6a28;
    color: white;
    border-radius: 8px;
    display: block;
    width: 6rem;
    text-align: center;
    padding: 1rem 1rem;
    cursor: pointer;
  }
`;

export const RoundedSwitch = styled.label`
  /* The switch container */
  position: relative;
  display: inline-block;
  width: 65px;
  height: 26px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e2e2e2;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  /* The circle, the switch */
  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #637ea8;
  }

  input:focus + span {
    box-shadow: 0 0 1px #637ea8;
  }

  /* The circle when switch is ON */
  input:checked + span:before {
    -webkit-transform: translateX(38px);
    -ms-transform: translateX(38px);
    transform: translateX(38px);
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: right;
  padding: 1rem 4rem 0;
`;

export const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: ${({ withBackground }) =>
    withBackground ? "#ff6a28" : "#fff"};
  color: ${({ withBackground }) => (withBackground ? "#fff" : "#ff6a28")};
  padding: 1rem 1rem;
  border: 1px solid #ff6a28;
  margin-left: 2rem;

  cursor: pointer;
`;
