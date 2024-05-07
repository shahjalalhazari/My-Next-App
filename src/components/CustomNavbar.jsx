import Link from "next/link";

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
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNavbar;
