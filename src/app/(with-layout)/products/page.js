import Link from "next/link";
import getAllProducts from "@/utils/getAllProducts";

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.category)
    return (
      <div>
        {products && products.map((product) => (
          <Link  key={product.id} href={`/products/${product.id}`}>
            <h2 className="text-xl">{product.name}</h2>
          </Link>
        ))}
      </div>
    );
};

export default ProductsPage;