import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { connect } from "react-redux";
import { addComp } from "./actions/addComp";
import AddModelsListContainer from "./containers/AddModelsListContainer";

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};

class App extends Component {
  state = {};

  initialStateupdateSelection = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = event => {
    const value = event.target.name;

    this.setState({
      [value]: value
    });
  };

  onClick = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
      <AddModelsListContainer />
        <select id="modelList" onChange={this.updateSelection}>
          <option value="" disabled>
            {" "}
            -- pick a model --
          </option>
          <option value={Object.keys(data)[0]}>
            {" "}
            {Object.keys(data)[0]} ({data["Ivel Z3"].year})
          </option>
          <option value={Object.keys(data)[1]}>
            {" "}
            {Object.keys(data)[1]} ({data["Bally Astrocade"].year})
          </option>
          <option value={Object.keys(data)[2]}>
            {" "}
            {Object.keys(data)[2]} ({data["Sord M200 Smart Home Computer"].year}
            )
          </option>
          <option value={Object.keys(data)[3]}>
            {" "}
            {Object.keys(data)[3]} ({data["Commodore 64"].year})
          </option>
        </select>
        <button className="plus-button" onClick={this.onClick}>
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    model: state.model
  };
};

export default connect(
  mapStateToProps,
  { addComp }
)(App);
//export default App;
