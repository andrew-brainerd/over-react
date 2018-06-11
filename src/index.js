import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <PropsRoute exact path="/" component={App} userId="Boone-11892" />
            <PropsRoute exact path="/collin" component={App} userId="Smeedge-1302" />
            <PropsRoute exact path="/alex" component={App} userId="hscooby249-1171" />
            <PropsRoute exact path="/kurtis" component={App} userId="Thristy-1451" />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();