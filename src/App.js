import React from 'react';
import Header from "./containers/Header";
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />

        {/* <sidebar/> */}
        {/* <Feed/> */}
        {/* <widgets/> */}

      </div>
    );
  }
}

export default App;
