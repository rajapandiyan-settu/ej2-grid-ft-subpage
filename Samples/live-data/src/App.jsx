import React, { useEffect, useRef } from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Inject, Sort, Filter
} from '@syncfusion/ej2-react-grids';
import { Chart, ColumnSeries, Category, Tooltip } from '@syncfusion/ej2-charts';
import './App.css';
import { buildInitialStocks, formatVolume, formatMarketCap, generateVolume } from './dataSource';

/* ═══════════════════════════════════════════════════════════════
   ProStockGrid Component
═══════════════════════════════════════════════════════════════ */
function App() {
  const gridRef   = useRef(null);
  const timerRef  = useRef(null);
  const chartsRef = useRef(new Map()); //  Track chart instances to prevent memory leak

  // Mutable data ref — price ticks go directly to grid via setCellValue
  // without causing React re-renders (same as Blazor's direct property mutation)
  const stockData = useRef(buildInitialStocks());

  /* ── Tick: update data using setCellValue to update individual cells ─ */
  const tick = () => {
    const grid   = gridRef.current;
    const stocks = stockData.current;
    if (!grid) return;
    stocks.forEach((stock) => {
      const deltaPct  = (Math.random() - 0.495) * 0.025;
      const prevPrice = stock.lastPrice;
      const newPrice  = Math.round(Math.max(prevPrice * (1 + deltaPct), 0.01) * 100) / 100;
      const change    = Math.round((newPrice - prevPrice) * 100) / 100;
      const changePct = Math.round((change / prevPrice) * 100 * 1000) / 1000;
      const vol       = generateVolume();
      const newMktCap = Math.round(stock.marketCap * (1 + deltaPct * 0.1));
      const isGain    = change >= 0;
      // Mutate the ref object in-place (no React re-render)
      stock.lastPrice           = newPrice;
      stock.change              = change;
      stock.changePercent       = changePct;
      stock.technicalRating     = changePct;  // Same value, separate field
      stock.isGain              = isGain;
      stock.arrow               = isGain ? '▲' : '▼';
      stock.volume              = vol;
      stock.marketCap           = newMktCap;
      stock.formattedVolume     = formatVolume(vol);
      stock.formattedMarketCap  = formatMarketCap(newMktCap);
      // Update high and low
      if (newPrice > stock.high) {
        stock.high = newPrice;
      }
      if (newPrice < stock.low) {
        stock.low = newPrice;
      }
      
      if (stock.trendData.length >= 20) stock.trendData.shift();
      stock.trendData.push(newPrice);
    });

    grid.dataSource = [...stocks];

  };

  /* ── Auto-refresh timer ─────────────────────────────────── */
  useEffect(() => {
    timerRef.current = setInterval(tick, 1000);
    
    //  Cleanup all chart instances on unmount
    return () => {
      clearInterval(timerRef.current);
      chartsRef.current.forEach((chart) => {
        if (chart && chart.destroy) {
          chart.destroy();
        }
      });
      chartsRef.current.clear();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── queryCellInfo: format and style all cells ───────── */
  const handleQueryCellInfo = (args) => {
    const field = args.column.field;
    const data = args.data;

    // Ticker column - Display with colored badge
    if (field === 'ticker') {
      if (!data.ticker) return;
      
      // Generate a color based on the ticker
      const ticker = data.ticker;
      const shortTicker = ticker.substring(0, 2); // Display only first 2 letters
      const colorPairs = [
        { bg: '#d4f4dd', text: '#2d7a4a' },  // Soft green
        { bg: '#ffd4d4', text: '#d32f2f' },  // Soft red
        { bg: '#d4e4f7', text: '#1976d2' },  // Soft blue
        { bg: '#e6d9f5', text: '#7b1fa2' },  // Soft purple
        { bg: '#ffe5cc', text: '#e65100' },  // Soft orange
        { bg: '#d4f5e9', text: '#00796b' },  // Soft teal
        { bg: '#fff4cc', text: '#f57c00' },  // Soft yellow
        { bg: '#f5d4e6', text: '#c2185b' },  // Soft pink
        { bg: '#d4e8f5', text: '#0288d1' },  // Soft sky blue
        { bg: '#e6f0d9', text: '#558b2f' },  // Soft lime
      ];
      // Generate a consistent color based on the ticker string
      const colorIndex = ticker.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colorPairs.length;
      const colorPair = colorPairs[colorIndex];
      
      args.cell.innerHTML = `
        <div class="pro-instrument">
          <div class="pro-ticker-badge" style="background: ${colorPair.bg}; color: ${colorPair.text};">${shortTicker}</div>
          <div class="pro-sym-info">
            <span class="pro-sym-ticker">${data.ticker}</span>
          </div>
        </div>
      `;
    }
    
    // Price column - Simple display without custom styling
    else if (field === 'lastPrice') {
      // No custom font or styling, just display the value
      args.cell.innerHTML = `${Number(data.lastPrice).toFixed(2)}`;
    }
    
    // High column - Display high value
    else if (field === 'high') {
      args.cell.innerHTML = `${Number(data.high).toFixed(2)}`;
    }
    
    // Low column - Display low value
    else if (field === 'low') {
      args.cell.innerHTML = `${Number(data.low).toFixed(2)}`;
    }
    
    // Change column - Delta with color
    else if (field === 'change') {
      const v = Number(data.change);
      const cls = v > 0 ? 'pro-up' : v < 0 ? 'pro-dn' : 'pro-flat';
      args.cell.innerHTML = `
        <span class="pro-delta ${cls}">
          ${v > 0 ? '+' : ''}${v.toFixed(2)}
        </span>
      `;
    }
    
    // Change % column - Percentage with arrow
    else if (field === 'changePercent') {
      const changePercent = Number(data.changePercent);
      const up = changePercent > 0;
      const down = changePercent < 0;
      const cls = up ? 'pro-up' : down ? 'pro-dn' : 'pro-flat';
      const arrow = up ? '↑ ' : down ? '↓ ' : '';
      args.cell.innerHTML = `
        <span class="pro-delta ${cls}">
          ${arrow}${Math.abs(changePercent).toFixed(2)}%
        </span>
      `;
    }
    
    // Technical Rating column - Text with arrows
    else if (field === 'technicalRating') {
      const changePercent = Number(data.technicalRating);
      
      // Add/remove color classes based on change
      if (changePercent < 0) {
        args.cell?.classList.remove('e-increase');
        args.cell?.classList.add('e-decrease');
      } else if (changePercent > 0) {
        args.cell?.classList.remove('e-decrease');
        args.cell?.classList.add('e-increase');
      }
      
      // Clear cell and create spans
      args.cell.innerHTML = '';
      const iconSpan = document.createElement('span');
      const textSpan = document.createElement('span');
      
      // Determine icon and text based on changePercent
      if (changePercent === 0) {
        iconSpan.classList.add('e-icons', 'e-chevron-intermediate');
        textSpan.innerText = 'Neutral';
      } else if (changePercent < -1.0) {
        iconSpan.classList.add('e-icons', 'e-chevron-down-double');
        textSpan.innerText = 'Strongly Sell';
      } else if (changePercent < 0) {
        iconSpan.classList.add('e-icons', 'e-chevron-down');
        textSpan.innerText = 'Sell';
      } else if (changePercent > 1.0) {
        iconSpan.classList.add('e-icons', 'e-chevron-up-double');
        textSpan.innerText = 'Strongly Buy';
      } else {
        iconSpan.classList.add('e-icons', 'e-chevron-up');
        textSpan.innerText = 'Buy';
      }
      
      args.cell.appendChild(iconSpan);
      args.cell.appendChild(textSpan);
    }
    
    // Volume column - Formatted volume
    else if (field === 'volume') {
      args.cell.innerHTML = `<span class="pro-mono">${data.formattedVolume}</span>`;
    }
    
    // Market Cap column - Formatted market cap
    else if (field === 'marketCap') {
      args.cell.innerHTML = `<span class="pro-mono">${data.formattedMarketCap}</span>`;
    }
    
    // Trend Data column - Column chart (vertical bars)
    else if (field === 'trendData') {
      if (!data.trendData || data.trendData.length === 0) return;
      
      // Create unique ID for this chart - sanitize ticker to remove special characters
      const sanitizedTicker = data.ticker.replace(/[^a-zA-Z0-9]/g, '-');
      const chartId = `chart-${sanitizedTicker}`;
      
      //  Destroy existing chart instance to prevent memory leak
      if (chartsRef.current.has(chartId)) {
        const oldChart = chartsRef.current.get(chartId);
        if (oldChart && oldChart.destroy) {
          oldChart.destroy();
        }
        chartsRef.current.delete(chartId);
      }
      
      // Create container for chart
      args.cell.innerHTML = `<div id="${chartId}" class="pro-chart-cell"></div>`;
      
      // Create column chart immediately using JavaScript API
      const chartEl = args.cell.querySelector(`#${chartId}`);
      if (chartEl) {
        // Transform data to chart format
        const chartData = data.trendData.map((value, index) => ({
          x: index,
          y: value
        }));
        
        // Calculate min/max for Y-axis range to show variation
        const values = data.trendData;
        const minVal = Math.min(...values);
        const maxVal = Math.max(...values);
        const range = maxVal - minVal;
        const padding = range * 0.1; // 10% padding
        
        const chart = new Chart({
          height: '50px',
          width: '160px',
          primaryXAxis: {
            visible: false,
            valueType: 'Category'
          },
          primaryYAxis: {
            visible: false,
            minimum: minVal - padding,
            maximum: maxVal + padding
          },
          chartArea: {
            border: { width: 0 }
          },
          series: [{
            type: 'Column',
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            fill: '#4F81BD',
            columnSpacing: 0.1,
            columnWidth: 0.9,
            border: { width: 0 },
            animation: { enable: false } // Disable animation for faster rendering
          }],
          tooltip: {
            enable: true,
            format: '${point.y}'
          },
          margin: { left: 0, right: 0, top: 2, bottom: 2 }
        });
        // Register required chart modules
        Chart.Inject(ColumnSeries, Category, Tooltip);
        chart.appendTo(chartEl);
        
        //  Store chart instance for cleanup
        chartsRef.current.set(chartId, chart);
      }
    }
  };

  /* ─── JSX ──────────────────────────────────────────────────── */
  return (
    <div className="pro-shell">
      <GridComponent
          id="pro-stock-grid"
          ref={gridRef}
          dataSource={stockData.current}
          allowSorting={true}
          enableVirtualMaskRow={false}
          allowFiltering={true}
          allowSelection={false}
          enableHover={false}
          rowHeight={60}
          // enableDomVirtualization={true}
          filterSettings={{ type: 'CheckBox' }}
          cssClass="pro-grid"
          height="510px"
          queryCellInfo={handleQueryCellInfo}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="ticker" headerText="Ticker" width="120"
              isPrimaryKey={true} allowSorting={true} allowFiltering={true}
              textAlign="Left"
            />
            <ColumnDirective
              field="lastPrice" headerText="Price" width="100"
              allowSorting={true} allowFiltering={false}
              textAlign="Right"
            />
            <ColumnDirective
              field="change" headerText="Change" width="100"
              allowSorting={true} allowFiltering={false}
              textAlign="Right"
            />
            <ColumnDirective
              field="changePercent" headerText="Change %" width="100"
              allowSorting={true} allowFiltering={false}
              textAlign="Right"
            />
            <ColumnDirective
              field="high" headerText="High" width="110"
              allowSorting={true} allowFiltering={false}
              textAlign="Right"
            />
            <ColumnDirective
              field="low" headerText="Low" width="110"
              allowSorting={true} allowFiltering={false}
              textAlign="Right"
            />
            <ColumnDirective
              field="technicalRating" headerText="Technical Rating" width="140"
              allowSorting={false} allowFiltering={false}
              textAlign="Center"
            />
            <ColumnDirective
              field="trendData" headerText="Timeline" width="230"
              allowSorting={false} allowFiltering={false}
              textAlign="Center"
            />
          </ColumnsDirective>
          <Inject services={[Sort, Filter]} />
        </GridComponent>
    </div>
  );
};

export default App;
