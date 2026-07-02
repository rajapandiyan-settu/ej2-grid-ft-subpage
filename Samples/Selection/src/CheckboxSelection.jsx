import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

const CheckboxSelection = () => {
  const selectionSettings = { checkboxOnly: true };

  return (
    <div className="sample-section">
      <GridComponent dataSource={data} height={315} selectionSettings={selectionSettings} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="50" />
          <ColumnDirective field="productId" headerText="Product ID" width="120" textAlign="Right" />
          <ColumnDirective field="productName" headerText="Product Name" width="220" />
          <ColumnDirective field="category" headerText="Category" width="150" />
          <ColumnDirective field="price" headerText="Price" width="120" format="C0" textAlign="Right" />
          <ColumnDirective field="brand" headerText="Brand" width="100" />
          <ColumnDirective field="rating" headerText="Rating" width="100" textAlign="Right" />
          <ColumnDirective field="status" headerText="Status" width="130" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default CheckboxSelection;
