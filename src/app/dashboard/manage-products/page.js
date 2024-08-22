import ManageProductsTable from "@/components/dashboard/ManageProductsTable";
import getAllProducts from "@/utils/getAllProducts";

export const metadata = {
  title: "Manage Product | Dashboard | My Next App",
  description: "Generated by my next app",
};

const ManageProductPage = async() => {
  const products = await getAllProducts();

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold">Manage Products</h3>
      <hr className="border-2 mt-3" />

      <ManageProductsTable products={products}/>
    </div>
  );
};

export default ManageProductPage;