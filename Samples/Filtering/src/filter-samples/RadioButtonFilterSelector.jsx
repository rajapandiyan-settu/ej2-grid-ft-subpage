import * as React from 'react';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import './RadioButtonFilterSelector.css';

function RadioButtonFilterSelector({ selectedFilter, onChange }) {
  return (
    <div className="control-pane">
      <div className="control-section radio-button-control">
        <h3>Select filter type</h3>
        <div className="row">
          <RadioButtonComponent
            checked={selectedFilter === 'FilterBar'}
            label="Filter Bar"
            name="filterType"
            value="FilterBar"
            change={onChange}
          />
        </div>
        <div className="row">
          <RadioButtonComponent
            checked={selectedFilter === 'Excel'}
            label="Excel-like Filter"
            name="filterType"
            value="Excel"
            change={onChange}
          />
        </div>
        <div className="row">
          <RadioButtonComponent
            checked={selectedFilter === 'Menu'}
            label="Menu Filter"
            name="filterType"
            value="Menu"
            change={onChange}
          />
        </div>
        <div className="row">
          <RadioButtonComponent
            checked={selectedFilter === 'CheckBox'}
            label="Checkbox Filter"
            name="filterType"
            value="CheckBox"
            change={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioButtonFilterSelector;
