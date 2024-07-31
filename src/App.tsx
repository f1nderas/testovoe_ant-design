import { FC, lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

const ThankYou = lazy(() => import("./pages/thank-you/ThankYou"));
const ProductList = lazy(() => import("./pages/product-list/ProductList"));
const SalesReportPage = lazy(
  () => import("./pages/sales-report/SalesReportPage")
);
const PurchasePage = lazy(() => import("./pages/purchase/PurchasePage"));

const App: FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/buy/:productId" element={<PurchasePage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/sales-report" element={<SalesReportPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
