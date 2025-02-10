import React, { useCallback, useState } from 'react';
import CardsList from '../../widgets/CardsList';
import Search from '../../widgets/Search';
import { Outlet, useLocation, useNavigate } from 'react-router';

const Main: React.FC = () => {
  const [queryState, setQueryState] = useState<string | undefined>(undefined);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = useCallback((query: string) => {
    setQueryState(query);
  }, []);

  const handleNavigateClick = useCallback(() => {
    if (location.pathname.startsWith('/frontpage=2&details/')) {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="max-w-[1280px] my-0 mx-auto text-center">
      <div className="w-full h-lvh flex flex-col gap-1">
        <div className="h-17p">
          <h1 className="text-4xl font-extrabold">Class component !</h1>
          <Search onSearchChange={handleSearchChange} />
        </div>
        <div className="w-full h-75p px-8 py-4 flex justify-between">
          <div onClick={handleNavigateClick} className="w-full overflow-y-scroll">
            <CardsList query={queryState} />
          </div>
          <Outlet />
        </div>
        <div className="h-8p">
          <h1>pagination</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
