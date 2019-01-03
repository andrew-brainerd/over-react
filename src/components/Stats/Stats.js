import { string, number } from 'prop-types';
import React, { Component } from 'react';
import { getStats } from '../../api/Stats';
import Loader from '../common/Loading';
import SimpleStatList from './SimpleStatLIst'
import './Stats.css';

export default class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: null
        }
    }

    componentDidMount() {
        getStats(this.props.userId)
            .then(res => this.setState({ stats: res.stats }))
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(nextProps) {
        const { userId } = this.props;

        if (userId !== nextProps.userId) {                
            getStats(nextProps.userId)
                .then(res => this.setState({ stats: res.stats }))
                .catch(err => console.log(err));
        }
    }
    
    render() {
        const { gameMode, statType } = this.props;
        const { stats } = this.state;

        const statList = stats && stats[statType] && stats[statType][gameMode.toLowerCase()];
        
        return (
            <div className="player-stats">
                { statType === "combat" ?
                    <SimpleStatList list={statList} /> :
                    <Loader altText="Invalid Stat Type" />
                }
            </div>
        );
    }
}

Stats.propTypes = {
    userId: string.isRequired,
    gameMode: string,
    statType: string,
    count: number
}
