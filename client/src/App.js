import React from "react";
import { Layout } from "antd";

import WrappedMap from "./components/Map/Map";
import OptionPanel from "./components/OptionPanel/OptionPanel";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { Header, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Sider theme="light">
          <OptionPanel />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
