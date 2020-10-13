import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrfanagesMap from './pages/OrfanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrfanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;