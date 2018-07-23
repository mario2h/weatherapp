import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Santiago,cl'
];
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
