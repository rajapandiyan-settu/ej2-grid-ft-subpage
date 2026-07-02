import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids';
import { data as orderData } from './datasource';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { Browser, extend, isNullOrUndefined } from '@syncfusion/ej2-base';


const DialogTemplateEditing = ({ gridRef }) => {
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    const filterOptions = { type: 'CheckBox' };
    const SAMPLE_CSS = `
    .form-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    }
    .form-group.col-md-6 {
     width: 200px;
    }`;
    const orderIDRules = { required: true };
    const customerNameRules = { required: true, minLength: 3 };
    const amountRules = { required: true, min: 1, max: 10000 };
    function dialogTemplate(props) {
        return (<DialogFormTemplate {...props} />);
    }
    function actionComplete(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            if (Browser.isDevice) {
                args.dialog.height = window.innerHeight - 90 + 'px';
                args.dialog.dataBind();
            }
        }
    }

    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };

    return (
        <div>
            <style>
                {SAMPLE_CSS}
            </style>
            <GridComponent ref={gridRef} dataSource={orderData} editSettings={editOptions} toolbar={toolbarOptions} allowSorting={true} allowFiltering={true} filterSettings={filterOptions} height={315}
                actionComplete={actionComplete.bind(this)}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order Number' width='130' isPrimaryKey={true} validationRules={orderIDRules} />
                    <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={customerNameRules} />
                    <ColumnDirective field='Product' headerText='Product' width='140' />
                    <ColumnDirective field='Status' headerText='Order Status' width='150' editType='dropdownedit' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit' />
                    <ColumnDirective field='Amount' headerText='Amount ($)' width='130' format='C2' textAlign='Right' editType='numericedit' validationRules={amountRules} />
                </ColumnsDirective>
                <Inject services={[Edit, Toolbar, Sort, Filter]} />
            </GridComponent>
        </div>
    );
};
function DialogFormTemplate(props) {
    React.useEffect(() => {
        let states = val;
        // Set initail Focus
        states.isAdd ? orderID.focus() : customerName.focus();
    }, []);
    const shipCityDistinctData = DataUtil.distinct(orderData, 'Status', true);
    const shipCountryDistinctData = DataUtil.distinct(orderData, 'Product', true);
    let orderID;
    let customerName;
    const [val, setval] = React.useState(extend({}, {}, props, true));
    function onChange(args) {
        let key = args.target.name;
        let value = args.target.value;
        setval(prevVal => ({ ...prevVal, [key]: value }));
    }
    let data = val;
    // react warning error purpose
    if (data.isAdd) {
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            if (data[keys[i]] !== 'isAdd' && isNullOrUndefined(data[keys[i]])) {
                data[keys[i]] = '';
            }
        }
    }
    return (<div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                    <input ref={input => orderID = input} id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={onChange.bind(this)} />
                    <span className="e-float-line"></span>
                    <label className="e-float-text e-label-top"> Order ID</label>
                </div>
            </div>
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                    <input ref={input => customerName = input} value={data.CustomerName} id="CustomerName" name="CustomerName" type="text" onChange={onChange.bind(this)} />
                    <span className="e-float-line"></span>
                    <label className="e-float-text e-label-top">Customer Name</label>
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <DropDownListComponent id="Product" value={data.Product} dataSource={shipCountryDistinctData} fields={{ text: 'Product', value: 'Product' }} placeholder="Product" popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
            </div>
            <div className="form-group col-md-6">
                <DropDownListComponent id="Status" value={data.Status} dataSource={shipCityDistinctData} fields={{ text: 'Status', value: 'Status' }} placeholder="Status" popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <DatePickerComponent id="OrderDate" value={data.OrderDate} placeholder="Order Date" floatLabelType='Always'></DatePickerComponent>
            </div>
            <div className="form-group col-md-6">
                <NumericTextBoxComponent id="Amount" format='C2' value={data.Amount} placeholder="Amount" floatLabelType='Always'></NumericTextBoxComponent>
            </div>
        </div>

    </div>);
}
export default DialogTemplateEditing;
