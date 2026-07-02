import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Selection, Filter, Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { productsTrackData } from './datasource';

const ConditionalCheckboxSelection = () => {
  const editSettings = { allowEditing: true, allowAdding: false, allowDeleting: false };
  const selectionSettings = { persistSelection: true };
  const toolbarSettings = ['Edit', 'Update', 'Cancel'];
  const filterSettings = { type: 'Excel' };

  const isRowSelectable = (rowData) => {
    return rowData.status !== 'Out of Stock';
  };

  return (
    <div className="sample-section">
      <GridComponent
        dataSource={productsTrackData}
        allowPaging={true}
        editSettings={editSettings}
        toolbar={toolbarSettings}
        allowFiltering={true}
        filterSettings={filterSettings}
        allowSorting={true}
        isRowSelectable={isRowSelectable.bind(this)}
        selectionSettings={selectionSettings}
        height={315}
      >
        <Inject services={[Page, Sort, Selection, Filter, Toolbar, Edit]} />
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="50" />
          <ColumnDirective field="productId" headerText="Product ID" isPrimaryKey={true} validationRules={{ required: true }} textAlign="Right" width="120" />
          <ColumnDirective field="productName" headerText="Product Name" validationRules={{ required: true }} width="220" />
          <ColumnDirective field="category" headerText="Category" editType="dropdownedit" width="150" />
          <ColumnDirective field="price" headerText="Price" validationRules={{ required: true }} format="C0" textAlign="Right" width="120" />
          <ColumnDirective field="brand" headerText="Brand" width="100" />
          <ColumnDirective field="rating" headerText="Rating" width="100" textAlign="Right" />
          <ColumnDirective field="status" headerText="Status" editType="dropdownedit" width="130" />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default ConditionalCheckboxSelection;