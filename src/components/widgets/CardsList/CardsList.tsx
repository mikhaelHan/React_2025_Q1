import React, { useEffect, useState } from 'react';
import { ICard } from '../../../models/api.ts';
import Card from '../../dummies/Card';
import { getCards } from './CardsListService.ts';
import { storageService } from '../../../utils/storageService.ts';

type CardsListProps = {
  query: string | undefined;
};

const CardsList: React.FC<CardsListProps> = (props: CardsListProps) => {
  const { query } = props;

  const [responseState, setResponseState] = useState<ICard[] | string>([]);
  const [loadState, setLoadState] = useState<boolean>(true);

  const fetchCards = async (query: string | undefined) => {
    const lsQuery = storageService();
    const response = query !== undefined ? await getCards(query) : await getCards(lsQuery);
    setResponseState(response);
    setLoadState(false);
  };

  useEffect(() => {
    fetchCards(query).then(() => {});
  }, [query]);

  return (
    <div className="p-4 w-full">
      {loadState ? (
        <p className="text-4xl font-semibold italic">Loading ...</p>
      ) : typeof responseState === 'string' ? (
        <p className="text-4xl font-semibold italic">{responseState}</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {responseState.map((el: ICard, ind: number) => (
            <li key={ind}>
              <Card name={el.name} gender={el.gender} height={el.height} mass={el.mass} eye_color={el.eye_color} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardsList;
