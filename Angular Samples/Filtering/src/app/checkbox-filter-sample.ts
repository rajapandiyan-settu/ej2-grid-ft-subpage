import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FilterService, FilterSettingsModel, GridModule, PageService, PageSettingsModel, SearchService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [  
        GridModule
    ],
    providers: [FilterService, PageService, SearchService, SortService, ToolbarService],
    standalone: true,
    selector: 'app-checkbox-filter',
    template: `<ejs-grid [dataSource]='data' allowPaging='true' [pageSettings]="pageSettings" [allowFiltering]='true' [allowSorting]='true' [toolbar]='toolbarOptions' height='400px' [filterSettings]='filterSettings'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerName' headerText='Customer Name' width=120></e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=100></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class CheckboxFilterComponent implements OnInit {

    public data?: object[];
    public filterSettings?: FilterSettingsModel;
    public pageSettings?: PageSettingsModel = { pageSize: 5 };
    public toolbarOptions?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.filterSettings = {
            type: 'CheckBox'
        };
        this.toolbarOptions = ['Search'];
    }
}
