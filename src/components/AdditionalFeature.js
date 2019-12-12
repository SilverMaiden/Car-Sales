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

const AdditionalFeature = props => {
    let addFeature = event => {
        event.preventDefault();
        props.addFeature(props.feature.price);
    };
    let removeFeature = event => {
        event.preventDefault();
        props.removeFeature(props.feature.price);
    };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature} >Add</button>
      {props.feature.name} (+{props.feature.price})
      <button className="button" onClick={removeFeature} >Remove</button>
    </li>
  );
};

export default connect(mapStateToProps, {addFeature, removeFeature})(AdditionalFeature);
