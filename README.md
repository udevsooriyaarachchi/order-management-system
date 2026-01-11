# Order Management System - React Frontend

A modern, responsive React frontend application for managing orders, products, and customers. Built with Vite, React Router, TailwindCSS, and Axios.

## Features

### 🔐 Authentication
- Login page with form validation
- Mock authentication system
- Protected routes for authenticated users
- Session management with localStorage

### 📦 Product Management
- View all available products
- Display product details (name, description, price, stock)
- Categorized product listings
- Responsive product cards with TailwindCSS styling

### 🛒 Order Creation
- Interactive order creation form
- Real-time total calculation
- Product quantity selection with stock validation
- Customer information capture
- Success notifications

### 📋 Order History
- View all orders with detailed information
- Order status tracking (Pending, Completed, etc.)
- Product breakdown per order
- Formatted dates and total amounts
- Responsive order cards

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Card.jsx        # Card container component
│   ├── Header.jsx      # Navigation header
│   └── ProtectedRoute.jsx  # Route protection wrapper
├── pages/              # Application pages
│   ├── Login.jsx       # Authentication page
│   ├── Products.jsx    # Product listing page
│   ├── CreateOrder.jsx # Order creation form
│   └── OrderHistory.jsx # Order history list
├── services/           # API and business logic
│   ├── axios.js        # Axios instance configuration
│   └── api.js          # Mocked API endpoints
├── App.jsx             # Main app with routing
├── main.jsx            # Application entry point
└── index.css           # TailwindCSS imports
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd order-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials
- **Email:** admin@example.com
- **Password:** password123

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Mocked API

The application uses mocked API data for demonstration purposes:

- **Authentication:** Validates against hardcoded credentials
- **Products:** Returns a list of 5 sample products
- **Orders:** Stores orders in memory with mock data

### Sample Products
1. Laptop - $1,299.99
2. Wireless Mouse - $29.99
3. Mechanical Keyboard - $159.99
4. Monitor 27" - $449.99
5. USB-C Hub - $79.99

## Key Features Implementation

### Routing
React Router handles navigation between pages with protected routes for authenticated users:
- `/login` - Public login page
- `/products` - Protected product listing
- `/orders` - Protected order creation
- `/order-history` - Protected order history

### Styling
TailwindCSS provides responsive, modern styling:
- Mobile-first responsive design
- Consistent color scheme with blue accents
- Card-based layouts
- Hover effects and transitions
- Form styling with focus states

### State Management
- Component-level state with React hooks
- localStorage for authentication tokens
- Real-time form validation and calculations

## Future Enhancements

- Connect to a real backend API
- Add user registration
- Implement order editing and cancellation
- Add search and filtering for products and orders
- Include pagination for large datasets
- Add unit and integration tests
- Implement order status updates
- Add product images
- Include shopping cart functionality

## Screenshots

### Login Page
![Login Page](https://github.com/user-attachments/assets/cea44d71-37ab-4b89-b530-e3c6df73b6dc)

### Products Page
![Products Page](https://github.com/user-attachments/assets/d4dc9394-4e2f-42af-b373-367d32370d45)

### Create Order Page
![Create Order](https://github.com/user-attachments/assets/dcdfdd64-08c7-4083-ba2c-43a4f98613d5)

### Order History Page
![Order History](https://github.com/user-attachments/assets/9acfbf97-b0bb-45ff-b38e-4809b0c2b85d)

## License

MIT
