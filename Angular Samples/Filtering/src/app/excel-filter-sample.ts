import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FilterService, GridModule, GroupService, PageService, PageSettingsModel, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [PageService, SortService, FilterService, GroupService],
    standalone: true,
    selector: 'app-excel-filter',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [allowSorting]="true"
                    [allowFiltering]="true" [pageSettings]="pageSettings" [filterSettings]="filterOptions" height='400px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerName' headerText='Customer Name' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class ExcelFilterComponent implements OnInit {

    public data?: object[];
    public pageSettings?: PageSettingsModel = { pageSize: 6 };
    public filterOptions: object = { type: 'Excel' };

    ngOnInit(): void {
        this.data = data;
    }
}
