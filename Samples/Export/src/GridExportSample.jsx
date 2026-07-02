import React, { useRef } from "react";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Toolbar,
    PdfExport,
    ExcelExport,
    Sort,
    Filter,
    Group,
    Reorder,
    Resize,
    Inject,
} from "@syncfusion/ej2-react-grids";

import { data } from "./datasource";

export default function ExportGrid() {
    const gridRef = useRef(null);

    const toolbarOptions = [
        "ExcelExport",
        "PdfExport",
        "CsvExport",
        "Print",
        "Search"
    ];

    const toolbarClick = (args) => {
        const grid = gridRef.current;

        switch (args.item.id) {
            case "ExportGrid_pdfexport":
                grid.pdfExport({
                    fileName: "Orders.pdf"
                });
                break;

            case "ExportGrid_excelexport":
                grid.excelExport({
                    fileName: "Orders.xlsx"
                });
                break;

            case "ExportGrid_csvexport":
                grid.csvExport({
                    fileName: "Orders.csv"
                });
                break;

            case "ExportGrid_print":
                grid.print();
                break;

            default:
                break;
        }
    };

    return (
        <GridComponent
            id="ExportGrid"
            ref={gridRef}
            dataSource={data}
            height={350}
            toolbar={toolbarOptions}
            allowPdfExport={true}
            allowExcelExport={true}
            toolbarClick={toolbarClick}
            allowSorting={true}
            allowFiltering={true}
            filterSettings={{ type: "Excel" }}
            allowGrouping={true}
            allowReordering={true}
            allowResizing={true}
            searchSettings={{
                fields: [
                    "OrderID",
                    "CustomerID",
                    "ShipCountry"
                ]
            }}
        >
            <ColumnsDirective>
                <ColumnDirective
                    field="OrderID"
                    headerText="Order ID"
                    width="120"
                    textAlign="Right"
                    isPrimaryKey={true}
                />

                <ColumnDirective
                    field="CustomerID"
                    headerText="Customer ID"
                    width="180"
                />

                <ColumnDirective
                    field="OrderDate"
                    headerText="Order Date"
                    width="150"
                    format="yMd"
                    textAlign="Center"
                    type="date"
                />

                <ColumnDirective
                    field="Freight"
                    headerText="Freight"
                    width="130"
                    format="C2"
                    textAlign="Right"
                />

                <ColumnDirective
                    field="ShipCountry"
                    headerText="Ship Country"
                    width="200"
                />
            </ColumnsDirective>

            <Inject
                services={[
                    Toolbar,
                    PdfExport,
                    ExcelExport,
                    Sort,
                    Filter,
                    Group,
                    Reorder,
                    Resize
                ]}
            />
        </GridComponent>
    );
}