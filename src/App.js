import React from 'react';

import {connect} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature} from './actions/actions';
import {actionCreators} from "redux";

const mapStateToProps = state => {
    return {
        car: state.car,
        additionalFeatures: state.additionalFeatures,
        additionalPrice: state.additionalPrice
    }
}

const mapDispatchToProps = state => {
    return {

    }
}

const App = (props) => {


  return (
        <div className="boxes">
          <div className="box">
            <Header car={props.car} />
            <AddedFeatures car={props.car} />
          </div>
          <div className="box">
            <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
            <Total car={props.car} additionalPrice={props.additionalPrice} />
          </div>
        </div>
  );
};

export default connect(mapStateToProps, {addFeature})(App);
