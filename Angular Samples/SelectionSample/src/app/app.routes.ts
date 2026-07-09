import { Routes } from '@angular/router';

import { SelectionNormalRowComponent } from '../com/normal-row';
import { SelectionCheckboxComponent } from '../com/checkbox';
import { SelectionConditionalCheckboxComponent } from '../com/conditional-checkbox';
import { SelectionCellComponent } from '../com/cell';
import { SelectionColumnComponent } from '../com/column';

export const routes: Routes = [
  { path: 'normal-row', component: SelectionNormalRowComponent },
  { path: 'checkbox', component: SelectionCheckboxComponent },
  { path: 'conditional-checkbox', component: SelectionConditionalCheckboxComponent },
  { path: 'cell', component: SelectionCellComponent },
  { path: 'column', component: SelectionColumnComponent },
  { path: '', redirectTo: 'normal-row', pathMatch: 'full' }
];