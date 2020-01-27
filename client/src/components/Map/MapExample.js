import React, { Component } from "react";
import { GoogleComponent } from "react-google-location";

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null
    };
  }
  render() {
    console.warn("test", this.state.place);

    return (
      <div className="wrapper">
        <GoogleComponent
          apiKey={`${process.env.REACT_APP_GOOGLE_KEY}`}
          language={"en"}
          country={"country:am"}
          onChange={e => {
            this.setState({ place: e });
          }}
        />
      </div>
    );
  }
}

export default MapExample;
