import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";

const { Header, Content, Footer } = AntLayout;

interface LayoutProps {
  children: ReactNode;
}

const menuItem = [
  {
    key: "home",
    label: <Link to="/">Основная страница</Link>,
  },
  {
    key: "sales-report",
    label: <Link to="/sales-report">Отчет о продажах</Link>,
  },
];
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout className="min-h-screen">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          className="container mx-auto"
          items={menuItem}
        />
      </Header>
      <Content className="container mx-auto py-6">{children}</Content>
      <Footer className="text-center">
        Product App ©2024 Created by Your Name
      </Footer>
    </AntLayout>
  );
};

export default Layout;
