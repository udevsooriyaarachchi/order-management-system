import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-100">
            Order Management System
          </Link>
          
          {isAuthenticated && (
            <nav className="flex gap-6 items-center">
              <Link to="/products" className="hover:text-blue-100 font-medium">
                Products
              </Link>
              <Link to="/orders" className="hover:text-blue-100 font-medium">
                Create Order
              </Link>
              <Link to="/order-history" className="hover:text-blue-100 font-medium">
                Order History
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Logout
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
