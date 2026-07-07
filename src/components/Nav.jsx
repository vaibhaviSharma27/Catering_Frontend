import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="
flex
flex-wrap
justify-center
gap-3
sm:gap-4
md:gap-6
lg:gap-8
text-[30px]
sm:text-[32px]
md:text-[34px]
lg:text-[40px]
font-['Great_Vibes']
font-bold
pt-[0px]
md:pt-[0px]
px-4
text-center

"
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "goldenrod" : "brown",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "goldenrod" : "brown",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/services"
        style={({ isActive }) => ({
          color: isActive ? "goldenrod" : "brown",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Services
      </NavLink>

      <NavLink
        to="/menu"
        style={({ isActive }) => ({
          color: isActive ? "goldenrod" : "brown",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Menu
      </NavLink>

      <NavLink
        to="/gallery"
        style={({ isActive }) => ({
          color: isActive ? "goldenrod" : "brown",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Gallery
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "goldenrod" : "brown",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}