import { useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Filter, Selection, VirtualScroll, DomVirtualization, Page, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

const data = new DataManager({
    url: "https://ej2services.syncfusion.com/react/development/api/UrlDataSource",
    adaptor: new UrlAdaptor()
});
const query = new Query().addParams('dataCount', '100000');

function App() {
    const gridInstance = useRef(null);

    const handleModeChange = (mode) => {
        if (!gridInstance.current) return;
        
        const grid = gridInstance.current;
        
        switch(mode) {
            case 'domVirtual':
                grid.enableVirtualization = true;
                grid.enableDomVirtualization = true;
                grid.enableInfiniteScrolling = false;
                grid.allowPaging = false;
                break;
            case 'virtual':
                grid.enableVirtualization = true;
                grid.enableDomVirtualization = false;
                grid.enableInfiniteScrolling = false;
                grid.allowPaging = false;
                break;
            case 'paging':
                grid.enableVirtualization = false;
                grid.enableDomVirtualization = false;
                grid.enableInfiniteScrolling = false;
                grid.allowPaging = true;
                break;
            case 'infinite':
                grid.enableVirtualization = false;
                grid.enableDomVirtualization = false;
                grid.enableInfiniteScrolling = true;
                grid.allowPaging = false;

                break;
        }
        
        grid.freezeRefresh();
    };

    const load = (args) => {
      if (gridInstance.enableVirtualization && !gridInstance.enableDomVirtualization) {
        args.enableSeamlessScrolling = true;
      }
    }

    return <div>
        <div style={{ padding: '20px', marginBottom: '20px' }}>
            <h3>Select Scrolling Mode:</h3>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <RadioButtonComponent
                    label='DOM Virtualization with Virtual Scroll'
                    name='scrollMode'
                    value='domVirtual'
                    checked={true}
                    change={() => handleModeChange('domVirtual')}
                />
                <RadioButtonComponent
                    label='Virtual Scrolling'
                    name='scrollMode'
                    value='virtual'
                    change={() => handleModeChange('virtual')}
                />
                <RadioButtonComponent
                    label='Paging'
                    name='scrollMode'
                    value='paging'
                    change={() => handleModeChange('paging')}
                />
                <RadioButtonComponent
                    label='Infinite Scrolling'
                    name='scrollMode'
                    value='infinite'
                    change={() => handleModeChange('infinite')}
                />
            </div>
        </div>
        
        <GridComponent 
            ref={gridInstance}
            id="DOMVirtualGrid" 
            dataSource={data} 
            query={query} 
            height={400} 
            rowHeight={50} 
            enableVirtualization={true}
            enableDomVirtualization={true}
            enableInfiniteScrolling={false}
            allowPaging={false}
            pageSettings={{ pageSize: 100 }}
            load = {load}
            clipMode='EllipsisWithTooltip' 
            allowSorting={true} 
            allowFiltering={true} 
            allowSelection={true} 
            filterSettings={{ type: 'CheckBox' }}>
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' isPrimaryKey={true} textAlign='Right'></ColumnDirective>
            <ColumnDirective field='Employees' headerText='Employee Name' width='200'></ColumnDirective>
            <ColumnDirective field='Designation' headerText='Designation' width='130'></ColumnDirective>
            <ColumnDirective field='Status' headerText='Status' width='120'></ColumnDirective>
            <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='130' format='C2' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='Location' headerText='Location' width='130'></ColumnDirective>
            {/* <ColumnDirective field='Address' headerText='Address' width='200'></ColumnDirective> */}
          </ColumnsDirective>

          <Inject services={[Sort, Filter, Selection, VirtualScroll, DomVirtualization, Page, InfiniteScroll]}/>
        </GridComponent>
    </div>
}
export default App;