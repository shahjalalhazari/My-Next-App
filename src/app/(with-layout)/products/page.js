import getAllProducts from "@/utils/getAllProducts";

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.category)
    return (
        <div>
            {products && products.map((product) => (
                <h2 key={product.id}>{product.name}</h2>
            ))}
        </div>
    );
};

export default ProductsPage;