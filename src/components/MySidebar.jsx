import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const MySidebar = () => {
  return (
    <aside className="mr-16 bg-blue-300 px-12 py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ul className="mt-8 text-lg grid gap-2">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <NavLink activeClassName="text-red-500 font-bold" exact href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MySidebar;
