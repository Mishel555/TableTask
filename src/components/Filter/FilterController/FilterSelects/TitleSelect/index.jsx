import React from 'react';
import './TitleSelect.scss';

const TitleSelect = React.memo(({ filter, columns, setColumn, deleteFilter, }) => {
  return (
    <div className='titleSelect'>
      <span className="fas fa-times" onClick={_ => deleteFilter(filter)}></span>Where
      <select value={filter.selectedTitle} onChange={({ target }) => setColumn(target.value, filter)}>
      <option value='' disabled key="0">Select one</option>
      {columns.map(column => (
        <option key={column.name}>{column.name}</option>
      ))}
      </select>
    </div>
  );
}) 

export default TitleSelect;
