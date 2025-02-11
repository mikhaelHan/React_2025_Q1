import React, { useState } from 'react';
import { getInitialQuery } from './getInitialQuery.ts';

interface ISearchProps {
  onSearchChange: (query: string) => void;
}

const Search: React.FC<ISearchProps> = (props: ISearchProps) => {
  const { onSearchChange } = props;
  const initialQuery = getInitialQuery();

  const [queryState, setQueryState] = useState<string>(initialQuery);
  const [errorState, setErrorState] = useState<boolean>(false);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setQueryState(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (queryState !== initialQuery) {
      onSearchChange(queryState);
      setQueryState('');
    }
  };

  const throwError = () => {
    setErrorState(true);
  };

  if (errorState) throw new Error('Oops, something went wrong...');

  return (
    <div className="px-4 w-full">
      <div className="p-4 flex justify-between gap-8">
        <form className="flex gap-8" onSubmit={handleSubmit}>
          <input
            onChange={inputOnChange}
            value={queryState}
            placeholder="Search..."
            className="py-2 px-4 text-2xl border-2 border-black rounded-[2rem]"
            type="search"
            size={30}
          />
          <input
            value="Search"
            type="submit"
            className="cursor-pointer py-2 px-12 text-2xl border-2 rounded-[2rem]
               border-black text-black bg-white hover:bg-black hover:text-white hover:border-white"
          />
        </form>
        <button
          onClick={throwError}
          type="button"
          className="cursor-pointer py-2 px-12 text-2xl border-2 rounded-[2rem]
             border-black text-black bg-white hover:bg-black hover:text-white hover:border-white"
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default Search;
