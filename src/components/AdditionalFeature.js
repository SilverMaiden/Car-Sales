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
        console.log(props.feature)
        props.addFeature(props.feature)
    };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
