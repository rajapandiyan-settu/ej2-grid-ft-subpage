import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Group, Sort,Filter} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './data/datasource';

function App() {
  // const groupOptions = {
  //   columns: ['ShipCountry'],
  //   showDropArea: false
  // };
  const footerSum = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  } 

  const footerAvg = (props) => {
    return (<span>Avg: {props.Average}</span>)
  } 
  return (<GridComponent dataSource={data} allowGrouping={true} allowSorting={true} allowFiltering={true}
    height={350}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID'  />
      <ColumnDirective field='CustomerID' headerText='Customer ID'  />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' />
      <ColumnDirective field='Freight'allowGrouping={false} headerText='Freight' format='C2'  />
      <ColumnDirective field='ShipCountry' headerText='Ship Country'  />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' footerTemplate={footerSum} groupFooterTemplate={footerSum} />
          <AggregateColumnDirective field='Freight' type='Avg' footerTemplate={footerSum} groupFooterTemplate={footerSum} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Aggregate, Group, Sort, Filter]} />
  </GridComponent>)
}
export default App;