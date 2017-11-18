import React from 'react';
import { connect } from 'react-redux';

const SpecPrep5A = (props) => {
    return (
        <div>
            <h1>Specification - Part 5A</h1>
            <p>KVA: {props.spec.kva}</p>
            <p>Nominal HT Voltage: {props.spec.nominal_ht_voltage}</p>
            <p>Nominal LT Voltage: {props.spec.nominal_lt_voltage}</p>
            <p>LT Winding Conductor: {props.spec.winding_conductor_lt}</p>
            <p>Tank Type: {props.spec.tank_type}</p>
        </div>
    );
};

// TODO eval

const mapStateToProps = (state, props) => {
    return {
        spec      : state.spec
    };
};

export default connect(mapStateToProps)(SpecPrep5A);
