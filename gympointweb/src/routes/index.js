import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Auth/SignIn';
import Home from '~/pages/Home';
import Students from '~/pages/Students';
import StudentsForm from '../pages/Students/form';
import Plans from '~/pages/Plans';
import PlansForm from '../pages/Plans/form';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
    return (
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/" exact component={Home} isPrivate />
            <Route path="/students" exact component={Students} isPrivate />
            <Route
                path="/students/studentsform"
                exact
                component={StudentsForm}
                isPrivate
            />
            <Route path="/plans" exact component={Plans} isPrivate />
            <Route
                path="/plans/plansform"
                exact
                component={PlansForm}
                isPrivate
            />
            <Route path="/help-orders" exact component={HelpOrders} isPrivate />

            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    );
}
