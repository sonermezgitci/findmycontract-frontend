import React from 'react';
import Feed from "./Feed"
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
        <Feed />
        {/* <widgets/> */}
        <div className="main">
          <Main />

        </div>






      </div>

    );
  }
}

export default App;
