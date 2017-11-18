import React from 'react';
import { connect } from 'react-redux';
import SpecForm2 from './SpecForm2';
import { editClearances } from '../actions/spec';

const EditSpec2 = (props) => {
    return (
        <div>
            <h1>Editing Specifications - Part 2</h1>
            <SpecForm2
                clrFromStore={props.clearances}
                onSubmit={(clrFromForm) => {
                    props.dispatch(editClearances(clrFromForm))
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        clearances: state.clearances
    };
};

export default connect()(EditSpec2);
