import { useEffect, useMemo, useState } from "react";
import { useGetAllProductsQuery } from "../../api/apiSlice";
import CategoryCard from "../categories/CategoryCard";

function NewProducts() {
  const { data: products = [], isSuccess } = useGetAllProductsQuery();
  const [newProducts, setNewProducts] = useState([]);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    setNewProducts(products.slice(-4));
  }, [isSuccess]);

  const renderItems = newProducts.map((item) => {
    return <CategoryCard key={item.id} {...item} isNew={isNew} />;
  });

  return (
    <div className="max-w-6xl mx-auto py-9">
      <h2 className="text-3xl font-bold mb-7 text-center">Недавно добавлены</h2>
      <div className="grid gap-4 grid-cols-4">{renderItems}</div>
    </div>
  );
}

export default NewProducts;
