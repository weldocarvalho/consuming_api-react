import { Switch, Route } from 'react-router-dom';

import Students from '../pages/Students';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Students} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
