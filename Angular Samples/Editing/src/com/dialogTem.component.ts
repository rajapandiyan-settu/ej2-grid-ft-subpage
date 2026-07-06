import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormGroup, AbstractControl, FormControl, Validators, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import {
  EditService,
  FilterService,
  ToolbarService,
  SortService,
  GridComponent,
  GridModule,
  DialogEditEventArgs,
  SaveEventArgs
} from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerComponent, DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxComponent, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Dialog } from '@syncfusion/ej2-angular-popups';
import { Browser } from '@syncfusion/ej2-base';
import { data } from '../datasource';
import { DataUtil } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-dialog-template-editing',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    ReactiveFormsModule,
    GridModule,
    DropDownListModule,
    DatePickerModule,
    NumericTextBoxModule
  ],
  providers: [EditService, FilterService, ToolbarService, SortService],
  template: `
    <style>
      .form-row {
    display: flex;
    gap: 12px;
    
    }
    .form-group.col-md-6 {
     width: 200px;
    }
     .product-amount {
     margin-bottom: 20px;
     }
    </style>
    <ejs-grid
      #grid
      [dataSource]="data"
      [editSettings]="editSettings"
      [toolbar]="toolbarOptions"
      [allowSorting]="true"
      [allowFiltering]="true"
      [filterSettings]="filterSettings"
      height="315"
      (actionBegin)="actionBegin($event)"
      (actionComplete)="actionComplete($event)">
      <e-columns>
        <e-column field="OrderID" headerText="Order Number" width="130" isPrimaryKey="true"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="150"></e-column>
        <e-column field="Product" headerText="Product" width="140"></e-column>
        <e-column field="Status" headerText="Order Status" width="150" editType="dropdownedit"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="150" format="yMd" editType="datepickeredit"></e-column>
        <e-column field="Amount" headerText="Amount ($)" width="130" format="C2" textAlign="Right" editType="numericedit"></e-column>
      </e-columns>

      <!-- Dialog Template -->
      <ng-template #editSettingsTemplate let-data>
        <div [formGroup]="orderForm">
          <div class="form-row">
            <div class="form-group col-md-6">
              <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': OrderID?.invalid && (OrderID.dirty || OrderID.touched)}">
                <input 
                  formControlName="OrderID" 
                  data-msg-containerid='OrderIDError' 
                  id="OrderID" 
                  name="OrderID" 
                  type="text" 
                  [attr.disabled]="!data.isAdd ? '' : null">
                <span class="e-float-line"></span>
                <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
              </div>
              <div id="OrderIDError" [style.visibility]='((OrderID?.invalid && (OrderID.dirty || OrderID.touched)) || (OrderID?.invalid && submitClicked)) ? "visible": "hidden"'>
                <label class="e-error" for="OrderID" id="OrderID-info" style="display: block;">*Order ID is required</label>
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': CustomerName?.invalid && (CustomerName?.dirty || CustomerName?.touched)}">
                <input 
                  formControlName="CustomerName" 
                  data-msg-containerid='CustomerNameError' 
                  id="CustomerName" 
                  name="CustomerName" 
                  type="text">
                <span class="e-float-line"></span>
                <label class="e-float-text e-label-top" for="CustomerName">Customer Name</label>
              </div>
              <div id="CustomerNameError" [style.visibility]='((CustomerName?.invalid && (CustomerName.dirty || CustomerName?.touched)) || (CustomerName?.invalid && submitClicked)) ? "visible": "hidden"'>
                <label class="e-error" for="CustomerName" id="CustomerName-info" style="display: block;">*Customer Name is required</label>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6 product-amount">
              <ejs-dropdownlist 
                id="Product" 
                formControlName="Product" 
                [dataSource]="productData" 
                [fields]="{ text: 'Product', value: 'Product' }"
                placeholder="Product"
                popupHeight="300px"
                floatLabelType="Always">
              </ejs-dropdownlist>
            </div>
            <div class="form-group col-md-6">
              <ejs-dropdownlist 
                id="Status" 
                formControlName="Status" 
                [dataSource]="statusData" 
                [fields]="{ text: 'Status', value: 'Status' }"
                placeholder="Status"
                popupHeight="300px"
                floatLabelType="Always">
              </ejs-dropdownlist>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6 product-amount">
              <ejs-datepicker 
                id="OrderDate" 
                formControlName="OrderDate" 
                placeholder="Order Date"
                floatLabelType="Always">
              </ejs-datepicker>
              <div id="OrderDateError" [style.visibility]='((OrderDate?.invalid && (OrderDate?.dirty || OrderDate?.touched)) || (OrderDate?.invalid && submitClicked)) ? "visible": "hidden"'>
                <label class="e-error" for="OrderDate" id="OrderDate-info" style="display: block;">*Order Date is required</label>
              </div>
            </div>
            <div class="form-group col-md-6">
              <ejs-numerictextbox 
                id="Amount" 
                formControlName="Amount" 
                format="C2" 
                placeholder="Amount"
                floatLabelType="Always">
              </ejs-numerictextbox>
              <div id="AmountError" [style.visibility]='((Amount?.invalid && (Amount?.dirty || Amount?.touched)) || (Amount?.invalid && submitClicked)) ? "visible": "hidden"'>
                <label class="e-error" for="Amount" id="Amount-info" style="display: block;">*Amount must be between 1 and 10000</label>
              </div>
            </div>
          </div>
        </div>
      </ng-template>
    </ejs-grid>
  `
})
export class DialogTemplateEditingComponent implements OnInit {
  @ViewChild('grid') gridComponent?: GridComponent;

  public data?: object[];
  public productData: any[] = [];
  public statusData: any[] = [];
  public orderForm!: FormGroup;
  public submitClicked: boolean = false;

  editSettings: any = { 
    allowEditing: true, 
    allowAdding: true, 
    allowDeleting: true, 
    mode: 'Dialog',
    template: 'editSettingsTemplate'
  };
  toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  filterSettings: any = { type: 'CheckBox' };

  ngOnInit(): void {
    this.data = data;
    
    // Get distinct data for dropdowns
    this.productData = DataUtil.distinct(data, 'Product', true);
    this.statusData = DataUtil.distinct(data, 'Status', true);
  }

  createFormGroup(rowData: any): FormGroup {
    return new FormGroup({
      OrderID: new FormControl(rowData.OrderID, Validators.required),
      CustomerName: new FormControl(rowData.CustomerName, Validators.required),
      Product: new FormControl(rowData.Product),
      Status: new FormControl(rowData.Status),
      OrderDate: new FormControl(rowData.OrderDate, [this.dateValidator()]),
      Amount: new FormControl(rowData.Amount, [Validators.required, Validators.min(1), Validators.max(10000)])
    });
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): null | Object => {
      return control.value && control.value.getFullYear &&
      (1900 <= control.value.getFullYear() && control.value.getFullYear() <= 2099) ? null : { OrderDate: { value: control.value } };
    }
  }

  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.submitClicked = false;
      this.orderForm = this.createFormGroup(args.rowData);
    }
    if (args.requestType === 'save') {
      this.submitClicked = true;
      if (this.orderForm.valid) {
        args.data = this.orderForm.value;
      } else {
        args.cancel = true;
      }
    }
  }

  actionComplete(args: DialogEditEventArgs): void {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      if (Browser.isDevice) {
        args.dialog!.height = window.innerHeight - 90 + 'px';
        (<Dialog>args.dialog).dataBind();
      }
      // Set initial Focus
      if (args.requestType === 'beginEdit') {
        (args.form?.elements.namedItem('CustomerName') as HTMLInputElement).focus();
      } else if (args.requestType === 'add') {
        (args.form?.elements.namedItem('OrderID') as HTMLInputElement).focus();
      }
    }
  }

  get OrderID(): AbstractControl | null { return this.orderForm.get('OrderID'); }

  get CustomerName(): AbstractControl | null { return this.orderForm.get('CustomerName'); }

  get Product(): AbstractControl | null { return this.orderForm.get('Product'); }

  get Status(): AbstractControl | null { return this.orderForm.get('Status'); }

  get OrderDate(): AbstractControl | null { return this.orderForm.get('OrderDate'); }

  get Amount(): AbstractControl | null { return this.orderForm.get('Amount'); }
}

