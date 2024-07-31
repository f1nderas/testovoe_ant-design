import { FC } from "react";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

import ThankYou from "./pages/thank-you/ThankYou";
import ProductList from "./pages/product-list/ProductList";
import SalesReportPage from "./pages/sales-report/SalesReportPage";
import PurchasePage from "./pages/purchase/PurchasePage";

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/buy/:productId" element={<PurchasePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/sales-report" element={<SalesReportPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
