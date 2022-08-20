import React, { useState } from "react";
import { Layout, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MenuList from "./MenuList";

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

const DesktopLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 414px)" });
  return (
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth={isMobile ? 1 : 80}
        style={{ height: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{ color: "white", padding: 20, marginBottom: 1 }}
        >
          GITSEMKA
        </div>
        <div style={{ marginTop: 2.9 }}>
          <MenuList />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button
            type="link"
            style={{ color: "white" }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <Content style={{ padding: "0 50px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          ©2022 Created by Artisan 🥐
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DesktopLayout;
