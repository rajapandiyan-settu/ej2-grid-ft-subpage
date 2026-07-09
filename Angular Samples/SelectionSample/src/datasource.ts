export interface ProductModel {
  productId: string;
  productName: string;
  category: string;
  price: number;
  brand: string;
  rating: number;
  status: string;
}

export let productsTrackData: ProductModel[] = [
  { productId: 'P1001', productName: 'Laptop Pro 14', category: 'Electronics', price: 74999, brand: 'Dell', rating: 4.8, status: 'In Stock' },
  { productId: 'P1002', productName: 'Wireless Mouse', category: 'Accessories', price: 1499, brand: 'Logitech', rating: 4.5, status: 'In Stock' },
  { productId: 'P1003', productName: 'Mechanical Keyboard', category: 'Accessories', price: 3999, brand: 'Keychron', rating: 4.7, status: 'Low Stock' },
  { productId: 'P1004', productName: '27-inch Monitor', category: 'Electronics', price: 18999, brand: 'Samsung', rating: 4.6, status: 'In Stock' },
  { productId: 'P1005', productName: 'USB-C Hub', category: 'Accessories', price: 2499, brand: 'Anker', rating: 4.2, status: 'Out of Stock' },
  { productId: 'P1006', productName: 'Gaming Headset', category: 'Audio', price: 5499, brand: 'Razer', rating: 4.4, status: 'In Stock' },
  { productId: 'P1007', productName: 'Bluetooth Speaker', category: 'Audio', price: 2999, brand: 'JBL', rating: 4.3, status: 'Low Stock' },
  { productId: 'P1008', productName: 'Smart Watch', category: 'Wearables', price: 12999, brand: 'Apple', rating: 4.5, status: 'Out of Stock' },
  { productId: 'P1009', productName: 'Fitness Band', category: 'Wearables', price: 3499, brand: 'Xiaomi', rating: 4.1, status: 'In Stock' },
  { productId: 'P1010', productName: 'Webcam HD', category: 'Electronics', price: 2799, brand: 'Logitech', rating: 4.0, status: 'Low Stock' },
  { productId: 'P1011', productName: 'Portable SSD 1TB', category: 'Storage', price: 6999, brand: 'Samsung', rating: 4.8, status: 'In Stock' },
  { productId: 'P1012', productName: 'External HDD 2TB', category: 'Storage', price: 5499, brand: 'Seagate', rating: 4.4, status: 'Low Stock' },
  { productId: 'P1013', productName: 'Wireless Charger', category: 'Accessories', price: 1999, brand: 'Belkin', rating: 4.2, status: 'Out of Stock' },
  { productId: 'P1014', productName: 'Tablet Air', category: 'Electronics', price: 32999, brand: 'Apple', rating: 4.7, status: 'Low Stock' },
  { productId: 'P1015', productName: 'Noise Cancelling Earbuds', category: 'Audio', price: 7999, brand: 'Sony', rating: 4.6, status: 'In Stock' },
  { productId: 'P1016', productName: 'Desk Lamp LED', category: 'Home Office', price: 1499, brand: 'Philips', rating: 4.3, status: 'In Stock' },
  { productId: 'P1017', productName: 'Ergonomic Chair', category: 'Furniture', price: 15999, brand: 'IKEA', rating: 4.7, status: 'Out of Stock' },
  { productId: 'P1018', productName: 'Standing Desk', category: 'Furniture', price: 24999, brand: 'FlexiSpot', rating: 4.8, status: 'Low Stock' },
  { productId: 'P1019', productName: 'Printer All-in-One', category: 'Office', price: 10999, brand: 'HP', rating: 4.1, status: 'Low Stock' },
  { productId: 'P1020', productName: 'Scanner Pro', category: 'Office', price: 8999, brand: 'Canon', rating: 4.0, status: 'Low Stock' },
  { productId: 'P1021', productName: 'Graphics Tablet', category: 'Electronics', price: 13999, brand: 'Wacom', rating: 4.5, status: 'In Stock' },
  { productId: 'P1022', productName: 'Microphone USB', category: 'Audio', price: 4499, brand: 'Blue', rating: 4.4, status: 'In Stock' },
  { productId: 'P1023', productName: 'Router Wi-Fi 6', category: 'Networking', price: 6499, brand: 'TP-Link', rating: 4.6, status: 'In Stock' },
  { productId: 'P1024', productName: 'Mesh Network Kit', category: 'Networking', price: 12999, brand: 'Netgear', rating: 4.7, status: 'Out of Stock' },
  { productId: 'P1025', productName: 'Projector Full HD', category: 'Electronics', price: 28999, brand: 'Epson', rating: 4.5, status: 'Low Stock' }
];