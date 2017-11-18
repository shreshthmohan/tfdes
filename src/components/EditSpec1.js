import React from 'react';
import { connect } from 'react-redux';
import SpecForm1 from './SpecForm1';
import { editSpec } from '../actions/spec';


// ASK TODO: do we want to recalculate params upon editing?

const EditSpec1 = (props) => {
    return (
        <div>  
            <h1>Editing Specifications - Part 1</h1>
            <SpecForm1
                specFromStore={props.spec}
                onSubmit={(specFromForm) => {
                    props.dispatch(editSpec(specFromForm))
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

export default connect(mapStateToProps)(EditSpec1); 
