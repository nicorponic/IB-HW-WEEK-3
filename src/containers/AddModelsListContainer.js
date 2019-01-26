import * as React from "react";
import ModelsList from "./ModelsList";
import { connect } from "react-redux";
import { addComp } from "./actions/addComp";

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

class AddModelsListContainer extends React.Component {
  state = {};
  addComp = model => {
    this.props.dispatch({
      type: "ADD_COMP",
      payload: {
        name: Object.keys(value),
        manufacturer: data[value].manufacturer,
        year: data[value].year,
        origin: data[value].origin,
        ...model
      }
    });
  };

  componentDidUpdate() {
    this.props.addComp("Seriously Alice");
  }

  render() {
    return <ModelsList models={this.props.models} />;
  }
}

const mapStateToProps = (state)=>{
    return {
        models: state.models
    }
}
export default connect( mapStateToProps, { addComp } )(AddModelsListContainer);
