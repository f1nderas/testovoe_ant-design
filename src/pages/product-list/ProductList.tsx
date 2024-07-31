import { Table } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types";

const products: IProduct[] = [
  { id: 1, name: "Product 1", priceRub: 1000, priceUsd: 15 },
  { id: 2, name: "Product 2", priceRub: 2000, priceUsd: 30 },
];
const ProductList: FC = () => {
  const columns = [
    { title: "Product", dataIndex: "name", key: "name" },
    { title: "priceRub", dataIndex: "priceRub", key: "priceRub" },
    { title: "priceUsd", dataIndex: "priceUsd", key: "priceUsd" },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: IProduct) => (
        <Link to={`/buy/${record.id}`}>Buy</Link>
      ),
    },
  ];

  return <Table dataSource={products} rowKey="id" columns={columns} />;
};

export default ProductList;
