import React, { useState, useEffect } from "react";
import { Layout } from "antd";

import WrappedMap from "./components/Map/Map";
import OptionPanel from "./components/OptionPanel/OptionPanel";
import "antd/dist/antd.css";
import "./App.css";
import { geoData } from "./utility/location";

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

  useEffect(() => {
    if (form.location.length === 0 && form.searchResult.name) {
      getLocation();
    }
  }, [form]);
  let getLocation = () => {
    let name = form.searchResult.name;
    console.log("name", name);
    let filteredGeo = geoData.filter((el) => el.name === name);
    console.log("geo", filteredGeo);
    setForm({ ...form, location: filteredGeo });
  };
  console.log("form", form);
  const { Header, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Sider theme="light">
          <OptionPanel form={form} setForm={setForm} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              location={form.location}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
