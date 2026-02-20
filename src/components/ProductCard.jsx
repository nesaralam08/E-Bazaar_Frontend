import React from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import { handleSuccess, handleError } from "../utils/Toast";
const ProductCard = ({ product }) => {
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
    <div className="card w-full max-w-sm bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border">
      {/* Image */}
      <div className="hover-3d">
        <figure className="h-48 bg-white rounded-2xl">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-40 object-contain"
          />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Body */}
      <div className="card-body p-4 space-y-2 bg-base-200">
        <Link
          to={`/products/${product.id}`}
          className="flex flex-col gap-2 hover:text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.open(`/products/${product.id}`, "_blank");
          }}
        >
          {/* Category */}
          {product.category?.name && (
            <div className="badge badge-outline badge-sm w-fit">
              {product.category.name}
            </div>
          )}

          {/* Title */}
          <h2 className="card-title text-base font-semibold line-clamp-1">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-base-content/70 line-clamp-2">
            {product.desc}
          </p>

          {/* Price & Stock */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-slate-950">
              ₹{product.price}
            </span>

            <span
              className={`badge badge-sm ${
                product.available ? "badge-success" : "badge-error"
              }`}
            >
              {product.available ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Brand */}
          <div className="text-xs text-base-content/60">
            Brand: <span className="font-medium">{product.brand}</span>
          </div>
        </Link>

        {/* Action */}
        <div className="card-actions mt-3">
          <Link
            disabled={!product.available}
            className={`btn btn-sm w-full ${
              product.available
                ? "bg-slate-800 text-white hover:bg-slate-950"
                : "btn-disabled"
            }`}
            onClick={() => addToCart(product.id, 1)}
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
