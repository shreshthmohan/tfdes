import React from 'react';

export default class SpecForm4 extends React.Component {
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
        this.props.onSubmit(this.state);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>Design Considerations</p>
                    <p>Maximum Current Density for Windings</p>
                    <label>For LT
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.max_current_density_lt}
                            name="max_current_density_lt"
                        />
                    </label>
                    <label>For HT
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.max_current_density_ht}
                            name="max_current_density_ht"
                        />
                    </label>
                    <label>Conductor Rad Size
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.rod_size}
                            name="rod_size"
                        />
                    </label>
                    <label>Max Over-Fluxing allowed in %
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.max_over_flux}
                            name="max_over_flux"
                        />
                    </label>
                    <label>Max Flux Density
                        <input
                            type="text"
                            onChange={this.onInputChangeNumber}
                            value={this.state.max_flux_density}
                            name="max_flux_density"
                        />
                    </label>
                    <button>Check & Submit Data</button>
                </form>
            </div>
        );
    };
};
