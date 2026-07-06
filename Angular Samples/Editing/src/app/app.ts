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
        <e-tabitem [header]="{ text: 'Inline Row Editing' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Cell Editing' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Batch Editing' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Dialog Editing' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Dialog Template Editing' }"></e-tabitem>
        <e-tabitem [header]="{ text: 'Command Column Editing' }"></e-tabitem>
      </e-tabitems>
    </ejs-tab>
    
    <router-outlet></router-outlet>
  `
})
export class App {
  constructor(private router: Router) {}

  tabSelected(event: any): void {
    const index = event.selectedIndex;
    const routes = ['/batch', '/cell', '/dialog', '/dialog-template', '/inline', '/command'];
    if (routes[index]) {
      this.router.navigate([routes[index]]);
    }
  }
}
