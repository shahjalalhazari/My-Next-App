import getAllCategories from "@/utils/getAllCategories";
import Link from "next/link";

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <>
      <h1>Categories:</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <Link href={`/products?category=${category.name}`}>
            <h3 className="text-lg">{category.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Categories;
