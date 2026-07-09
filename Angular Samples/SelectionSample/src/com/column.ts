import { productsTrackData } from '../datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { 
  EditService, 
  FilterService, 
  GridModule, 
  PageService, 
  ToolbarService, 
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel
} from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [GridModule, TextBoxModule, ButtonModule],
  providers: [EditService, ToolbarService, PageService, FilterService],
  standalone: true,
  selector: 'app-selection-column',
  template: `
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid #grid [dataSource]="data" [selectionSettings]="selectionOptions">
        <e-columns>
          <e-column field="productId" headerText="Product ID" textAlign="Right" width="120"></e-column>
          <e-column field="productName" headerText="Product Name" width="150"></e-column>
          <e-column field="category" headerText="Category" width="130"></e-column>
          <e-column field="price" headerText="Price" format="C2" width="120"></e-column>
          <e-column field="brand" headerText="Brand" width="130"></e-column>
          <e-column field="rating" headerText="Rating" width="100"></e-column>
          <e-column field="status" headerText="Status" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>`
})
export class SelectionColumnComponent implements OnInit {
  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = productsTrackData;
    this.selectionOptions = { allowColumnSelection: true, type: 'Multiple' };
    this.pageOptions = { pageSize: 5 };
  }

  selectColumns(columns: number[]): void {
    (this.grid as GridComponent).selectionModule.clearColumnSelection();
    (this.grid as GridComponent).selectionModule.selectColumns(columns);
  }
}
