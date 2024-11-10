import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Test from "components/Test";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Test />
      <Link to="404" className="bg-slate-500">
        go to a 404
      </Link>
      <br />
      <Link to="/exists">Go to an existing page</Link>
    </>
  );
}
