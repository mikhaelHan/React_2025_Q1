import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../components/pages/Main';
import NotFound from '../components/pages/NotFound';
import DetailPage from '../components/pages/DetailPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="frontpage=2" element={<DetailPage />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
