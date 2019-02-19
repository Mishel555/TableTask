import React, { Fragment, useState } from 'react';
import './PaginationPanel.scss';
const PaginationPanel = ({ data, itemsPerPage, setPage, }) => {
  const count = itemsPerPage;
  
  return (
    <ul className='paginationPanel'>
      {Array(Math.ceil(data.length / count)).fill(null).map((item, index) => (
        <li style={{ float: 'left' }} key={index + 1} onClick={_ => setPage(index + 1)}>{index + 1}</li>
      ))}
    </ul>
  );
};

export default PaginationPanel;
