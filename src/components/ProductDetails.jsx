import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import PageLoading from "../utils/PageLoading";
import ProductGrid from "./ProductList";
import { handleSuccess, handleError } from "../utils/Toast";
function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AxiosInstance.get(`/api/products/${productId}`)
      .then((d) => {
        setProduct(d.data);
        setLoading(false);
        console.log(d);
      })
      .catch((e) => {
        setLoading(true);
        console.log(e);
      });
  }, []);
  const addToCart = async (productId, quantity = 1) => {
    const data = {
      userEmail: "nesar@gmail.com", // from auth later
      productId: productId,
      quantity: quantity,
    };

    try {
      const res = await AxiosInstance.post("/api/cart/add", data);
      console.log("Added to cart:", res.data);

      handleSuccess("Product added to cart");
    } catch (error) {
      console.error(error);
      handleError("Failed to add product");
    }
  };
  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <div className="max-w-6xl mx-auto p-4 md:p-8">
            {/* Breadcrumb */}
            <div className="text-sm breadcrumbs mb-6">
              <ul>
                <li>
                  <a href="/" className="underline">
                    Home
                  </a>
                </li>
                <li>{product.category?.name}</li>
                <li className="font-medium">{product.name}</li>
              </ul>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="hover-3d">
                <div className="card bg-white p-6">
                  <img
                    src={product.imageUrl || "https://via.placeholder.com/400"}
                    alt={product.name}
                    className="w-full max-h-[400px] object-contain"
                  />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              {/* Details Section */}
              <div className="space-y-4 bg-base-200 px-3">
                {/* Category */}
                <div className="badge badge-outline">
                  {product.category?.name}
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold">
                  {product.name}
                </h1>

                {/* Brand */}
                <p className="text-sm text-base-content/70">
                  Brand: <span className="font-medium">{product.brand}</span>
                </p>

                {/* Price */}
                <p className="text-3xl font-bold text-success">
                  ₹{product.price}
                </p>

                {/* Stock Status */}
                <div>
                  <span
                    className={`badge ${
                      product.available ? "badge-success" : "badge-error"
                    }`}
                  >
                    {product.available ? "In Stock" : "Out of Stock"}
                  </span>
                  {product.available && (
                    <span className="ml-2 text-sm text-base-content/60">
                      ({product.stock} left)
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed">{product.desc}</p>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <button
                    disabled={!product.available}
                    className="btn bg-slate-800 text-white hover:bg-slate-950 flex-1"
                    onClick={() => addToCart(product.id, 1)}
                  >
                    Add to Cart
                  </button>

                  <button className="btn bg-green-300 px-2">❤ Wishlist</button>
                </div>
              </div>
            </div>

            {/* Extra Info */}
            <div className="divider my-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Category</div>
                <div className="stat-value text-base">
                  {product.category?.name}
                </div>
              </div>

              <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Release Date</div>
                <div className="stat-value text-base">
                  {product.releaseDate}
                </div>
              </div>

              <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Availability</div>
                <div className="stat-value text-base">
                  {product.available ? "Available" : "Unavailable"}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-xl lg:text-3xl font-semibold text-slate-800">
              You might also like
            </h1>
          </div>
          <ProductGrid />
        </>
      )}
    </>
  );
}

export default ProductDetails;
