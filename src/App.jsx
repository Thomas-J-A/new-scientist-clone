import React from 'react';
import Header from './components//header/Header';
import Article from './components/article/Article';
import Sidebar from './components/sidebar/Sidebar';
import Recommended from './components/Recommended';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <main>
      <Article />
      <Sidebar />
      <Recommended />
    </main>
    <Footer />
  </>
);

export default App;
