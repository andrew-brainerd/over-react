import React, { Component } from 'react';
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
            topHeroes: null
        }

        this.hostname = "https://over-react-backend.herokuapp.com";
        this.hostname = "http://localhost:5000";
    }

    componentDidMount() {
        this.getStats()
            .then(res => this.setState({ 
                username: res.username,
                level: res.level,
                portrait: res.portrait,
                stats: res.stats
            }))
            .then(res => this.getTopHeroes(this.props.count))
            .catch(err => console.log(err));
    }

    getStats = async() => {
        console.log('Getting User Stats for ' + this.props.userId);

        const response = await fetch(this.hostname + '/api/stats/' + this.props.userId);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error('Failed to fetch user stats | ' + body.message);
        }

        return body;
    }

    getTopHeroes(count) {
        console.log('Getting Top Heroes for ' + this.props.gameMode);

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
                <ul className="playerTopHeroesList">
                    {topHeroesList}
                </ul>
        });
    }
    
    render() {
        return (
            <div className="playerStats">
                <h2 className="playerStatsHeader">{this.props.gameMode} Top Heroes</h2>
                <div className="playerTopHeroes">{this.state.topHeroes}</div>
            </div>
        );
    }
}