import { Link } from "@remix-run/react";
import Test from "components/Test";

export default function Exists() {
  return (
    <div>
      <Test />
      <p>I exist</p>
      <Link to="/">Back</Link>
    </div>
  );
}
