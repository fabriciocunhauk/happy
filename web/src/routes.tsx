import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrfanagesMap from './pages/OrfanagesMap';
import Orfanage from './pages/Orphanage';
import CreateOrfanage from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrfanagesMap} />

                <Route path="/orphanages/create" component={CreateOrfanage} />
                <Route path="/orphanages/:id" component={Orfanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;