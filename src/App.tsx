import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import { About, Article, Blog } from "./pages";
import { Navbar } from "./shared";

const App: Component = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="about" component={About} />
        <Route path="blog" component={Blog} />
        <Route path="blog/:id" component={Article} />
    </Routes>
    </>
  );
};

export default App;
