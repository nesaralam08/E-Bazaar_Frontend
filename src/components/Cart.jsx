import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import PageLoading from "../utils/PageLoading";

const USER_EMAIL = "nesar@gmail.com"; // later replace with JWT

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH CART =================
  const fetchCart = async () => {
    try {
      const res = await AxiosInstance.get(`/api/cart/user/${USER_EMAIL}`);
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ================= INCREMENT =================
  const increment = async (productId) => {
    try {
      const res = await AxiosInstance.patch(
        `/api/cart/item/${productId}/inc`,
        null,
        { params: { email: USER_EMAIL } }
      );
      setCartItems(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= DECREMENT =================
  const decrement = async (productId) => {
    try {
      const res = await AxiosInstance.patch(
        `/api/cart/item/${productId}/dec`,
        null,
        { params: { email: USER_EMAIL } }
      );
      setCartItems(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= REMOVE ITEM =================
  const removeItem = async (productId) => {
    try {
      const res = await AxiosInstance.delete(`/api/cart/item/${productId}`, {
        params: { email: USER_EMAIL },
      });
      setCartItems(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= SUBTOTAL =================
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ================= LOADING =================
  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>
        <p className="text-base-content/70">
          Review your items before checkout
        </p>
      </div>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl lg:text-3xl font-semibold mb-2">
            Your cart is empty 🛒
          </h2>
          <Link to="/products" className="btn bg-slate-800 mt-4 text-white">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= CART ITEMS ================= */}
          <div className="lg:col-span-2 space-y-4 ">
            {cartItems.map((item) => (
              <div
                key={item.productId}
                className="card card-side bg-base-100 shadow"
              >
                {/* Image */}
                <Link
                    to={`/products/${item.productId}`}
                  >
                  <figure className="p-4">
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/120"}
                      alt={item.name}
                      className="w-24 h-24  object-contain"
                    />
                  </figure>
                </Link>

                {/* Details */}
                <div className="card-body p-4">
                  <Link
                    to={`/products/${item.productId}`}
                    className="hover:text-primary hover:underline"
                  >
                    <h2 className="font-semibold">{item.name}</h2>
                  </Link>

                  <p className="text-sm text-base-content/60">
                    ₹{item.price.toLocaleString()}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    {/* Quantity */}
                    <div className="join">
                      <button
                        className="btn bg-base-300 px-2 join-item font-semibold"
                        onClick={() => decrement(item.productId)}
                      >
                        −
                      </button>

                      <button className="btn bg-base-300 px-4 join-item pointer-events-none">
                        {item.quantity}
                      </button>

                      <button
                        className="btn bg-base-300 px-2 join-item font-semibold"
                        onClick={() => increment(item.productId)}
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      className="btn bg-red-300 px-4"
                      onClick={() => removeItem(item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="p-4 font-semibold">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUMMARY ================= */}
          <div className="card bg-base-100 shadow h-fit">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm text-base-content/60">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <button className="btn bg-slate-800 text-white btn-block mt-4">
                Proceed to Checkout
              </button>

              <Link to="/products" className="btn bg-base-300 btn-block">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
