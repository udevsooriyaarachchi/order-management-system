// Mock products data
const mockProducts = [
  {
    id: 1,
    name: 'Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    stock: 15,
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life',
    price: 29.99,
    stock: 50,
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with custom switches',
    price: 159.99,
    stock: 30,
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'Monitor 27"',
    description: '4K UHD monitor with HDR support',
    price: 449.99,
    stock: 20,
    category: 'Electronics',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    description: 'Multi-port USB-C hub with HDMI and ethernet',
    price: 79.99,
    stock: 40,
    category: 'Accessories',
  },
];

// Mock user data
const mockUser = {
  email: 'admin@example.com',
  password: 'password123',
  name: 'Admin User',
  token: 'mock-jwt-token-12345',
};

// Mock orders data (stored in memory)
let mockOrders = [
  {
    id: 1,
    userId: 1,
    customerName: 'John Doe',
    products: [
      { productId: 1, quantity: 1, price: 1299.99 },
      { productId: 2, quantity: 2, price: 29.99 },
    ],
    totalAmount: 1359.97,
    status: 'completed',
    createdAt: '2024-01-10T10:30:00Z',
  },
  {
    id: 2,
    userId: 1,
    customerName: 'Jane Smith',
    products: [
      { productId: 3, quantity: 1, price: 159.99 },
      { productId: 4, quantity: 1, price: 449.99 },
    ],
    totalAmount: 609.98,
    status: 'pending',
    createdAt: '2024-01-11T14:20:00Z',
  },
];

// Authentication API
export const authAPI = {
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockUser.email && password === mockUser.password) {
          resolve({
            data: {
              user: {
                email: mockUser.email,
                name: mockUser.name,
              },
              token: mockUser.token,
            },
          });
        } else {
          reject({
            response: {
              data: { message: 'Invalid email or password' },
            },
          });
        }
      }, 500);
    });
  },
};

// Products API
export const productsAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockProducts });
      }, 300);
    });
  },
  
  getById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find(p => p.id === parseInt(id));
        if (product) {
          resolve({ data: product });
        } else {
          reject({ response: { data: { message: 'Product not found' } } });
        }
      }, 300);
    });
  },
};

// Orders API
export const ordersAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockOrders });
      }, 300);
    });
  },
  
  create: async (orderData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newOrder = {
          id: mockOrders.length + 1,
          ...orderData,
          status: 'pending',
          createdAt: new Date().toISOString(),
        };
        mockOrders.push(newOrder);
        resolve({ data: newOrder });
      }, 500);
    });
  },
  
  getById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const order = mockOrders.find(o => o.id === parseInt(id));
        if (order) {
          resolve({ data: order });
        } else {
          reject({ response: { data: { message: 'Order not found' } } });
        }
      }, 300);
    });
  },
};
