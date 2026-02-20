import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import ProductGrid from "./ProductList";
import ProductCard from "./ProductCard";

const ItemsByCategory = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // fetch products by category
    AxiosInstance.get(`/api/products/category/${categoryId}`)
      .then((res) => {
        setProducts(res.data);
        if (res.data.length > 0) {
          setCategoryName(res.data[0].category.name);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto p-4 md:p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {categoryName || "Category Products"}
          </h1>
          <p className="text-base-content/70">
            Browse all products in this category
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold mb-2">
              No products found 😕
            </h2>
            <Link to="/products" className="btn bg-slate-800 text-white mt-4">
              Browse All Products
            </Link>
          </div>
        )}

        {/* Product Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="card bg-base-100 shadow hover:shadow-lg transition"
              >
                <figure className="h-40 bg-base-200">
                  <img
                    src={product.imageUrl || "https://via.placeholder.com/200"}
                    alt={product.name}
                    className="h-32 object-contain"
                  />
                </figure>

                <div className="card-body p-4">
                  <h2 className="font-semibold line-clamp-1">
                    {product.name}
                  </h2>

                  <p className="text-sm text-base-content/70 line-clamp-2">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-success">
                      ₹{product.price}
                    </span>

                    <span
                      className={`badge badge-sm ${
                        product.available
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {product.available ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="card-actions mt-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-sm bg-slate-800 text-white w-full"
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
    </div>
  );
};

export default ItemsByCategory;
