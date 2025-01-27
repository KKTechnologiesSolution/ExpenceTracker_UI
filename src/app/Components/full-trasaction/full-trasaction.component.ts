import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import {
  ClientSideRowModelModule,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  NumberEditorModule,
  TextEditorModule,
  TextFilterModule,
  Theme,
  ValidationModule,
  createGrid,
  themeQuartz,
} from "ag-grid-community";

ModuleRegistry.registerModules([
  TextEditorModule,
  TextFilterModule,
  NumberEditorModule,
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);

@Component({
  selector: 'app-full-trasaction',
  imports: [AgGridAngular],
  templateUrl: './full-trasaction.component.html',
  styleUrl: './full-trasaction.component.css'
})
export class FullTrasactionComponent {

  rowData = [
    { date: "2025-01-01", category: "Groceries", description: "Weekly shopping", amount: 120.50 },
    { date: "2025-01-02", category: "Utilities", description: "Electricity bill", amount: 80.00 },
    { date: "2025-01-03", category: "Transportation", description: "Bus fare", amount: 15.00 },
    { date: "2025-01-04", category: "Entertainment", description: "Movie tickets", amount: 25.00 },
    { date: "2025-01-05", category: "Dining", description: "Dinner at restaurant", amount: 50.00 },
    { date: "2025-01-06", category: "Groceries", description: "Food supplies", amount: 60.00 },
    { date: "2025-01-07", category: "Transportation", description: "Fuel", amount: 40.00 },
    { date: "2025-01-08", category: "Groceries", description: "Fruit shopping", amount: 30.00 },
    { date: "2025-01-09", category: "Dining", description: "Lunch", amount: 20.00 },
    { date: "2025-01-10", category: "Entertainment", description: "Concert tickets", amount: 100.00 },
    { date: "2025-01-01", category: "Groceries", description: "Weekly shopping", amount: 120.50 },
    { date: "2025-01-02", category: "Utilities", description: "Electricity bill", amount: 80.00 },
    { date: "2025-01-03", category: "Transportation", description: "Bus fare", amount: 15.00 },
    { date: "2025-01-04", category: "Entertainment", description: "Movie tickets", amount: 25.00 },
    { date: "2025-01-05", category: "Dining", description: "Dinner at restaurant", amount: 50.00 },
    { date: "2025-01-06", category: "Groceries", description: "Food supplies", amount: 60.00 },
    { date: "2025-01-07", category: "Transportation", description: "Fuel", amount: 40.00 },
    { date: "2025-01-08", category: "Groceries", description: "Fruit shopping", amount: 30.00 },
    { date: "2025-01-09", category: "Dining", description: "Lunch", amount: 20.00 },
    { date: "2025-01-10", category: "Entertainment", description: "Concert tickets", amount: 100.00 },
    { date: "2025-01-01", category: "Groceries", description: "Weekly shopping", amount: 120.50 },
    { date: "2025-01-02", category: "Utilities", description: "Electricity bill", amount: 80.00 },
    { date: "2025-01-03", category: "Transportation", description: "Bus fare", amount: 15.00 },
    { date: "2025-01-04", category: "Entertainment", description: "Movie tickets", amount: 25.00 },
    { date: "2025-01-05", category: "Dining", description: "Dinner at restaurant", amount: 50.00 },
    { date: "2025-01-06", category: "Groceries", description: "Food supplies", amount: 60.00 },
    { date: "2025-01-07", category: "Transportation", description: "Fuel", amount: 40.00 },
    { date: "2025-01-08", category: "Groceries", description: "Fruit shopping", amount: 30.00 },
    { date: "2025-01-09", category: "Dining", description: "Lunch", amount: 20.00 },
    { date: "2025-01-10", category: "Entertainment", description: "Concert tickets", amount: 100.00 }

  ];
  

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
  { field: "date", headerName: "Date", sortable: true, filter: true },
  { field: "category", headerName: "Category", sortable: true, filter: true },
  { field: "description", headerName: "Description", sortable: true, filter: true },
  { field: "amount", headerName: "Amount", sortable: true, filter: true, cellClass: 'amount-column' }
];

defaultColDef: ColDef = {
  flex: 1,  // Allows columns to expand and fill the width of the grid
  sortable: true,
  filter: true,
  resizable: true,
  
};
// Grid Options
gridOptions: GridOptions = {
  pagination: true, // Enable pagination
  paginationPageSize: 5, // Number of rows per page
  domLayout: 'autoHeight', // Automatically adjust height based on rows
};

}
