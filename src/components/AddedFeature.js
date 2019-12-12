import React from 'react';

import {connect} from "react-redux";
import {removeFeature} from '../actions/actions';
const mapStateToProps = state => {
    return {
        additionalFeatures: state.additionalFeatures
    }
}

const mapDispatchToProps = dispatch => {
    removeFeature: dispatch(removeFeature);
}

const AddedFeature = props => {
    let handleRemoveFeature = () => {
        props.removeFeature(props.feature);
    };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature[1]}
    </li>
  );
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
