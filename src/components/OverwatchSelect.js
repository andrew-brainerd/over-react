import React, { PureComponent } from 'react';
import Select from 'overwatch-settings-select';

export default class OverwatchSelect extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
    }

    onChange = (index) => {
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        return <Select 
            selectedIndex={this.state.selectedIndex}
            onChange={this.onChange}
            options={this.props.options}
            label={this.props.label}
        />
    }
}