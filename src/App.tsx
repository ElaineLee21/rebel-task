import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Episode from './pages/Episode';

function App(props:any) {

  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={() => <Redirect to='/contents' />} />
        <Route exact path="/contents" component={List} />
        <Route exact path="/contents/id" component={Detail} />
        <Route exact path="/episodes/id" component={Episode} />
      </Switch>
      
    </div>
  );
}

export default App;
