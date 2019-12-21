import React from "react";

import { Layout } from "antd";

import OptionPanel from "./components/OptionPanel";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Sider theme="light">
          <OptionPanel />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
