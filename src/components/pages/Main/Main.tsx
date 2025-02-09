import React, { useCallback, useState } from 'react';
import CardsList from '../../widgets/CardsList';
import Search from '../../widgets/Search';

const Main: React.FC = () => {
  const [queryState, setQueryState] = useState<string | undefined>(undefined);

  const handleSearchChange = useCallback((query: string) => {
    setQueryState(query);
  }, []);

  return (
    <div className="max-w-[1280px] my-0 mx-auto text-center">
      <div className="w-full h-full flex flex-col gap-1">
        <h1 className="text-4xl font-extrabold">Class component !</h1>
        <Search onSearchChange={handleSearchChange} />
        <CardsList query={queryState} />
      </div>
    </div>
  );
};

export default Main;
