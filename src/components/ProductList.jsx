import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AxiosInstance from "../utils/AxiosInstance";
import PageLoading from "../utils/PageLoading";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    AxiosInstance.get("/api/products")
      .then((d) => {
        setProducts(d.data);
        setPageLoading(false);
        console.log(d);
      })
      .catch((e) => {
        setPageLoading(true);
        console.log(e);
      });
  }, []);
  return (
    <>
      {pageLoading ? (
        <PageLoading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10">
          {products.length > 0 ? (
            products.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <h1>
              <center>No items found.</center>
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export default ProductGrid;
