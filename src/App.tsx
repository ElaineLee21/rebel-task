import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Episode from './pages/Episode';

function App() {
  //useEffect해서 켜지자 마자 List 렌더링 되게 하자
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/contents" component={List} />
        <Route exact path="/contents/id" component={Detail} />
        <Route exact path="/episodes/id" component={Episode} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
