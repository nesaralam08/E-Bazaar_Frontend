import { Link } from "react-router-dom";
import React, { useState } from "react";
import AxiosInstance from "../utils/AxiosInstance";
import { handleError, handleSuccess } from "../utils/Toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await AxiosInstance.post("/api/contact-us/add", formData);
      handleSuccess(res.data);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      handleError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-base-100 shadow">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-base-content/70 mt-2">
            We’d love to hear from you. Get in touch with us!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body space-y-4">
            <h2 className="card-title font-semibold md:text-xl">
              Get in Touch
            </h2>

            <p className="text-base-content/70">
              Have questions about products, orders, or support? Reach out and
              our team will respond quickly.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="badge badge-primary">📧</span>
                <span>support@ebazaar.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="badge badge-secondary">📞</span>
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="badge badge-accent">📍</span>
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="flex gap-3">
              <Link className="btn btn-outline btn-sm">Facebook</Link>
              <Link className="btn btn-outline btn-sm">Instagram</Link>
              <Link className="btn btn-outline btn-sm">Twitter</Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title mb-4 font-semibold md:text-xl">
              Send a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full bg-base-300 px-2"
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-base-300 px-2"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full h-32 bg-base-300 p-2"
                  required
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn bg-slate-800 text-white w-full ${
                  loading ? "btn-disabled" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
