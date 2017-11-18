import React from 'react';
import { connect } from 'react-redux';
import SpecForm5 from './SpecForm5';
import { editSpec } from '../actions/spec';
import evalPrepFinal from '../evaluators/prep_final';

const SpecPrep5 = (props) => {
    return (
        <div>
            <h1>Specification - Part 5</h1>
            <SpecForm5
                spec_from_store={props.spec}
                onSubmit={(spec_from_form) => {
                    props.dispatch(editSpec({
                        ...spec_from_form,
                        ...(evalPrepFinal(spec_from_form))
                    }));
                    props.history.push('/spec_prep5a');
                }}
            />
        </div>
    );
};

// TODO eval

const mapStateToProps = (state, props) => {
    return {
        spec      : state.spec
    };
};

export default connect(mapStateToProps)(SpecPrep5);
