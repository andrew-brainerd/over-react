import React, { Component } from 'react';
import { hostname } from '../config/server'
import Hero from './Hero';
import '../css/Stats.css';

export default class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            level: null,
            portrait: null,
            stats: null,
            topHeroes: null,
            userId: this.props.userId
        }
    }

    componentDidMount() {
        this.getStats(this.props.userId)
            .then(res => this.setState({ 
                username: res.username,
                level: res.level,
                portrait: res.portrait,
                stats: res.stats,
                userId: this.props.userId
            }))
            .then(res => this.getTopHeroes(this.props.count))
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userId !== nextProps.userId) {
            this.getStats(nextProps.userId)
                .then(res => this.setState({ 
                    username: res.username,
                    level: res.level,
                    portrait: res.portrait,
                    stats: res.stats,
                    userId: nextProps.userId
                }))
                .then(res => this.getTopHeroes(nextProps.count))
                .catch(err => console.log(err));
        }    
    }

    getStats = async(userId) => {
        console.log(`Getting User Stats for ${userId}`);

        const response = await fetch(`${hostname}/api/stats/${userId}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(`Failed to fetch user stats | ${body.message}`);
        }

        return body;
    }

    getTopHeroes(count) {
        console.log(`Getting Top Heroes for ${this.props.gameMode}`);

        var topHeroesList = [];
        var topHeroCount = 0;
        var maxTopHeroCount = count || 100;
        var stats = this.state.stats;
        var topHeroes = stats.top_heroes[this.props.gameMode.toLowerCase()];

        for (var hero in topHeroes) {
            if (topHeroCount < maxTopHeroCount) {
                var heroName = topHeroes[hero]['hero'];
                var heroTime = topHeroes[hero]['played'];
                var heroImage = topHeroes[hero]['img'];

                var topHeroItem = 
                    <li key={hero}>
                        <Hero name={heroName} time={heroTime} image={heroImage} />
                    </li>
                
                topHeroesList.push(topHeroItem);

                topHeroCount++;
            }
        }

        this.setState({
            topHeroes: 
                <ul className="player-top-heroes-list">
                    {topHeroesList}
                </ul>
        });
    }
    
    render() {
        return (
            <div className="player-stats">
                <h2 className="player-stats-header">{this.props.gameMode} Top Heroes</h2>
                <div className="player-top-heroes">{this.state.topHeroes}</div>
            </div>
        );
    }
}