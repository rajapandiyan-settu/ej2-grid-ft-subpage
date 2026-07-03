const CATALOGUE = [
  { ticker: 'TECK', basePrice: 191.53,  marketCapBase: 2_950_000_000_000 },
  { ticker: 'HLTH', basePrice: 269.94,  marketCapBase: 3_080_000_000_000 },
  { ticker: 'FINC', basePrice: 126.06,  marketCapBase: 2_180_000_000_000 },
  { ticker: 'RETL', basePrice: 495.30,  marketCapBase: 1_260_000_000_000 },
  { ticker: 'MANU', basePrice: 214.01,  marketCapBase: 559_000_000_000 },
  { ticker: 'ENRG', basePrice: 96.83,  marketCapBase: 190_000_000_000 },
  { ticker: 'CNSR', basePrice: 141.48,  marketCapBase: 560_000_000_000 },
  { ticker: 'TLCM', basePrice: 348.62,  marketCapBase: 270_000_000_000 },
  { ticker: 'TRAN', basePrice: 48.66,  marketCapBase: 132_000_000_000 },
  { ticker: 'UTIL', basePrice: 4118.56, marketCapBase: 40_000_000_000_000 },
  { ticker: 'BNDS', basePrice: 36107.00, marketCapBase: 38_000_000_000_000 },
  { ticker: 'FUND', basePrice: 14891.65, marketCapBase: 25_000_000_000_000 },
  { ticker: 'GAIN', basePrice: 7375.64, marketCapBase: 3_000_000_000_000 },
  { ticker: 'RUSH', basePrice: 208.23,  marketCapBase: 6_500_000_000_000 },
  { ticker: 'VEST', basePrice: 2120.64, marketCapBase: 4_000_000_000_000 },
  { ticker: 'ZEST', basePrice: 0.18,    marketCapBase: 2_000_000_000_000 },
  { ticker: 'PACE', basePrice: 7909.28, marketCapBase: 2_500_000_000_000 },
  { ticker: 'LIFT', basePrice: 1675.07, marketCapBase: 3_000_000_000_000 },
  { ticker: 'SOAR', basePrice: 80.50,   marketCapBase: 100_000_000_000 },
  { ticker: 'RLTY', basePrice: 2050.73, marketCapBase: 500_000_000_000 },
  { ticker: 'HIVE', basePrice: 23.70,   marketCapBase: 50_000_000_000 },
  { ticker: 'GLEN', basePrice: 4.03,    marketCapBase: 30_000_000_000 },
  { ticker: 'VOLT', basePrice: 4.72,    marketCapBase: 20_000_000_000 },
  { ticker: 'FEND', basePrice: 583.97,  marketCapBase: 15_000_000_000 },
  { ticker: 'GRTH', basePrice: 249.84,  marketCapBase: 12_000_000_000 },
  { ticker: 'RATE', basePrice: 1445.22, marketCapBase: 18_000_000_000 },
  { ticker: 'EDGE', basePrice: 4116.68, marketCapBase: 8_000_000_000 },
  { ticker: 'JOLT', basePrice: 66.30,   marketCapBase: 5_000_000_000 },
  { ticker: 'VIVA', basePrice: 1.07,    marketCapBase: 1_000_000_000 },
  { ticker: 'MKTX', basePrice: 134.12,  marketCapBase: 800_000_000 },
  { ticker: 'WAGE', basePrice: 1.30,    marketCapBase: 900_000_000 },
  { ticker: 'PEAK', basePrice: 0.69,    marketCapBase: 600_000_000 },
  { ticker: 'OILG', basePrice: 1.32,    marketCapBase: 700_000_000 },
  { ticker: 'WIND', basePrice: 0.60,    marketCapBase: 500_000_000 },
  { ticker: 'BMCO', basePrice: 0.90,    marketCapBase: 650_000_000 },
  { ticker: 'NOVA', basePrice: 0.85,    marketCapBase: 550_000_000 },
  { ticker: 'HRKN', basePrice: 1.35,    marketCapBase: 450_000_000 },
  { ticker: 'ROVE', basePrice: 161.78,  marketCapBase: 750_000_000 },
  { ticker: 'GWLN', basePrice: 35946.74, marketCapBase: 700_000_000_000 },
  { ticker: 'PHAR', basePrice: 1886.57, marketCapBase: 225_000_000_000 },
  { ticker: 'SPRX', basePrice: 0.50,    marketCapBase: 17_000_000_000 },
  { ticker: 'YILD', basePrice: 60.56,   marketCapBase: 30_000_000_000 },
  { ticker: 'SXPN', basePrice: 80.56,   marketCapBase: 6_000_000_000 },
  { ticker: 'PVTX', basePrice: 14.62,   marketCapBase: 8_000_000_000 },
  { ticker: 'TDAL', basePrice: 56.09,   marketCapBase: 7_000_000_000 },
  { ticker: 'HOPE', basePrice: 69.14,   marketCapBase: 10_000_000_000 },
  { ticker: 'BZLT', basePrice: 885.40,  marketCapBase: 365_000_000_000 },
  { ticker: 'BETA', basePrice: 54.30,   marketCapBase: 220_000_000_000 },
  { ticker: 'TILT', basePrice: 145.20,  marketCapBase: 130_000_000_000 },
  { ticker: 'NEST', basePrice: 68.50,   marketCapBase: 135_000_000_000 },
  { ticker: 'HTCO', basePrice: 12.40,   marketCapBase: 4_500_000_000 },
  { ticker: 'MXTX', basePrice: 125.60,  marketCapBase: 78_000_000_000 },
  { ticker: 'VBRT', basePrice: 11.20,   marketCapBase: 17_000_000_000 },
  { ticker: 'YARN', basePrice: 28.40,   marketCapBase: 18_000_000_000 },
  { ticker: 'LNKX', basePrice: 72.30,   marketCapBase: 91_000_000_000 },
  { ticker: 'VNTR', basePrice: 34.25,   marketCapBase: 285_000_000_000 },
  { ticker: 'WHIZ', basePrice: 385.40,  marketCapBase: 125_000_000_000 },
  { ticker: 'AURA', basePrice: 52.30,   marketCapBase: 98_000_000_000 },
  { ticker: 'FSCO', basePrice: 395.20,  marketCapBase: 380_000_000_000 },
  { ticker: 'ZOOM', basePrice: 75.30,   marketCapBase: 84_000_000_000 },
  { ticker: 'VANT', basePrice: 165.30,  marketCapBase: 120_000_000_000 },
  { ticker: 'CASH', basePrice: 725.60,  marketCapBase: 110_000_000_000 },
  { ticker: 'SURE', basePrice: 68.40,   marketCapBase: 125_000_000_000 },
  { ticker: 'TWIN', basePrice: 165.40,  marketCapBase: 410_000_000_000 },
  { ticker: 'ADVR', basePrice: 485.30,  marketCapBase: 455_000_000_000 },
  { ticker: 'NTRP', basePrice: 565.20,  marketCapBase: 535_000_000_000 },
  { ticker: 'RISE', basePrice: 145.60,  marketCapBase: 257_000_000_000 },
  { ticker: 'CXRT', basePrice: 108.30,  marketCapBase: 190_000_000_000 },
  { ticker: 'LEND', basePrice: 165.40,  marketCapBase: 445_000_000_000 },
  { ticker: 'PXLT', basePrice: 145.20,  marketCapBase: 67_000_000_000 },
  { ticker: 'BASE', basePrice: 225.40,  marketCapBase: 135_000_000_000 },
  { ticker: 'MNCO', basePrice: 565.30,  marketCapBase: 250_000_000_000 },
  { ticker: 'QUTO', basePrice: 115.30,  marketCapBase: 175_000_000_000 },
  { ticker: 'BKRN', basePrice: 95.40,   marketCapBase: 108_000_000_000 },
  { ticker: 'FMXR', basePrice: 285.20,  marketCapBase: 210_000_000_000 },
  { ticker: 'WVEX', basePrice: 62.30,   marketCapBase: 270_000_000_000 },
  { ticker: 'BLNC', basePrice: 175.60,  marketCapBase: 240_000_000_000 },
  { ticker: 'GDXR', basePrice: 185.40,  marketCapBase: 1_920_000_000_000 },
  { ticker: 'FXLN', basePrice: 495.30,  marketCapBase: 1_260_000_000_000 },
  { ticker: 'APEX', basePrice: 95.40,   marketCapBase: 175_000_000_000 },
  { ticker: 'SYNC', basePrice: 44.20,   marketCapBase: 185_000_000_000 },
  { ticker: 'RMPT', basePrice: 16.80,   marketCapBase: 120_000_000_000 },
  { ticker: 'FLWD', basePrice: 145.20,  marketCapBase: 175_000_000_000 },
  { ticker: 'JUMP', basePrice: 115.30,  marketCapBase: 475_000_000_000 },
  { ticker: 'DASH', basePrice: 158.40,  marketCapBase: 295_000_000_000 },
  { ticker: 'PIER', basePrice: 118.50,  marketCapBase: 145_000_000_000 },
  { ticker: 'XRUX', basePrice: 12.80,   marketCapBase: 51_000_000_000 },
  { ticker: 'AXIS', basePrice: 38.50,   marketCapBase: 55_000_000_000 },
  { ticker: 'ALLY', basePrice: 185.40,  marketCapBase: 250_000_000_000 },
  { ticker: 'DMCO', basePrice: 195.30,  marketCapBase: 115_000_000_000 },
  { ticker: 'FRAM', basePrice: 425.60,  marketCapBase: 115_000_000_000 },
  { ticker: 'KEEN', basePrice: 285.60,  marketCapBase: 145_000_000_000 },
  { ticker: 'SNCX', basePrice: 270.60,  marketCapBase: 260_000_000_000 },
  { ticker: 'DCKX', basePrice: 58.20,  marketCapBase: 11_500_000_000 },
  { ticker: 'PMLX', basePrice: 285.60,  marketCapBase: 145_000_000_000 },
  { ticker: 'HPWL', basePrice: 425.30,  marketCapBase: 120_000_000_000 },
  { ticker: 'LMEX', basePrice: 195.80,  marketCapBase: 130_000_000_000 },
  { ticker: 'CLIX', basePrice: 175.40,  marketCapBase: 150_000_000_000 },
  { ticker: 'SAGE', basePrice: 245.60,  marketCapBase: 63_000_000_000 },
  { ticker: 'GXLU', basePrice: 152.60,  marketCapBase: 790_000_000_000 },
];

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
export const formatVolume = (v: number): string => {
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(2) + 'M';
  if (v >= 1_000)     return (v / 1_000).toFixed(2) + 'K';
  return v.toString();
};

export const formatMarketCap = (mc: number): string => {
  if (mc >= 1_000_000_000_000) return '$' + (mc / 1_000_000_000_000).toFixed(2) + 'T';
  if (mc >= 1_000_000_000)     return '$' + (mc / 1_000_000_000).toFixed(2) + 'B';
  if (mc >= 1_000_000)         return '$' + (mc / 1_000_000).toFixed(2) + 'M';
  return '$' + mc.toFixed(0);
};

export const generateVolume = (): number =>
  Math.floor(Math.random() * (50_000_000 - 500_000 + 1)) + 500_000;

export const generateInitialTrend = (basePrice: number): number[] => {
  const prices: number[] = [];
  let price = basePrice * (0.92 + Math.random() * 0.16);
  for (let i = 0; i < 20; i++) {
    price *= 1 + (Math.random() - 0.5) * 0.03;
    price = Math.max(price, 1);
    prices.push(Math.round(price * 100) / 100);
  }
  return prices;
};

/* Build initial stock list stored in a mutable ref — NOT React state.
   This means price updates via setRowData never trigger a full re-render. */
export const buildInitialStocks = () =>
  CATALOGUE.map((c, idx) => {
    const trendData = generateInitialTrend(c.basePrice);
    const vol = generateVolume();
    const prevPrice = trendData[trendData.length - 2] ?? trendData[trendData.length - 1];
    const initialPrice = trendData[trendData.length - 1];
    const initialChange = Math.round((initialPrice - prevPrice) * 100) / 100;
    const initialChangePct = prevPrice > 0
      ? Math.round((initialChange / prevPrice) * 100 * 1000) / 1000
      : 0;
    const isInitialGain = initialChange >= 0;
    return {
      id:                 idx,
      ticker:             c.ticker,
      lastPrice:          initialPrice,
      change:             initialChange,
      changePercent:      initialChangePct,
      technicalRating:    initialChangePct,
      high:               initialPrice,
      low:                initialPrice,
      volume:             vol,
      marketCap:          c.marketCapBase,
      trendData:          [...trendData],
      isGain:             isInitialGain,
      arrow:              isInitialGain ? '▲' : '▼',
      formattedVolume:    formatVolume(vol),
      formattedMarketCap: formatMarketCap(c.marketCapBase),
    };
  });

