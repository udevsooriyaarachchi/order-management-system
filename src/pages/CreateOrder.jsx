import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsAPI, ordersAPI } from '../services/api';
import Button from '../components/Button';
import Card from '../components/Card';

const CreateOrder = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    selectedProducts: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch {
      setError('Failed to fetch products.');
    }
  };

  const handleCustomerNameChange = (e) => {
    setFormData({ ...formData, customerName: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleProductChange = (productId, quantity) => {
    const selectedProducts = [...formData.selectedProducts];
    const existingIndex = selectedProducts.findIndex(p => p.productId === productId);
    
    if (quantity > 0) {
      const product = products.find(p => p.id === productId);
      if (existingIndex >= 0) {
        selectedProducts[existingIndex] = { 
          productId, 
          quantity: parseInt(quantity),
          price: product.price 
        };
      } else {
        selectedProducts.push({ 
          productId, 
          quantity: parseInt(quantity),
          price: product.price 
        });
      }
    } else {
      if (existingIndex >= 0) {
        selectedProducts.splice(existingIndex, 1);
      }
    }
    
    setFormData({ ...formData, selectedProducts });
  };

  const calculateTotal = () => {
    return formData.selectedProducts.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.selectedProducts.length === 0) {
      setError('Please select at least one product.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const orderData = {
        customerName: formData.customerName,
        products: formData.selectedProducts,
        totalAmount: parseFloat(calculateTotal()),
      };

      await ordersAPI.create(orderData);
      setSuccess('Order created successfully!');
      
      // Reset form
      setFormData({
        customerName: '',
        selectedProducts: [],
      });

      // Redirect to order history after 2 seconds
      setTimeout(() => {
        navigate('/order-history');
      }, 2000);
    } catch {
      setError('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Order</h1>
        
        <Card className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                value={formData.customerName}
                onChange={handleCustomerNameChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer name"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Products</h3>
              <div className="space-y-4">
                {products.map((product) => {
                  const selectedProduct = formData.selectedProducts.find(p => p.productId === product.id);
                  const quantity = selectedProduct ? selectedProduct.quantity : 0;
                  
                  return (
                    <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{product.name}</h4>
                        <p className="text-sm text-gray-600">${product.price} - Stock: {product.stock}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor={`quantity-${product.id}`} className="text-sm text-gray-700">
                          Quantity:
                        </label>
                        <input
                          type="number"
                          id={`quantity-${product.id}`}
                          min="0"
                          max={product.stock}
                          value={quantity}
                          onChange={(e) => handleProductChange(product.id, e.target.value)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {formData.selectedProducts.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                  <span className="text-2xl font-bold text-blue-600">${calculateTotal()}</span>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                {success}
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="flex-1"
              >
                {loading ? 'Creating Order...' : 'Create Order'}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/order-history')}
              >
                View Orders
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateOrder;
