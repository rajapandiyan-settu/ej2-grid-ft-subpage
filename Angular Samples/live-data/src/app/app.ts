import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent, GridModule, SortService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ChartModule, ColumnSeriesService, CategoryService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { buildInitialStocks, generateVolume, formatVolume, formatMarketCap } from './dataSource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GridModule, ChartModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [SortService, FilterService, ColumnSeriesService, CategoryService, TooltipService]
})
export class App implements OnInit, OnDestroy {
  @ViewChild('grid') public grid?: GridComponent;

  public stockData: any[] = buildInitialStocks();
  private timerInterval: any;

  // Expose Math to template
  public Math = Math;

  // Grid configuration
  public allowSorting = true;
  public allowFiltering = true;
  public allowSelection = false;
  public enableHover = false;
  public rowHeight = 60;
  public height = '510px';
  public filterSettings = { type: 'CheckBox' };

  ngOnInit(): void {
    // Start the tick timer
    this.timerInterval = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private tick(): void {
    if (!this.grid) return;

    // Update stock data directly (no state/signal)
    this.stockData.forEach((stock) => {
      const deltaPct = (Math.random() - 0.495) * 0.025;
      const prevPrice = stock.lastPrice;
      const newPrice = Math.round(Math.max(prevPrice * (1 + deltaPct), 0.01) * 100) / 100;
      const change = Math.round((newPrice - prevPrice) * 100) / 100;
      const changePct = Math.round((change / prevPrice) * 100 * 1000) / 1000;
      const vol = generateVolume();
      const newMktCap = Math.round(stock.marketCap * (1 + deltaPct * 0.1));
      const isGain = change >= 0;

      // Mutate data directly
      stock.lastPrice = newPrice;
      stock.change = change;
      stock.changePercent = changePct;
      stock.technicalRating = changePct;
      stock.isGain = isGain;
      stock.arrow = isGain ? '▲' : '▼';
      stock.volume = vol;
      stock.marketCap = newMktCap;
      stock.formattedVolume = formatVolume(vol);
      stock.formattedMarketCap = formatMarketCap(newMktCap);

      // Update high and low
      if (newPrice > stock.high) {
        stock.high = newPrice;
      }
      if (newPrice < stock.low) {
        stock.low = newPrice;
      }

      // Update trend data
      if (stock.trendData.length >= 20) stock.trendData.shift();
      stock.trendData.push(newPrice);
    });

    // Refresh grid with updated data
    this.grid.dataSource = [...this.stockData];
  }

  // Helper methods for templates
  getTickerBadgeColor(ticker: string): { bg: string; text: string } {
    const colorPairs = [
      { bg: '#d4f4dd', text: '#2d7a4a' },
      { bg: '#ffd4d4', text: '#d32f2f' },
      { bg: '#d4e4f7', text: '#1976d2' },
      { bg: '#e6d9f5', text: '#7b1fa2' },
      { bg: '#ffe5cc', text: '#e65100' },
      { bg: '#d4f5e9', text: '#00796b' },
      { bg: '#fff4cc', text: '#f57c00' },
      { bg: '#f5d4e6', text: '#c2185b' },
      { bg: '#d4e8f5', text: '#0288d1' },
      { bg: '#e6f0d9', text: '#558b2f' }
    ];
    const colorIndex = ticker.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colorPairs.length;
    return colorPairs[colorIndex];
  }

  getShortTicker(ticker: string): string {
    return ticker.substring(0, 2);
  }

  getTechnicalText(changePct: number): string {
    if (changePct === 0) return 'Neutral';
    if (changePct < -1.0) return 'Strongly Sell';
    if (changePct < 0) return 'Sell';
    if (changePct > 1.0) return 'Strongly Buy';
    return 'Buy';
  }

  getTechnicalIcon(changePct: number): string {
    if (changePct === 0) return 'e-chevron-intermediate';
    if (changePct < -1.0) return 'e-chevron-down-double';
    if (changePct < 0) return 'e-chevron-down';
    if (changePct > 1.0) return 'e-chevron-up-double';
    return 'e-chevron-up';
  }

  getTechnicalClass(changePct: number): string {
    if (changePct < 0) return 'e-decrease';
    if (changePct > 0) return 'e-increase';
    return 'neutral';
  }

  getChartData(trendData: number[]): any[] {
    return trendData.map((value, index) => ({
      x: index,
      y: value
    }));
  }

  getChartYAxis(trendData: number[]): { min: number; max: number } {
    const minVal = Math.min(...trendData);
    const maxVal = Math.max(...trendData);
    const range = maxVal - minVal;
    const padding = range * 0.1;
    return {
      min: minVal - padding,
      max: maxVal + padding
    };
  }
}
