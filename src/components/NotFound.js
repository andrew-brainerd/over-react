import React, { Component } from 'react';
import Header from './common/Header';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Page Not Found</h1>
            </div>
        )
    }
}