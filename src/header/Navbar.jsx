import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import CategoryDropdown from "../components/CategoryDropdown";

function Navbar() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AxiosInstance.get("/api/category")
      .then((res) => {
        setCategory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="navbar bg-base-300 shadow-sm px-2">
      {/* 🔹 Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[100]"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <span className="font-semibold">Categories</span>
              <ul>
                {loading ? (
                  <li>
                    <span className="loading loading-spinner loading-sm"></span>
                  </li>
                ) : (
                  category.map((c) => (
                    <li key={c.id}>
                      <Link to={`/category/${c.id}`}>{c.name}</Link>
                    </li>
                  ))
                )}
              </ul>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          E-Bazaar
        </Link>
      </div>

      {/* 🔹 Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <CategoryDropdown category={category} />
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/* 🔹 Navbar End */}
      <div className="navbar-end gap-2">
        {/* Cart */}
        <div className="dropdown dropdown-end">
          <Link to={'/cart'}>
            <label tabIndex={0} className="btn btn-ghost btn-circle text-xl">
              🛒
            </label>
          </Link>
        </div>

        {/* Profile */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="profile" />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[100]"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
