import React from 'react';
import { connect } from 'react-redux';
import SpecForm4 from './SpecForm4';
import { editSpec } from '../actions/spec';
// eval winding params
import evalWindingParams from '../evaluators/winding';

const SpecPrep4 = (props) => {
    return (
        <div>
            <h1>Specification - Part 4</h1>
            <SpecForm4
                spec_from_store={props.spec}
                onSubmit={(spec_from_form) => {
                    props.dispatch(editSpec({
                        ...spec_from_form,
                        ...(evalWindingParams(spec_from_form))
                    }));
                    props.history.push('/spec_prep4a');
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        spec      : state.spec
    };
};

export default connect(mapStateToProps)(SpecPrep4);
