import { SelectionSettingsModel, ColumnModel, EditService, EditSettingsModel, FilterService, FilterSettingsModel, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit } from '@angular/core';
import { productsTrackData, ProductModel } from '../datasource';

@Component({
  imports: [GridModule],
  providers: [PageService, SortService, EditService, ToolbarService, FilterService],
  standalone: true,
  selector: 'app-selection-conditional-checkbox',
  template: `<ejs-grid [dataSource]='data' height="245" [allowPaging]='true' [editSettings]='editSettings'
               [toolbar]='toolbar' [allowSelection]='true' [selectionSettings]='selectionOptions'
               [allowFiltering]="true" [filterSettings]="filterSettings" [allowSorting]="true"
               [isRowSelectable]='isRowSelectable'>
                <e-columns>
                    <e-column type='checkbox' width='50'></e-column>
                    <e-column field='productId' headerText='Product ID' isPrimaryKey='true' textAlign='Right' width='110'></e-column>
                    <e-column field='productName' headerText='Product Name' width='150'></e-column>
                    <e-column field='category' headerText='Category' width='120'></e-column>
                    <e-column field='price' headerText='Price' format='C2' textAlign='Right' width='110'></e-column>
                    <e-column field='brand' headerText='Brand' width='110'></e-column>
                    <e-column field='rating' headerText='Rating' textAlign='Right' width='80'></e-column>
                    <e-column field='status' headerText='Status' width='110'></e-column>
                </e-columns>
             </ejs-grid>`
})

export class SelectionConditionalCheckboxComponent implements OnInit {

  public data?: ProductModel[];
  public selectionOptions?: SelectionSettingsModel;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public filterSettings?: FilterSettingsModel;

  ngOnInit(): void {
    this.data = productsTrackData;
    this.selectionOptions = { persistSelection: true };
    this.editSettings = { allowEditing: true, allowAdding: false, allowDeleting: false };
    this.toolbar = ['Edit', 'Update', 'Cancel'];
    this.filterSettings = { type: 'Excel' };
  }

  public isRowSelectable = (data: ProductModel, columns: ColumnModel[]): boolean => {
    return data.status !== 'Out of Stock';
  }
}