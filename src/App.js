import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import Layout from "./components/Layout";

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
