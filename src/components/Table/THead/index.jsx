import React from 'react';
import './THead.scss';

const THead = React.memo(({ columns }) => (
  <thead>
    <tr>
      {columns.map((td, index) => (
        <th key={index}>{td.name}</th>
      ))}
    </tr>
  </thead>
  )
);

export default THead;
