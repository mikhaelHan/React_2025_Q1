import React, { useState } from 'react';
import { getInitialPage } from './getInitialPage.ts';

interface IPaginationProps {
  onPaginationChange: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = (props: IPaginationProps) => {
  const { onPaginationChange } = props;

  const [paginationState, setPaginationState] = useState<number>(() => getInitialPage());

  const changePagination = (flag: boolean) => {
    const unit = flag ? 1 : -1;
    setPaginationState(() => paginationState + unit);
    onPaginationChange(paginationState);
  };
  return (
    <div className="flex justify-center items-center gap-8 text-xl">
      <button
        onClick={() => changePagination(false)}
        disabled={paginationState <= 1}
        type="button"
        className="cursor-pointer py-2 px-10 border-2 rounded-[2rem] border-black
         text-black bg-white hover:bg-black hover:text-white hover:border-white"
      >
        prev
      </button>
      <span
        style={{ padding: `0.5rem ${paginationState <= 9 ? '1rem' : '0.7rem'}` }}
        className="border-2 border-black rounded-full"
      >
        {paginationState}
      </span>
      <button
        onClick={() => changePagination(true)}
        disabled={paginationState >= 9}
        type="button"
        className="cursor-pointer py-2 px-10 border-2 rounded-[2rem] border-black
         text-black bg-white hover:bg-black hover:text-white hover:border-white"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
