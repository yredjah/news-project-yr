// == Import : npm
import React from 'react';

import Header from 'src/components/Header';
import Body from 'src/components/Body';
import Footer from 'src/components/Footer';
import Filter from 'src/containers/Filter';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Filter />
    <Body />
    <Footer />
  </div>
);

// == Export
export default App;
