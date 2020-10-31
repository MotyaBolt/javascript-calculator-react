import React from 'react';
import Main from './components/Main';
import './main.css';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div id="container">
        <Main/>
      </div>
    )
  }
}
export default App;
