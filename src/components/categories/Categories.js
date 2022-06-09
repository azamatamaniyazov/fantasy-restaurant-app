import { useGetCategoriesQuery } from "../../api/apiSlice";
import CategoryItems from "./CategoryItems";
import ClipLoader from "react-spinners/ClipLoader";

function Categories() {
  const {
    data: categories = [],
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery();

  return (
    <div className="max-w-6xl mx-auto px-2">
      {isLoading ? (
        <div className="text-center mt-28">
          <ClipLoader color={"#00ab49"} loading={isLoading} size={80} />
        </div>
      ) : (
        categories.map((item) => {
          return (
            <div key={item.id} id={`${isSuccess && item.category_name}`}>
              <CategoryItems id={item.id} categoryName={item.category_name} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Categories;
