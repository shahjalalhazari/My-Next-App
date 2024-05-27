import getProductDetails from "@/utils/getProductDetails";


const ProductDetailsPage = async ({ params }) => {
    const product = await getProductDetails(params.id)
    return (
        <>
            <h1 className="text-2xl">Product Detail Page {product.name}</h1>
        </>
    );
};

export default ProductDetailsPage;