import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import Layout from "./components/Layout";

import "./App.css";

function App() {
  return (
    <Suspense>
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  );
}

export default App;
