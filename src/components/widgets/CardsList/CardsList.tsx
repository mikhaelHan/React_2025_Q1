import React, { useEffect, useState } from 'react';
import { ICard } from '../../../models/api.ts';
import Card from '../../dummies/Card';
import { getCards } from './CardsListService.ts';
import { ILSValue } from '../../../constants/LSKey.ts';

type CardsListProps = {
  query: ILSValue;
  option: string | undefined;
};

const CardsList: React.FC<CardsListProps> = (props: CardsListProps) => {
  const { query, option } = props;

  const [responseState, setResponseState] = useState<ICard[] | string>([]);
  const [loadState, setLoadState] = useState<boolean>(true);

  const fetchCards = async (query: ILSValue, option: string | undefined) => {
    setLoadState(true);

    const response = await getCards(query, option);

    setResponseState(response);
    setLoadState(false);
  };

  useEffect(() => {
    fetchCards(query, option).then(() => {});
  }, [query, option]);

  return (
    <>
      {loadState ? (
        <p className="text-4xl font-semibold italic">Loading ...</p>
      ) : typeof responseState === 'string' ? (
        <p className="text-4xl font-semibold italic">{responseState}</p>
      ) : (
        <div className="w-full">
          <ul className="flex flex-col gap-4">
            {responseState.map((el: ICard, ind: number) => (
              <li key={ind}>
                <Card
                  name={el.name}
                  gender={el.gender}
                  height={el.height}
                  mass={el.mass}
                  eye_color={el.eye_color}
                  url={el.url}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CardsList;
