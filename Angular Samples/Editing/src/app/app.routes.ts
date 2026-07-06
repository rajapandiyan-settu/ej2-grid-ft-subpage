import { Routes } from '@angular/router';

import { BatchEditingComponent } from '../com/batch.component';
import { DialogEditingComponent } from '../com/dialog.component';
import { DialogTemplateEditingComponent } from '../com/dialogTem.component';
import { InlineRowEditingComponent } from '../com/inline.component';
import { CommandColumnEditingComponent } from '../com/command.component';
import { CellEditingComponent } from '../com/cell.component';

export const routes: Routes = [
  { path: 'batch', component: BatchEditingComponent },
  { path: 'cell', component: CellEditingComponent },
  { path: 'dialog', component: DialogEditingComponent },
  { path: 'dialog-template', component: DialogTemplateEditingComponent },
  { path: 'inline', component: InlineRowEditingComponent },
  { path: 'command', component: CommandColumnEditingComponent },
  { path: '', redirectTo: 'batch', pathMatch: 'full' }
];
