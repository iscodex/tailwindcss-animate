import { NavLink } from "react-router";

export const ScreenSizeBlocker = () => {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-20 w-20 animate-pulse text-gray-500"
      >
        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 4h2" />
        <path d="M12 17v.01" />
      </svg>

      <h1 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
        You're currently on a mobile device.
      </h1>

      <p className="max-w-sm text-base text-gray-400">
        For the best experience, please visit from a desktop. Or, check out
        Tailwind CSS Animate in the meantime.
      </p>

      <NavLink
        to="/#examples"
        className="rounded-xl bg-white px-6 py-2.5 font-medium text-gray-900 shadow-sm transition hover:bg-gray-100 active:scale-95"
      >
        See examples
      </NavLink>
    </div>
  );
};
