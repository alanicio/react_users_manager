import styled from "@emotion/styled";

export const Table = styled.table`
  background-color: #fff;
  border: 2px solid #e8e8e8;
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border: 1px solid #e8e8e8;
`;

export const TableTitle = styled.th`
  padding: 0.75rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #5f5f5f;
  font-weight: bold;
  font-size: 15px;
  text-align: left;

  @media (max-width: 1200px){
    display: ${(props) => (props.hideable ? 'none': null)};
  }

  @media (max-width: 650px){
    display: ${(props) => (props.semihideable ? 'none': null)};
  }
`;
