import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero Section */}
      <div className="bg-base-100 shadow">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">About E-Bazaar</h1>
          <p className="text-base-content/70 mt-3 max-w-3xl mx-auto">
            E-Bazaar is a modern e-commerce platform designed to deliver
            quality products, seamless shopping, and a delightful user experience.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

        {/* Our Story */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title md:text-xl font-semibold">Our Story</h2>
            <p className="text-base-content/70 leading-relaxed">
              E-Bazaar was built with the vision of simplifying online shopping
              while maintaining trust, transparency, and speed. From electronics
              to daily essentials, our platform connects customers with products
              they love — all in one place.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title md:text-xl font-semibold">Our Mission</h2>
              <p className="text-base-content/70">
                To provide a reliable, secure, and user-friendly e-commerce
                experience that empowers customers and supports sellers.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title md:text-xl font-semibold">Our Vision</h2>
              <p className="text-base-content/70">
                To become a trusted digital marketplace where quality,
                innovation, and customer satisfaction come first.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title md:text-2xl font-semibold">Why Choose E-Bazaar?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-base-200 text-center">
                <h3 className="font-semibold">Wide Selection</h3>
                <p className="text-sm text-base-content/60 mt-1">
                  Thousands of products across multiple categories.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-base-200 text-center">
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-sm text-base-content/60 mt-1">
                  Safe and trusted payment methods.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-base-200 text-center">
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-base-content/60 mt-1">
                  Quick and reliable shipping.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-base-200 text-center">
                <h3 className="font-semibold">Customer Support</h3>
                <p className="text-sm text-base-content/60 mt-1">
                  Dedicated support whenever you need help.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            Start Your Shopping Journey
          </h2>
          <p className="text-base-content/70 mb-5">
            Discover amazing products at unbeatable prices.
          </p>
          <Link to="/products" className="btn bg-slate-800 text-white">
            Explore Products
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
