import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../src/layouts/LayoutDefault";

export default {
  Layout,
  title: "FADDER - Vehicle Search Platform",
  description: "Buying & Shipping American Automobiles - Search and find your perfect vehicle",
  extends: [vikeReact],
  prerender: true,
  trailingSlash: false,
} satisfies Config;