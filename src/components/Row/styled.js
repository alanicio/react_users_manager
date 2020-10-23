import styled from "@emotion/styled";

export const Photo = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;

  background-image: url(${({photo}) => photo });
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 750px){
    width: 70px;
    height: 70px;
  }

  @media (max-width: 750px){
    width: 45px;
    height: 45px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e8e8e8;
`;

export const TableCell = styled.td`
  padding: 0.5rem 1rem;
  max-width: 180px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Arial, Helvetica, sans-serif;
  color: #5f5f5f;

  &:nth-of-type(1){
    color: #cfcfcf;
    text-align: center;
  }

  @media (max-width: 1200px){
    display: ${(props) => (props.hideable ? 'none': null)};
  }

  @media (max-width: 710px){
    padding: 0.25rem 1rem;
    max-width: 75px;
  }

  @media (max-width: 650px){
    display: ${(props) => (props.semihideable ? 'none': null)};
    max-width: 60px;
  }
`;
