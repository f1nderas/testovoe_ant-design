import { Select, Table } from "antd";
import { FC, useState } from "react";
import moment from "moment";
import { IFilter, ISale } from "../../types";

const { Option } = Select;

const sales: ISale[] = [
  {
    id: 1,
    product: "Product 1",
    date: "2024-07-30",
    priceRub: 1000,
    priceUsd: 15,
  },
  {
    id: 2,
    product: "Product 2",
    date: "2024-07-31",
    priceRub: 2000,
    priceUsd: 30,
  },
  {
    id: 3,
    product: "Product 3",
    date: "2024-08-01",
    priceRub: 3000,
    priceUsd: 45,
  },
];
const SalesReportPage: FC = () => {
  const [filteredSales, setFilteredSales] = useState<ISale[]>(sales);
  const [filter, setFilter] = useState<IFilter>({
    product: "",
    dataRange: "",
    currency: "",
  });

  const handleFilterChange = (changedValues: Partial<IFilter>) => {
    const newFilter = { ...filter, ...changedValues };
    setFilter(newFilter);

    let filtered = sales;
    if (newFilter.product) {
      filtered = filtered.filter((sale) => sale.product === newFilter.product);
    }

    if (newFilter.dataRange) {
      if (newFilter.dataRange === "today") {
        filtered = filtered.filter(
          (sale) => sale.date === moment().format("YYYY-MM-DD")
        );
      } else if (newFilter.dataRange === "week") {
        filtered = filtered.filter((sale) =>
          moment(sale.date).isBetween(
            moment().startOf("week"),
            moment().endOf("week")
          )
        );
      }
    }
    setFilteredSales(filtered);
  };

  const columns = [
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_: unknown, record: ISale) =>
        filter.currency === "USD" ? record.priceUsd : record.priceRub,
    },
  ];
  return (
    <>
      <Select
        placeholder="Select product"
        onChange={(value) => handleFilterChange({ product: value })}
      >
        <Option value="">All products</Option>
        <Option value="Product 1">Product 1</Option>
        <Option value="Product 2">Product 2</Option>
      </Select>
      <Select
        placeholder="Select date range"
        onChange={(value) => handleFilterChange({ dataRange: value })}
      >
        <Option value="">All dates</Option>
        <Option value="today">Today</Option>
        <Option value="week">This week</Option>
      </Select>
      <Select
        placeholder="Select currency"
        onChange={(value) => handleFilterChange({ currency: value })}
      >
        <Option value="">All currencies</Option>
        <Option value="RUB">RUB</Option>
        <Option value="USD">USD</Option>
      </Select>
      <Table
        columns={columns}
        dataSource={filteredSales}
        rowKey="id"
        className="pt-6"
      />
    </>
  );
};

export default SalesReportPage;
