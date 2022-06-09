import { useGetAllProductsQuery } from "../../api/apiSlice";
import PuffLoader from "react-spinners/PuffLoader";

import CategoryCard from "./CategoryCard";

function CategoryItems({ id, categoryName }) {
  const { data: products = [], isLoading } = useGetAllProductsQuery();

  const productsList = () => {
    const categoryProducts = products.filter((item) => item.category_id === id);

    return categoryProducts.map((item) => {
      return <CategoryCard key={item.id} {...item} />;
    });
  };

  const renderItems = productsList();
  return (
    <div className="category-items py-6">
      <h2 className="text-3xl font-bold mb-7 text-center">{categoryName}</h2>
      <div
        className={`${
          isLoading ? "flex justify-center" : "grid gap-5 grid-cols-4"
        }`}
      >
        {isLoading ? (
          <PuffLoader color={"#00ab49"} loading={isLoading} size={80} />
        ) : (
          renderItems
        )}
      </div>
    </div>
  );
}

export default CategoryItems;
