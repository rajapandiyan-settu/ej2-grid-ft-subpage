import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import '../styles.css'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TabModule, RouterOutlet],
  template: `

    <ejs-tab id="tabContent" (selected)="tabSelected($event)">
      <e-tabitems>
       <e-tabitem [header]="{ text: 'Normal-Row Selection' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Checkbox Selection' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Conditional-Checkbox Selection' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Cell Selection' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Column Selection' }"></e-tabitem>
      </e-tabitems>
    </ejs-tab>
    
    <router-outlet></router-outlet>
  `
})
export class App {
  constructor(private router: Router) {}

  tabSelected(event: any): void {
    const index = event.selectedIndex;
    const routes = ['/normal-row', '/checkbox', '/conditional-checkbox', '/cell', '/column'];
    if (routes[index]) {
      this.router.navigate([routes[index]]);
    }
  }
}
