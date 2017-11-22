import React from 'react';
import { connect } from 'react-redux';
import evalLTTurns from '../evaluators/lt_turns';
import evalHTTurns from '../evaluators/ht_turns';
import PreInitCoreDesForm from './PreInitCoreDesForm';
import { editSpec } from '../actions/spec';

const PreInitCoreDes = (props) => {
    return (
        <div>
            <h1>Pre Initial Core Design (Will calculate LT and HT Turns)</h1>
            <PreInitCoreDesForm
                spec_from_store={props.spec}
                evalLTTurns={evalLTTurns}
                evalHTTurns={evalHTTurns}
                onSubmit={(spec_from_form) => {
                    props.dispatch(editSpec(spec_from_form));
                    props.history.push('/init_core_des');
                }}
            />
        </div>
    );
}; 

const mapStateToProps = (state, props) => {
    return {
        spec: state.spec
    };
};

export default connect(mapStateToProps)(PreInitCoreDes);

// HTTURNS eval is not dependent on eval LTTURNS
// But INICORE is

