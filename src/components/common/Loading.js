import React from 'react';
import loader from '../../img/loading_simple_blue.png';
import '../../css/Loading.css';

const Loading = (props) => {
    return (
        <div className="loading">
            <img src={loader} alt={props.altText} />
        </div>
    );
}

export default Loading;
