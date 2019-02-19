import React from 'react';
import './FilterController.scss';
import TitleSelect from './FilterSelects/TitleSelect';
import ValueSelect from './FilterSelects/ValueSelect';

const FilterController = React.memo(({
  filter,
  columns,
  deleteFilter,
  setColumn,
  hideFilter,
  onFocus,
  setValue,
  removeValue,
}) => {
  return (
    <div className='filter'>
      <TitleSelect 
        filter={filter} 
        setColumn={setColumn} 
        deleteFilter={deleteFilter}
        columns={columns}
      />
      <ValueSelect 
        filter={filter} 
        onFocus={onFocus}
        hideFilter={hideFilter}
        setValue={setValue}
        removeValue={removeValue}
      />
    </div>
);
}) 

export default FilterController;
