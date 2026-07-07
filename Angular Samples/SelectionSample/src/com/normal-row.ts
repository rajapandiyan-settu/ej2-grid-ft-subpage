import { productsTrackData } from '../datasource';
import { Component, OnInit } from '@angular/core';
import { 
  EditService, 
  FilterService, 
  GridModule, 
  PageService, 
  SelectionSettingsModel, 
  ToolbarService 
} from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [EditService, ToolbarService, PageService, FilterService],
  standalone: true,
  selector: 'app-selection-normal-row',
  template: `   
    <ejs-grid #grid [dataSource]="data" allowPaging="true" 
      [selectionSettings]="selectionOptions">
      <e-columns>
        <e-column field="productId" headerText="Product ID" width="120" textAlign="Right"></e-column>
        <e-column field="productName" headerText="Product Name" width="150"></e-column>
        <e-column field="category" headerText="Category" width="130"></e-column>
        <e-column field="price" headerText="Price" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="brand" headerText="Brand" width="130"></e-column>
        <e-column field="rating" headerText="Rating" width="100" textAlign="Right"></e-column>
        <e-column field="status" headerText="Status" width="150"></e-column>
      </e-columns>
    </ejs-grid>`
})
export class SelectionNormalRowComponent implements OnInit {
  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = productsTrackData;
    this.selectionOptions = { mode: 'Row', type: 'Multiple' };
  }
}