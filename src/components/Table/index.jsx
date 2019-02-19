import React, { Fragment, useState } from 'react';
import './Table.scss';
import THead from './THead';
import TBody from './TBody';
import PaginationPanel from './PaginationPanel'

const Table = ({ data, columns, itemsPerPage }) => {
  const count = itemsPerPage;
  const [page, setPage] = useState(1);
  // fetching order of columns
  const colOrder = columns.map(column => column.name);

  data.forEach((row, i) => { 
    // generating new array for collecting data with right order
    const newRow = new Array(colOrder.length);

    row.forEach((value) => {
      // finding index of colomn from ordered array
      const index = colOrder.indexOf(value.column);
      // checking type of data
      if (!(Object(value.value) instanceof columns[index].type)) {
        throw new TypeError('Invalid type passed. ' + columns[index].type.name + ' required');
      }
      // and adding row to the new array
      newRow[index] = value;
    });
    // changing old row with new sorted one
    data[i] = newRow;
  });
  
  return (
    <Fragment>
      <table className='table'>
        <THead columns={columns}/>
        <TBody columns={columns} data={[...data].splice(count * (page - 1), count)} />
      </table>
      <PaginationPanel 
        data={data} 
        itemsPerPage={itemsPerPage} 
        setPage={setPage} />
    </Fragment>
  );
};

export default Table;
