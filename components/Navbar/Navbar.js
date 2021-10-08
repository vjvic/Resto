import { useState } from "react";
import { NavContainer, NavItems, Bars } from "./Navbar.styles";
import { GrRestaurant } from "@react-icons/all-files/gr/GrRestaurant";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import Link from "next/link";

const navItems = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Menu",
    path: "/menu",
  },
  {
    text: "Contact",
    path: "/contact",
  },
  {
    text: "Gallery",
    path: "/gallery",
  },
];

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <nav>
      <NavContainer>
        {/*  logo */}
        <header>
          <GrRestaurant size={32} />
          <h1>Resto.</h1>
        </header>

        {/* Nav items */}
        <NavItems isToggle={isToggle}>
          {navItems.map((nav) => (
            <li key={nav.text}>
              <Link href={nav.path}>
                <a>{nav.text}</a>
              </Link>
            </li>
          ))}
        </NavItems>

        {/*  Bars */}
        <Bars onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? <FaTimes /> : <FaBars />}
        </Bars>
      </NavContainer>
    </nav>
  );
};

export default Navbar;
