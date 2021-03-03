import React from 'react';

import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Search from './components/views/Search/Search';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Search/>
      </MainLayout>
    </div>
  );
}

export default App;
