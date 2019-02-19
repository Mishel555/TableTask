import React, { Component } from 'react';
import './TableWrapper.scss';
import { data, columns, } from '../../data/data';
import Table from '../Table';
import Filter from '../Filter';

class TableWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterIsOpen: false,
      filters: [],
    };
  }

  onFilterClick = () => {
    return this.setState(({ filterIsOpen }) => ({ 
      filterIsOpen: !filterIsOpen
    }));
  };

  onFilterChange = filters => {
    this.setState({
      filters,
    });
  };

  render() {
    const { filterIsOpen, filters } = this.state;
    let filteredData = filters.length ? data.filter(row => (
      row.some(value => filters.some(filter => filter.selectedTitle === value.column && (!filter.selectedValueList.length || filter.selectedValueList.includes(value.value))))
    )) : data;

    return (
      <div>
        <span className="fas fa-filter filterIcn" onClick={this.onFilterClick}></span>
        {filterIsOpen && <Filter data={data} columns={columns} filters={filters} onFilterChange={this.onFilterChange} />}
        <Table data={filteredData} columns={columns} itemsPerPage={3} />
      </div>
    );
  } 
};

export default TableWrapper;
