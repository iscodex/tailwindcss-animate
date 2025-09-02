import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/configurator", "routes/configurator.tsx"),
] satisfies RouteConfig;
