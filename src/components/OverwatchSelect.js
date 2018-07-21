import React, { PureComponent } from 'react';
import Select from 'overwatch-settings-select';

export default class OverwatchSelect extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            selectedLabel: null
        }
    }

    onChange = (index) => {
        let newLabel = this.props.getOptionText(index);

        this.setState({
            selectedIndex: index,
            selectedLabel: newLabel
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedLabel !== nextProps.selectedLabel) {
            return;
        }
    }

    render() {
        return <Select 
            selectedIndex={this.state.selectedIndex}
            onChange={this.onChange}
            options={this.props.options}
            label={this.state.selectedLabel || this.props.label}
        />
    }
}