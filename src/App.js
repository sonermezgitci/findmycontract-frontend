import React from 'react';
import Header from "./containers/Header";
import Main from './Main';
import Sidebar from "./Sidebar"

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
        <Main />



      </div>
    );
  }
}

export default App;
