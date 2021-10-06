import { Switch, Route } from 'react-router-dom';

import Students from '../pages/Students';
import Register from '../pages/Register'
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Students} />
      <Route exact path="/register" component={Register} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
