import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridComponent, DomVirtualizationService, PageService, InfiniteScrollService, SortService, FilterService, SelectionService, VirtualScrollService, GridModule } from '@syncfusion/ej2-angular-grids';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridModule, RadioButtonModule],
  providers: [SortService, FilterService, SelectionService, VirtualScrollService, DomVirtualizationService, PageService, InfiniteScrollService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('large-dataset');
  @ViewChild('gridInstance') gridInstance!: GridComponent;

  data: DataManager;
  query: Query;
  selectedMode = signal('domVirtual');

  constructor() {
    this.data = new DataManager({
      url: 'https://ej2services.syncfusion.com/react/development/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    });
    this.query = new Query().addParams('dataCount', '100000');
  }

  handleModeChange(mode: string): void {
    this.selectedMode.set(mode);

    if (!this.gridInstance) return;

    switch (mode) {
      case 'domVirtual':
        this.gridInstance.enableVirtualization = true;
        this.gridInstance.enableDomVirtualization = true;
        this.gridInstance.enableInfiniteScrolling = false;
        this.gridInstance.allowPaging = false;
        break;
      case 'virtual':
        this.gridInstance.enableVirtualization = true;
        this.gridInstance.enableDomVirtualization = false;
        this.gridInstance.enableInfiniteScrolling = false;
        this.gridInstance.allowPaging = false;
        break;
      case 'paging':
        this.gridInstance.enableVirtualization = false;
        this.gridInstance.enableDomVirtualization = false;
        this.gridInstance.enableInfiniteScrolling = false;
        this.gridInstance.allowPaging = true;
        break;
      case 'infinite':
        this.gridInstance.enableVirtualization = false;
        this.gridInstance.enableDomVirtualization = false;
        this.gridInstance.enableInfiniteScrolling = true;
        this.gridInstance.allowPaging = false;
        break;
    }

    this.gridInstance.freezeRefresh();
  }

  onLoad(args: any): void {
    if (this.gridInstance?.enableVirtualization && !this.gridInstance?.enableDomVirtualization) {
      args.enableSeamlessScrolling = true;
    }
  }
}
