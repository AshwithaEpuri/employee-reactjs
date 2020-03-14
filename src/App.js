import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Content} from './Content'
import {Header} from './Header'
import {Fotter} from './Fotter'
import {AddEmployee} from './AddEmployee'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
 
class App extends React.Component {
   render(){
  return (
    <div >
      <Router>     
      <Header/>

<Switch>
  <Route  path='/list-emp' exact={true} component={Content}/>
  <Route path='/add-emp' exact={true} component={AddEmployee}/>
</Switch>
</Router>
    </div>
  );
}
 }
 
 

 

 
export default App;
