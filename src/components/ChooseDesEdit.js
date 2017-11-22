import React from 'react';
import { connect } from 'react-redux';
import ChooseDesEditForm from './ChooseDesEditForm';
import { loadSpec } from '../actions/spec';

const ChooseDesEdit = (props) => {
    return (
        <div>
            <ChooseDesEditForm
                storedDesigns={props.storedDesigns}
                onSubmit={(selectedId) => {
                    props.dispatch(loadSpec(selectedId));
                    props.history.push('/edit_spec1');
                }}
            />
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        storedDesigns: state.storedDesigns
    };
};

export default connect(mapStateToProps)(ChooseDesEdit);

