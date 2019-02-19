import React from 'react';
import './AddFilter.scss';

const AddFilter = React.memo(({ addFilter }) => {
  return (
    <div className='addFilter' onClick={addFilter}>
      <span className="fas fa-plus"></span>Add Filter
    </div>
);
}) 

export default AddFilter;
