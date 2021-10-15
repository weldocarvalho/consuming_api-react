import { Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Students from '../pages/Students';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Students} />
      <PrivateRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/login" component={Login} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
