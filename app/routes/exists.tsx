import { Link } from "@remix-run/react";

export default function Exists() {
  return (
    <div>
      <p>I exist</p>
      <Link to="/">Back</Link>
    </div>
  );
}
