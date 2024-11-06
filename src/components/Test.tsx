import { lazy } from "react";

const Test2 = lazy(() => import("./Test2"));

export default function Test() {
  return <Test2 />;
}
