import { ColumnDirective, ColumnsDirective, GridComponent, Sort } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from '../datasource';

function MenuFilterSample() {
  const filterSettings = { type: 'Menu' };
  const toolbarOptions = ['Search'];

  return (
    <div className="sample-card">
      <h3>Menu Filter</h3>
      <GridComponent
        dataSource={data}
        allowFiltering={true}
        allowSorting={true}
        filterSettings={filterSettings}
        toolbar={toolbarOptions}
        height={320}
      >
        <ColumnsDirective>
          <ColumnDirective field="BookID" headerText="Book ID" width="90" textAlign="Right" />
          <ColumnDirective field="Title" headerText="Title" width="180" />
          <ColumnDirective field="Author" headerText="Author" width="140" />
          <ColumnDirective field="Category" headerText="Category" width="130" />
          <ColumnDirective field="PublishDate" headerText="Publish Date" width="150" format="yMd" textAlign="Right" type="date" />
          <ColumnDirective field="Status" headerText="Status" width="120" />
        </ColumnsDirective>
        <Inject services={[Filter, Sort, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default MenuFilterSample;
