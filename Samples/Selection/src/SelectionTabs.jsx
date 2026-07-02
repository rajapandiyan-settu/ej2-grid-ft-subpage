import * as React from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import './default.css';
import NormalRowSelection from './NormalRowSelection';
import CheckboxSelection from './CheckboxSelection';
import ConditionalCheckboxSelection from './ConditionalCheckboxSelection';
import CellSelection from './CellSelection';
import ColumnSelection from './ColumnSelection';

const SelectionTabs = () => {
  const headertext = [
    { text: 'Normal Row' },
    { text: 'Checkbox' },
    { text: 'Conditional Checkbox' },
    { text: 'Cell' },
    { text: 'Column' }
  ];

  const normalRowContent = () => (<NormalRowSelection />);
  const checkboxContent = () => (<CheckboxSelection />);
  const conditionalCheckboxContent = () => (<ConditionalCheckboxSelection />);
  const cellContent = () => (<CellSelection />);
  const columnContent = () => (<ColumnSelection />);

  return (
    <div className='control-pane'>
      <div className='control-section tab-control-section'>
        <TabComponent id='selectionTab'>
          <TabItemsDirective>
            <TabItemDirective header={headertext[0]} content={normalRowContent} />
            <TabItemDirective header={headertext[1]} content={checkboxContent} />
            <TabItemDirective header={headertext[2]} content={conditionalCheckboxContent} />
            <TabItemDirective header={headertext[3]} content={cellContent} />
            <TabItemDirective header={headertext[4]} content={columnContent} />
          </TabItemsDirective>
        </TabComponent>
      </div>
    </div>
  );
};

export default SelectionTabs;
