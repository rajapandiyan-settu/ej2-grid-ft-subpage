import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [RouterOutlet, RouterLink, RadioButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="app-container">
            <div class="control-section">
                <div class="radiobutton-control">
                    <h4>Select a Filter Sample</h4>
                    <div class="row">
                        <ejs-radiobutton label="Filter Bar" name="sampleType" value="filterbar" [checked]="selectedSample === 'filterbar'" (change)="navigateSample($event)"></ejs-radiobutton>
                    </div>
                    <div class="row">
                        <ejs-radiobutton label="Menu Filter" name="sampleType" value="menu" [checked]="selectedSample === 'menu'" (change)="navigateSample($event)"></ejs-radiobutton>
                    </div>
                    <div class="row">
                        <ejs-radiobutton label="Excel-like Filter" name="sampleType" value="excel" [checked]="selectedSample === 'excel'" (change)="navigateSample($event)"></ejs-radiobutton>
                    </div>
                    <div class="row">
                        <ejs-radiobutton label="Checkbox Filter" name="sampleType" value="checkbox" [checked]="selectedSample === 'checkbox'" (change)="navigateSample($event)"></ejs-radiobutton>
                    </div>
                </div>
            </div>

            <div class="content-section">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [`
        .app-container {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .control-section {
            margin-bottom: 30px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
        }
        .radiobutton-control {
            max-width: 420px;
        }
        .radiobutton-control h4 {
            margin: 0 0 20px 0;
            font-weight: 600;
            color: #333;
        }
        .row {
            margin: 15px 0;
        }
        .content-section {
            margin-top: 20px;
        }
    `]
})
export class App {
    public selectedSample: string = 'filterbar';

    constructor(private router: Router) {
        this.router.navigate(['/filterbar']);
    }

    navigateSample(event: any): void {
        if (event.value) {
            this.selectedSample = event.value;
            this.router.navigate([`/${event.value}`]);
        }
    }
}