import { NavLink } from "react-router";

export const Logo = () => {
  return (
    <NavLink to="/" className="group/logo">
      <span className="sr-only">Tailwind CSS Animate</span>
      <img
        src="/logo.svg"
        alt="Logo - Tailwind CSS Animate"
        className="h-9 w-auto transition-transform duration-300 group-hover/logo:scale-110"
      />
    </NavLink>
  );
};
