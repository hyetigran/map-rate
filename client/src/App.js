import React, { useState, useEffect } from "react";
import { Layout } from "antd";

import WrappedMap from "./components/Map/Map";
import OptionPanel from "./components/OptionPanel/OptionPanel";
import HistoryPanel from "./components/HistoryPanel/HistoryPanel";
import "antd/dist/antd.css";
import "./App.css";

const initialForm = {
  isBuying: "buy",
  currency: "usd",
  searchResult: {
    name: "",
    rate: "",
  },
  location: [],
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [history, setHistory] = useState([]);
  //need history to contain unique id inorder to map in history component

  useEffect(() => {
    setHistory([...history, form]);
  }, [form.searchResult]);
  console.log("history", history);
  console.log("form", form);
  const { Header, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Sider theme="light">
          <OptionPanel form={form} setForm={setForm} />
          <HistoryPanel history={history} setForm={setForm} />
        </Sider>
        <Layout>
          <Header></Header>
          <Content>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              location={form.location}
              rate={form.searchResult.rate}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
