import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Sort, Filter, Search, CommandColumn } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

const CommandColumnEditing = ({gridRef}) => {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const filterOptions = { type: 'CheckBox' };
  
  const orderIDRules = { required: true };
  const customerNameRules = { required: true, minLength: 3 };
  const amountRules = { required: true, min: 1, max: 10000 };

  const commands = [
    { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
    { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
    { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
    { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }
  ];
  return (
    <GridComponent ref={gridRef} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} allowSorting={true} allowFiltering={true} filterSettings={filterOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order Number' width='130' isPrimaryKey={true} validationRules={orderIDRules}/>
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={customerNameRules}/>
        <ColumnDirective field='Product' headerText='Product' width='140'/>
        <ColumnDirective field='Status' headerText='Order Status' width='150' editType='dropdownedit'/>
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit'/>
        <ColumnDirective field='Amount' headerText='Amount ($)' width='130' format='C2' textAlign='Right' editType='numericedit' validationRules={amountRules} />
        <ColumnDirective headerText='Commands' width='120' commands={commands} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar, Sort, Filter, CommandColumn]} />
    </GridComponent>
  );
};

export default CommandColumnEditing;
