import React from 'react';
import './ValueSelect.scss';
import moment from 'moment';


const ValueSelect = React.memo(({ 
  filter,
  onFocus,
  setValue,
  hideFilter,
  removeValue,
 }) => (
    <div className='valueSelect values'>
      <div className='addedValuePanel'>
        {filter.selectedValueList.map((value, index) => (
          <span className='addedValue' key={index}>
            {Object(value) instanceof Date ? moment(value).format("YYYY/MM/DD") : value}
            <span className="fas fa-times" onClick={_ => removeValue(value, filter)}></span>
          </span>
        ))}
      </div>
      <input 
        disabled={!filter.selectedTitle} 
        value={filter.selectedValue.toString()} 
        onFocus={_ => onFocus(filter)}
        onClick={_ => onFocus(filter)}
        onChange={({ target }) => setValue(target.value, filter)}
        onKeyUp={e => e.which === 27 && hideFilter(filter)}
        placeholder="Filter..."
      />
      {filter.showList && (
        <ul>
          {filter.valueList.sort().map((value, index) => (
            <li key={index} onClick={_ => setValue(value, filter)}>{Object(value) instanceof Date ? moment(value).format("YYYY/MM/DD") : value}</li>
          ))}
        </ul>
      )}
    </div>
  )
) 

export default ValueSelect;
