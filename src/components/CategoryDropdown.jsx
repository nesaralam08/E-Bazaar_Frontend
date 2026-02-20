import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CategoryDropdown = ({ category }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* Trigger */}
      <button
        className="flex items-center justify-center gap-2"
        onClick={() => setOpen(!open)}
      >
        Categories
        {/* Dropdown Icon */}
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu (opens downward) */}
      {open && (
        <ul className="absolute top-full mt-2 menu menu-sm bg-base-100 rounded-box shadow w-48 z-[100]">
          {category.map((c) => (
            <li key={c.id}>
              <Link
                to={`/products/category/${c.id}`}
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
