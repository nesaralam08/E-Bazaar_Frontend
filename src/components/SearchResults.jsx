import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import { Link } from "react-router-dom";
import PageLoading from "../utils/PageLoading";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!keyword) return;

    setLoading(true);

    AxiosInstance.get(`/api/products/search?keyword=${keyword}`)
      .then((res) => {
        setProducts(res.data || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [keyword]);

  // ================= LOADING =================
  if (loading) {
    return (
      <PageLoading/>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Search Results for "{keyword}"
        </h1>
        <p className="text-base-content/60">
          {products.length} product(s) found
        </p>
      </div>

      {/* NO RESULTS */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-xl font-semibold mb-2">
            No products found 😕
          </h2>
          <Link to="/products" className="btn bg-slate-800 text-white mt-4">
            Browse Products
          </Link>
        </div>
      ) : (
        /* GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <figure className="p-4 bg-base-200">
                <img
                  src={product.imageUrl || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="h-40 object-contain"
                />
              </figure>

              {/* Body */}
              <div className="card-body p-4">
                <h2 className="card-title text-base line-clamp-1">
                  {product.name}
                </h2>

                <p className="text-sm text-base-content/60 line-clamp-2">
                  {product.desc}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-lg">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <span
                    className={`badge ${
                      product.available
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {product.available ? "In Stock" : "Out"}
                  </span>
                </div>

                <p className="text-xs text-base-content/60">
                  Brand: {product.brand}
                </p>

                <div className="card-actions mt-3">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn bg-slate-800 btn-sm text-white btn-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
