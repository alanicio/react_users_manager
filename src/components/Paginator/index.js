import React from "react";
import PropTypes from "prop-types";
import { Container, Page } from "./styled";

const Paginator = ({ pages, page, setPage }) => {
  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  return (
    <Container>
      {pagesArray.map((number) => (
        <Page
          key={number}
          selected={page === number ? true : false}
          onClick={() => setPage(number)}
        >
          {number}
        </Page>
      ))}
    </Container>
  );
};

Paginator.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Paginator;
