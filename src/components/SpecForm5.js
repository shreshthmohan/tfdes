import React from 'react';

export default class SpecForm5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props.spec_from_store
        };
    };
    onInputChangeNumber = (event) => {
        const name = event.target.name;
        const value = parseFloat(event.target.value) || '';
        this.setState(() => {
            return {
                [name]: value
            };
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(
            {
                ...(this.state)
            }
        );
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.winding_conductor_lt === 'aluminium' &&
                        <label>Aluminium (covered) LT per kg
                            <input
                                type="text"
                                onChange={this.onInputChangeNumber}
                                value={this.state.cost_lt}
                                name="cost_lt"
                            />
                        </label>
                    }
                    {this.state.winding_conductor_lt === 'copper' &&
                        <label>Copper (covered) LT per kg
                            <input
                                type="text"
                                onChange={this.onInputChangeNumber}
                                value={this.state.cost_lt}
                                name="cost_lt"
                            />
                        </label>
                    }
                    {this.state.winding_conductor_ht === 'aluminium' &&
                        <label>Aluminium (covered) HT per kg
                            <input
                                type="text"
                                onChange={this.onInputChangeNumber}
                                value={this.state.cost_ht}
                                name="cost_ht"
                            />
                        </label>
                    }
                    {this.state.winding_conductor_ht === 'copper' &&
                        <label>Copper (covered) HT per kg
                            <input
                                type="text"
                                onChange={this.onInputChangeNumber}
                                value={this.state.cost_ht}
                                name="cost_ht"
                            />
                        </label>
                    }
                    <label>CRGO per kg
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.cost_crgo}
                            name="cost_crgo"
                        />
                    </label>
                    <label>Oil per litre
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.cost_oil}
                            name="cost_oil"
                        />
                    </label>
                    <label>Steel per kg
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.cost_steel}
                            name="cost_steel"
                        />
                    </label>
                    <label>Radiators per kg
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.cost_radiator}
                            name="cost_radiator"
                        />
                    </label>
                    <button>Check data & Submit</button>
                </form>
            </div>
        );
    };
};
