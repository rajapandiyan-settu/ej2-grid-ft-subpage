import React, { createRef } from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import InlineRowEditing from './InlineRowEditing';
import CellEditing from './CellEditing';
import DialogEditing from './DialogEditing';
import BatchEditing from './BatchEditing';
import DialogTemplateEditing from './DialogTemplateEditing';
import CommandColumnEditing from './CommandColumnEditing';
import './App.css';

const gridRefs = {
  inline: createRef(),
  cell: createRef(),
  dialog: createRef(),
  batch: createRef(),
  template: createRef(),
  command: createRef()
};

const EditingSamplesTabs = () => {
  
const tabSelected = (args) => {
    setTimeout(() => {
      switch (args.selectedIndex) {
        case 0:
          gridRefs.inline.current?.refresh();
          break;

        case 1:
          gridRefs.cell.current?.refresh();
          break;

        case 2:
          gridRefs.dialog.current?.refresh();
          break;

        case 3:
          gridRefs.batch.current?.refresh();
          break;

        case 4:
          gridRefs.template.current?.refresh();
          break;

        case 5:
          gridRefs.command.current?.refresh();
          break;

        default:
          break;
      }
    }, 100);
  };

  return (
    <TabComponent id="tabContent" selected={tabSelected}>
      <TabItemsDirective >
        <TabItemDirective  header={{ text: 'Inline Row Editing' }} content={() => <InlineRowEditing gridRef={gridRefs.inline} />} />
        <TabItemDirective header={{ text: 'Cell Editing' }} content={() => <CellEditing gridRef={gridRefs.cell} />} />
        <TabItemDirective header={{ text: 'Dialog Editing' }} content={() => <DialogEditing gridRef={gridRefs.dialog} />} />
        <TabItemDirective header={{ text: 'Batch Editing' }} content={() => <BatchEditing gridRef={gridRefs.batch} />} />
        <TabItemDirective header={{ text: 'Dialog Template Editing' }} content={() => <DialogTemplateEditing gridRef={gridRefs.template} />} />
        <TabItemDirective header={{ text: 'Command Column Editing' }} content={() => <CommandColumnEditing gridRef={gridRefs.command} />} />
      </TabItemsDirective>
    </TabComponent>
  );
};

export default EditingSamplesTabs;
