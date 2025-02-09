import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../components/pages/Main';
import NotFound from '../components/pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
