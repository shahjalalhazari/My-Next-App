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
    <aside className="mr-12">
      <h1>Dashboard</h1>
      <ul>
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
