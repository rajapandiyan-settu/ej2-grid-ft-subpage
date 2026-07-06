import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EditService,
  FilterService,
  ToolbarService,
  SortService,
  GridComponent,
  GridModule
} from '@syncfusion/ej2-angular-grids';
import { data } from '../datasource';

@Component({
  selector: 'app-inline-row-editing',
  standalone: true,
  imports: [CommonModule, GridModule],
  providers: [EditService, FilterService, ToolbarService, SortService],
  template: `
    <ejs-grid
      #grid
      [dataSource]="data"
      [editSettings]="editOptions"
      [toolbar]="toolbarOptions"
      [allowSorting]="true"
      [allowFiltering]="true"
      [filterSettings]="filterOptions"
      height="315">
      <e-columns>
        <e-column field="OrderID" headerText="Order Number" width="130" isPrimaryKey="true" [validationRules]="orderIDRules"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="150" [validationRules]="customerNameRules"></e-column>
        <e-column field="Product" headerText="Product" width="140"></e-column>
        <e-column field="Status" headerText="Order Status" width="150" editType="dropdownedit"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="150" format="yMd" editType="datepickeredit"></e-column>
        <e-column field="Amount" headerText="Amount ($)" width="130" format="C2" textAlign="Right" editType="numericedit" [validationRules]="amountRules"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class InlineRowEditingComponent implements OnInit {
  @ViewChild('grid') gridComponent?: GridComponent;

public data?: object[];
  editOptions: any = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  filterOptions: any = { type: 'CheckBox' };

  orderIDRules: any = { required: true };
  customerNameRules: any = { required: true, minLength: 3 };
  amountRules: any = { required: true, min: 1, max: 10000 };



  ngOnInit(): void {

      this.data = data;

  }
}
