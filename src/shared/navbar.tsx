import { A } from "@solidjs/router"

import "./navbar.css";
import { Logo } from "./";

export function Navbar() {
  return (
    <nav>
        <Logo />
        <A href="/about">About</A>
        <A href="/blog">Blog</A>
    </nav>
  );
}
