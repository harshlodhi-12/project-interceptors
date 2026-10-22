import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100 ">
        <img
          src={product?.image || "https://via.placeholder.com/400"}
          alt={product?.name || "Product"}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {product?.discount && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            {product.discount}% OFF
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-red-500 hover:text-white">
          ♥
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-600">
          {product?.category || "Category"}
        </p>

        {/* Product Name */}
        <h2 className="truncate text-lg font-bold text-gray-800">
          {product?.name || "Product Name"}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {product?.description || "Product description goes here."}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-yellow-400">
            ★★★★★
          </div>

          <span className="text-sm text-gray-500">
            ({product?.reviews || 0} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            {product?.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{product.oldPrice}
              </p>
            )}

            <p className="text-xl font-bold text-gray-900">
              ₹{product?.price || 0}
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;