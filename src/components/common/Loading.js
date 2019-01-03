import { string } from 'prop-types';
import React from 'react';
import loader from '../../img/loading_simple_blue.png';
import './Loading.css';

const Loading = props => {
    return (
        <div className="loading">
            <img src={loader} alt={props.altText} />
        </div>
    );
}

Loading.propTypes = {
    altText: string.isRequired
}

export default Loading;
