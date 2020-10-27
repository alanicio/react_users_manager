import styled from "@emotion/styled";

export const Photo = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;

  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 750px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 750px) {
    width: 45px;
    height: 45px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem 1rem;
  max-width: 180px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Arial, Helvetica, sans-serif;
  color: #5f5f5f;

  abbr {
    border-bottom: none;
    cursor: inherit;
    text-decoration: none;
  }

  &:nth-of-type(1) {
    color: #cfcfcf;
    text-align: center;
  }

  @media (max-width: 1200px) {
    display: ${(props) => (props.hideable ? "none" : null)};
  }

  @media (max-width: 710px) {
    padding: 0.25rem 1rem;
    max-width: 75px;
  }

  @media (max-width: 650px) {
    display: ${(props) => (props.semihideable ? "none" : null)};
    max-width: 60px;
  }

  @media (max-width: 386px) {
    max-width: 38px;
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

export const Icon = styled.i`
  color: #ff6a28;
  margin-right: 0.75rem;
  cursor: pointer;
  font-size: 18px;

  @media (max-width: 775px) {
    display: block !important;
    margin: 0.75rem 0;
    font-size: 16px;
  }
`;
