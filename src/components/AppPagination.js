import React from 'react';
import { Pagination } from 'react-bootstrap';

const AppPagination = (props) => {
  const { totalPages, currentPage, clickFn } = props;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={e=> clickFn(e, number)}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination bsSize="large">{items}</Pagination>
  )
}

export default AppPagination;
