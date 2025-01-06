import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../config";
import axios from "axios";
import PropTypes from "prop-types";
import { Package, Calendar, PhoneCall, MapPin } from "lucide-react";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = useCallback(async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [token]);

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl+"/api/order/status",{orderId,status:event.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  return (
    <div className="p-6 sm:p-10 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🛍️ Your Orders
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-blue-500" />
              <h4 className="text-xl font-semibold text-gray-700 ml-2">
                Order #{index + 1}
              </h4>
            </div>

            <div className="mb-4 space-y-1">
              {order.items.map((item, i) => (
                <p key={i} className="text-sm text-gray-600">
                  {item.name} x {item.quantity}{" "}
                  <span className="text-gray-400">({item.size})</span>
                </p>
              ))}
            </div>

            <div className="mb-4 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state}, {order.address.country},{" "}
                  {order.address.zipcode}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <PhoneCall className="w-4 h-4 text-blue-500" />
                <span>{order.address.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Items:</span>{" "}
                {order.items.length}
              </p>
              <p>
                <span className="font-semibold">Method:</span>{" "}
                {order.paymentMethod}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{" "}
                {order.payment ? (
                  <span className="text-green-500 font-medium">Done</span>
                ) : (
                  <span className="text-red-500 font-medium">Pending</span>
                )}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> {currency}
                {order.amount}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{new Date(order.date).toLocaleDateString()}</span>
            </div>

            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="w-full border rounded-md py-2 px-3 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out For delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

Orders.propTypes = {
  token: PropTypes.string.isRequired
};

export default Orders;
