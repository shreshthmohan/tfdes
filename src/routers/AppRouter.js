import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import EditSpec1  from '../components/EditSpec1.js';
import EditSpec2  from '../components/EditSpec2.js';
import SpecPrep1  from '../components/SpecPrep1.js';
import SpecPrep2  from '../components/SpecPrep2.js';
import SpecPrep3  from '../components/SpecPrep3.js';
import SpecPrep4  from '../components/SpecPrep4.js';
import SpecPrep4A from '../components/SpecPrep4A.js';
import SpecPrep5  from '../components/SpecPrep5.js';
import SpecPrep5A from '../components/SpecPrep5A.js';
import PreInitCoreDes from '../components/PreInitCoreDes.js';
import InitCoreDes from '../components/InitCoreDes.js';
import Header from '../components/Header.js';
import ChooseDesEdit from '../components/ChooseDesEdit.js';

const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
            <Header />
            <Switch>
                <Route path='/' exact={true} />
                <Route path='/spec_prep1' component={SpecPrep1} />
                <Route path='/spec_prep2' component={SpecPrep2} />
                <Route path='/spec_prep3' component={SpecPrep3} />
                <Route path='/spec_prep4' component={SpecPrep4} />
                <Route path='/spec_prep4a' component={SpecPrep4A} />
                <Route path='/spec_prep5' component={SpecPrep5} />
                <Route path='/spec_prep5a' component={SpecPrep5A} />
                <Route path='/choose_des_edit' component={ChooseDesEdit} />
                <Route path='/edit_spec1' component={EditSpec1} />
                <Route path='/edit_spec2' component={EditSpec2} />
                <Route path='/pre_init_core_des' component={PreInitCoreDes} />
                <Route path='/init_core_des' component={InitCoreDes} />

            </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;

