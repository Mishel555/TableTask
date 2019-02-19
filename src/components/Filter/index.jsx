import React from 'react';
import './Filter.scss';
import FilterController from './FilterController';
import AddFilter from './AddFilter';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: props.filters,
    };
  }

  addFilter = () => {
    this.setState(({ filters }) => ({
      filters: [...filters, {
        selectedTitle: '',
        selectedValue: '',
        valueList: [],
        selectedValueList: [],
        showList: false,
      }],
    }));
  };

  setColumn = (title, selectedFilter) => {
    const { data } = this.props;
    const valueList = new Set();
    data.forEach(row => {
      const val = row.find(val => val.column === title);
      valueList.add(val.value);
    });
    
    this.setState(({ filters }) => ({
      filters: filters.map(filter => filter === selectedFilter ? ({
        ...filter,
        selectedValue: '',
        selectedTitle: title,
        valueList: [...valueList].sort((a, b) => a < b ? -1 : Number(a !== b)),
        selectedValueList: []
      }) : filter),
    }));
  };

  onFocus = (selectedFilter) => {
    this.setState(({ filters }) => ({
      filters: filters.map(filter => ({
        ...filter,
        showList: filter === selectedFilter,
      })),
    }));
  }

  hideFilter = (selectedFilter) => {
    this.setState(({ filters }) => ({
      filters: filters.map(filter => filter === selectedFilter ? ({
        ...filter,
        showList: false,
      }) : filter),
    }));
  }

  setValue = (value, selectedFilter) => {
    this.setState(({ filters }) => ({
      filters: filters.map(filter => filter === selectedFilter ? ({
        ...filter,
        selectedValueList: [...filter.selectedValueList, value],
        valueList: filter.valueList.filter(val => val !== value),
        showList: false,
      }) : filter),
    }), () => this.props.onFilterChange(this.state.filters));
  };

  removeValue = (value, selectedFilter) => {
    this.setState(({ filters }) => ({
      filters: filters.map(filter => filter === selectedFilter ? ({
        ...filter,
        selectedValueList: filter.selectedValueList.filter(val => val !== value),
        valueList: [...filter.valueList, value],
      }) : filter),
    }), () => this.props.onFilterChange(this.state.filters));
  };

  deleteFilter = (selectedFilter) => {
    this.setState(({ filters }) => ({
      filters: filters.filter(filter => selectedFilter !== filter)
    }), () => this.props.onFilterChange(this.state.filters));
  }

  render() {
    const { filters } = this.state;
    const { columns } = this.props;
    return (
      <div className='filterContainer'>
        {filters.map((filter, index) => (
          <FilterController 
            key={index}
            filter={filter}
            columns={columns}
            deleteFilter={this.deleteFilter}          
            setColumn={this.setColumn}
            hideFilter={this.hideFilter}
            onFocus={this.onFocus}
            setValue={this.setValue}
            removeValue={this.removeValue}
          />
        ))}
        <AddFilter 
          addFilter={this.addFilter} 
        />
      </div>
    );
  }
}

export default Filter;
