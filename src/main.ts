import "./index.css";
import routes from "./routes";
import vitedge from "vitedge/react";
import App from "./App";

console.log("src/main SSR at import", import.meta.env.SSR === true);

// is there a way to determine which we're using?z
export default vitedge(App, { routes }, (ctx) => {
  console.log("ssr setup hook called with", ctx);
  console.log("src/main SSR at runtime", import.meta.env.SSR === true);
  // Custom setup hook.
  // E.g. set initialState in a store, install plugins, etc.
})