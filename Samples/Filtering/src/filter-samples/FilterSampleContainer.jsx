import * as React from 'react';
import RadioButtonFilterSelector from './RadioButtonFilterSelector';
import FilterBarSample from './FilterBarSample';
import CheckboxFilterSample from './CheckboxFilterSample';
import ExcelFilterSample from './ExcelFilterSample';
import MenuFilterSample from './MenuFilterSample';
import './FilterSampleContainer.css';

function FilterSampleContainer() {
  const [selectedFilter, setSelectedFilter] = React.useState('FilterBar');

  const handleFilterChange = (args) => {
    setSelectedFilter(args.value);
  };

  return (
    <div className="filter-sample-root">
      <RadioButtonFilterSelector selectedFilter={selectedFilter} onChange={handleFilterChange} />
      <div className="filter-sample-grid">
        {selectedFilter === 'FilterBar' && <FilterBarSample />}
        {selectedFilter === 'Excel' && <ExcelFilterSample />}
        {selectedFilter === 'Menu' && <MenuFilterSample />}
        {selectedFilter === 'CheckBox' && <CheckboxFilterSample />}
      </div>
    </div>
  );
}

export default FilterSampleContainer;
