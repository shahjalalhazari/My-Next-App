import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const CustomNavbar = () => {
  return (
    <nav className="container flex items-center justify-between mx-auto">
      <h3 className="text-2xl font-semibold">My Next App</h3>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li key={path} className="mx-2">
            <NavLink
              href={path}
              activeClassName="text-blue-500 font-bold"
              exact={path == "/"}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNavbar;
