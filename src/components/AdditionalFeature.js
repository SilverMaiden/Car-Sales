import React from 'react';
import { addFeature, removeFeature } from '../actions/actions';

import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {
        additionalPrice: state.additionalPrice,
        car: state.car,
        additionalFeatures: state.additionalFeatures,
    };
}

const mapDispatchToProps = dispatch => {
    addFeature: dispatch(addFeature);
    removeFeature: dispatch(removeFeature);

}

const AdditionalFeature = props => {
    let handleAddFeature = () => {
        props.addFeature(props.feature.price)
    };
    let handleRemoveFeature = () => {
        props.removeFeature(props.feature.price);
    };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature} >Add</button>
      {props.feature.name} (+{props.feature.price})
      <button className="button" onClick={handleRemoveFeature} >Remove</button>
    </li>
  );
};

export default connect(mapStateToProps, {addFeature, removeFeature})(AdditionalFeature);
