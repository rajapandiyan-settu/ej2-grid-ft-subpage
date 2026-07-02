import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

const InlineRowEditing = ( {gridRef }) => {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const filterOptions = { type: 'CheckBox' };
  
  const orderIDRules = { required: true };
  const customerNameRules = { required: true, minLength: 3 };
  const amountRules = { required: true, min: 1, max: 10000 };

  return (
    <GridComponent  ref={gridRef} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} allowSorting={true} allowFiltering={true} filterSettings={filterOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order Number' width='130' isPrimaryKey={true} validationRules={orderIDRules}/>
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={customerNameRules}/>
        <ColumnDirective field='Product' headerText='Product' width='140'/>
        <ColumnDirective field='Status' headerText='Order Status' width='150' editType='dropdownedit'/>
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit'/>
        <ColumnDirective field='Amount' headerText='Amount ($)' width='130' format='C2' textAlign='Right' editType='numericedit' validationRules={amountRules} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar, Sort, Filter]} />
    </GridComponent>
  );
};

export default InlineRowEditing;
