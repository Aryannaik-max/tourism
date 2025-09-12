import React, { useState } from 'react';
import { Briefcase, ShoppingBag, PlusCircle, Trash2, Edit2, BarChart2, Star, Tag, Gift, FileText, Upload, Palette, Clock, Phone, MapPin, DollarSign, Image as ImageIcon, Users, TrendingUp } from 'lucide-react';

// --- Sub-components for different dashboard sections ---

const VendorProfileManagement = ({ vendorData, setVendorData, handleUpdateProfile }) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
      <Briefcase className="w-6 h-6 text-emerald-600"/> My Vendor Profile
    </h2>
    <form onSubmit={handleUpdateProfile} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <input type="text" value={vendorData.businessName} onChange={(e) => setVendorData({...vendorData, businessName: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Craft Specialization</label>
          <input type="text" value={vendorData.specialization} onChange={(e) => setVendorData({...vendorData, specialization: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea value={vendorData.description} onChange={(e) => setVendorData({...vendorData, description: e.target.value})} className="mt-1 w-full p-2 border rounded-md" rows="3"></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input type="email" value={vendorData.email} onChange={(e) => setVendorData({...vendorData, email: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
          <input type="tel" value={vendorData.phone} onChange={(e) => setVendorData({...vendorData, phone: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" value={vendorData.location} onChange={(e) => setVendorData({...vendorData, location: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Hours</label>
          <input type="text" value={vendorData.businessHours} onChange={(e) => setVendorData({...vendorData, businessHours: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., 9:00 AM - 6:00 PM" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Business Logo</label>
        <input type="file" onChange={(e) => console.log('Logo file selected:', e.target.files[0])} className="mt-1 w-full p-2 border rounded-md" />
      </div>
      <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors">Update Profile</button>
    </form>
  </div>
);

const ProductsManagement = ({ vendorData, setVendorData }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', stock: '', image: null });
  const [editingProductId, setEditingProductId] = useState(null);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.stock || !newProduct.image) {
      console.error('Please fill out all product details and upload an image.');
      return;
    }
    const newProductEntry = {
      id: Date.now(),
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      stock: newProduct.stock,
      imageUrl: URL.createObjectURL(newProduct.image),
    };
    setVendorData(prevData => ({
      ...prevData,
      products: [...prevData.products, newProductEntry]
    }));
    setNewProduct({ name: '', price: '', description: '', stock: '', image: null });
  };
  
  const handleRemoveProduct = (productId) => {
    setVendorData(prevData => ({
      ...prevData,
      products: prevData.products.filter(product => product.id !== productId)
    }));
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setNewProduct({ name: product.name, price: product.price, description: product.description, stock: product.stock, image: null });
  };
  
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setVendorData(prevData => ({
      ...prevData,
      products: prevData.products.map(product => 
        product.id === editingProductId ? { ...product, name: newProduct.name, price: newProduct.price, description: newProduct.description, stock: newProduct.stock, imageUrl: newProduct.image ? URL.createObjectURL(newProduct.image) : product.imageUrl } : product
      )
    }));
    setEditingProductId(null);
    setNewProduct({ name: '', price: '', description: '', stock: '', image: null });
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <ShoppingBag className="w-6 h-6 text-emerald-600"/> Manage Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <form onSubmit={editingProductId ? handleUpdateProduct : handleAddProduct} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., Dokra Horse Statue" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price ($)</label>
              <input type="number" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., 75" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="Describe your product" rows="3" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
              <input type="number" value={newProduct.stock} onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., 10" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Image</label>
              <input type="file" onChange={(e) => setNewProduct({...newProduct, image: e.target.files[0]})} className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              {editingProductId ? (
                <>
                  <Edit2 className="w-5 h-5"/> Update Product
                </>
              ) : (
                <>
                  <PlusCircle className="w-5 h-5"/> Add Product
                </>
              )}
            </button>
            {editingProductId && (
              <button type="button" onClick={() => setEditingProductId(null)} className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors mt-2">
                Cancel
              </button>
            )}
          </form>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Product Listings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vendorData.products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded-md"/>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex gap-2">
                        <button onClick={() => handleEditProduct(product)} className="text-emerald-600 hover:text-emerald-800">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleRemoveProduct(product.id)} className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrdersView = ({ vendorData, setVendorData }) => {
  const handleStatusChange = (orderId, newStatus) => {
    setVendorData(prevData => ({
      ...prevData,
      orders: prevData.orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    }));
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <Gift className="w-6 h-6 text-emerald-600"/> Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vendorData.orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.totalPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.shippingAddress}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Shipped' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="p-1 border rounded-md text-sm"
                  >
                    <option value="Shipped">Shipped</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AnalyticsView = () => (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <BarChart2 className="w-6 h-6 text-emerald-600"/> Analytics
      </h2>
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2"><TrendingUp className="w-5 h-5 text-emerald-500"/> Monthly Sales Overview</h3>
          <p className="text-gray-600">
            This chart would display a line graph of your sales revenue and number of orders over the last 12 months.
          </p>
          <div className="mt-4 p-8 bg-gray-200 rounded-lg text-center text-gray-400">
            <BarChart2 className="mx-auto w-16 h-16 mb-4" />
            <p>Placeholder for monthly sales chart.</p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2"><Star className="w-5 h-5 text-yellow-500"/> Top-Selling Products</h3>
          <p className="text-gray-600">
            This section would list your products ranked by total revenue or units sold.
          </p>
          <div className="mt-4 p-8 bg-gray-200 rounded-lg text-center text-gray-400">
            <ShoppingBag className="mx-auto w-16 h-16 mb-4" />
            <p>Placeholder for a top-products list.</p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2"><Users className="w-5 h-5 text-blue-500"/> Customer Demographics</h3>
          <p className="text-gray-600">
            This chart would show data on your customer base, such as age, location, and purchase history.
          </p>
          <div className="mt-4 p-8 bg-gray-200 rounded-lg text-center text-gray-400">
            <Users className="mx-auto w-16 h-16 mb-4" />
            <p>Placeholder for customer demographics chart.</p>
          </div>
        </div>
      </div>
    </div>
);

// --- Main Vendor Dashboard Component ---
const VendorDashboard = () => {
  const [activeSection, setActiveSection] = useState('products');
  const [vendorData, setVendorData] = useState({
    businessName: 'Jharkhand Artisan Collective',
    specialization: 'Dokra Metal Work & Paintings',
    description: 'A community of local artisans creating traditional handicrafts and fine art.',
    location: 'Ranchi',
    email: 'vendor@example.com',
    phone: '+91 98765 43210',
    businessHours: '10:00 AM - 7:00 PM',
    products: [
      { id: 1, name: 'Dokra Horse Statue', price: 75, description: 'Handmade brass horse statue using lost-wax casting.', stock: 15, imageUrl: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Product+1' },
      { id: 2, name: 'Tribal Scroll Painting', price: 120, description: 'Traditional scroll painting on canvas depicting local folklore.', stock: 5, imageUrl: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Product+2' },
    ],
    orders: [
      { id: 'ORD98765', customerName: 'Alice Johnson', orderDate: '2024-06-10', totalPrice: 75, shippingAddress: '123 Main St, Anytown', status: 'Shipped' },
      { id: 'ORD98766', customerName: 'Bob Williams', orderDate: '2024-06-12', totalPrice: 240, shippingAddress: '456 Oak Ave, Somewhere', status: 'Processing' },
    ]
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Profile update requested:', vendorData);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <VendorProfileManagement vendorData={vendorData} setVendorData={setVendorData} handleUpdateProfile={handleUpdateProfile} />;
      case 'products':
        return <ProductsManagement vendorData={vendorData} setVendorData={setVendorData} />;
      case 'orders':
        return <OrdersView vendorData={vendorData} setVendorData={setVendorData} />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <ProductsManagement vendorData={vendorData} setVendorData={setVendorData} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white/80 backdrop-blur-md text-gray-900 p-6 md:p-8 space-y-4 shadow-xl">
          <div className="text-2xl font-bold text-emerald-600 mb-8">
            Vendor Portal
          </div>
          <nav className="space-y-2">
            <button onClick={() => setActiveSection('profile')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'profile' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <Briefcase className="w-5 h-5" /> Profile
            </button>
            <button onClick={() => setActiveSection('products')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'products' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <ShoppingBag className="w-5 h-5" /> Products
            </button>
            <button onClick={() => setActiveSection('orders')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'orders' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <Gift className="w-5 h-5" /> Orders
            </button>
            <button onClick={() => setActiveSection('analytics')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'analytics' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <BarChart2 className="w-5 h-5" /> Analytics
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 md:p-12">
          <div className="container mx-auto">
            {/* Key Metrics - This section remains visible on every page */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20 text-center">
                <ShoppingBag className="mx-auto w-12 h-12 text-emerald-500 mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Total Products</h3>
                <p className="text-4xl font-extrabold text-emerald-600">{vendorData.products.length}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20 text-center">
                <Gift className="mx-auto w-12 h-12 text-teal-500 mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Total Orders</h3>
                <p className="text-4xl font-extrabold text-teal-600">{vendorData.orders.length}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20 text-center">
                <Star className="mx-auto w-12 h-12 text-green-500 mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Average Rating</h3>
                <p className="text-4xl font-extrabold text-green-600">5.0</p>
              </div>
            </div>
            
            {/* Render active section */}
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;
