import React, { Fragment } from 'react';
import Header from './Header'
import Footer from './Footer'
import LatestPhotos from './components/LatestPhotos';
import './App.css';



function App(props) {
  return (
    <Fragment>
      <Header></Header>
        <div className="content-block">
          <div className="container">
          <LatestPhotos></LatestPhotos>
          </div>
        </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
