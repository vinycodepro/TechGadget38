const API_BASE = 'http://localhost:8000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  if (options.body) {
    config.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

// Product API
export const productAPI = {
  getAll: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return apiCall(`/products?${queryParams}`);
  },
  getById: (id) => apiCall(`/products/${id}`),
  create: (product) => apiCall('/products', { method: 'POST', body: product }),
  update: (id, product) => apiCall(`/products/${id}`, { method: 'PUT', body: product }),
  delete: (id) => apiCall(`/products/${id}`, { method: 'DELETE' }),
};

// Auth API
export const authAPI = {
  register: (userData) => apiCall('/auth/register', { method: 'POST', body: userData }),
  login: (credentials) => apiCall('/auth/login', { method: 'POST', body: credentials }),
  getMe: () => apiCall('/auth/me'),
};

// Order API
export const orderAPI = {
  create: (orderData) => apiCall('/orders', { method: 'POST', body: orderData }),
  getMyOrders: () => apiCall('/orders/my-orders'),
  getById: (id) => apiCall(`/orders/${id}`),
};

export default apiCall;