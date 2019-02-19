import React from 'react';
import './TBody.scss';
import moment from 'moment';

const TBody = React.memo(({ columns, data }) => {

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {item.map((td, index) => (
            <td key={index}>{Object(td.value) instanceof Date ? moment(td.value).format("YYYY/MM/DD") : td.value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
});

export default TBody;
