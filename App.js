import React ,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Data from '../src/Component/Data'
class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Switch>
        
        <Route exact path="/" component={Data} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}
 
export default App;