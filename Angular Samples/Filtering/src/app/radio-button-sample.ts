import { Component } from '@angular/core';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Router } from '@angular/router';

@Component({
    imports: [RadioButtonModule],
    standalone: true,
    selector: 'app-radio-button',
    template: `<div class="control-section">
                    <div class="radiobutton-control">
                        <h4>Select a Filter Type</h4>
                        <div class="row">
                            <ejs-radiobutton label="Filter Bar" name="filterType" value="filterbar" checked="true" (change)="onFilterTypeChange($event)"></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton label="Menu Filter" name="filterType" value="menu" (change)="onFilterTypeChange($event)"></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton label="Excel-like Filter" name="filterType" value="excel" (change)="onFilterTypeChange($event)"></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton label="Checkbox Filter" name="filterType" value="checkbox" (change)="onFilterTypeChange($event)"></ejs-radiobutton>
                        </div>
                    </div>
                </div>`,
    styles: [`
        .control-section {
            padding: 20px;
        }
        .radiobutton-control {
            max-width: 300px;
        }
        .radiobutton-control h4 {
            margin-bottom: 20px;
            font-weight: 600;
        }
        .row {
            margin: 15px 0;
        }
    `]
})
export class RadioButtonComponent {

    selectedFilterType: string = 'filterbar';

    constructor(private router: Router) {}

    onFilterTypeChange(event: any): void {
        this.selectedFilterType = event.value;
        console.log('Selected Filter Type:', this.selectedFilterType);
        this.router.navigate([`/${this.selectedFilterType}`]);
    }
}
