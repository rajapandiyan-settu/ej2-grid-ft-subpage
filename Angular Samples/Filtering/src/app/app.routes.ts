import { Routes } from '@angular/router';
import { FilterBarComponent } from './filterbar-sample';
import { MenuFilterComponent } from './menu-filter-sample';
import { ExcelFilterComponent } from './excel-filter-sample';
import { CheckboxFilterComponent } from './checkbox-filter-sample';

export const routes: Routes = [
    { path: '', redirectTo: 'filterbar', pathMatch: 'full' },
    { path: 'filterbar', component: FilterBarComponent },
    { path: 'menu', component: MenuFilterComponent },
    { path: 'excel', component: ExcelFilterComponent },
    { path: 'checkbox', component: CheckboxFilterComponent },
    { path: '**', redirectTo: 'filterbar' }
];
