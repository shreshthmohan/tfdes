import React from 'react';
import Link from 'react-router-dom';

export default class ChooseDesEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storedDesigns : props.storedDesigns,
            selectedDesign : '',
            error: ''
        };
    }
    onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return {
                [name]: value
            };
        });

    };
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.storedDesigns.length != 0 && this.state.selectedDesign == '') {
            this.setState(() => {
                return {
                    error: 'No design selected'
                };
            })
        } else {
            this.props.onSubmit(this.state.selectedDesign);
        }

    };

    render() {
        return (
            <div>
            {this.state.storedDesigns.length === 0 ?
                <h2>
                    No saved designs 
                    <Link to="/">Go Home</Link>
                </h2> :
                <h2>Choose design to edit</h2>
            }
            {this.state.storedDesigns.length > 0 &&
                <form onSubmit={this.onSubmit}>
                    <select
                        onChange={this.onInputChange}
                        value={this.state.selectedDesign}
                        name="selectedDesign"
                    >
                        <option value="">Nothing selected</option>
                    {this.state.storedDesigns.map((des) => {
                        return (<option value={des.id}>{des.id}</option>);
                    })}
                    </select>
                    <button>Edit</button>
                </form>
            }
            </div>
        );
    }
}
