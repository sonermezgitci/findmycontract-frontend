import React from 'react';
import Header from "./containers/Header";
import Sidebar from "./Sidebar"
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        {/* <AppBody /> */}
        <div className="app__body"></div>
        <Sidebar />
        {/* <Feed/> */}
        {/* <widgets/> */}
        {/* <Main /> */}



      </div>
    );
  }
}

export default App;
