import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getCardByParams } from '../../../api/card.ts';
import { ICard } from '../../../models/api.ts';
import CardDescription from '../../dummies/CardDescription';

interface IDetailPageState {
  name: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
  url: string;
}

const DetailPage: React.FC = () => {
  const [dataState, setDataState] = useState<IDetailPageState>({
    name: '',
    gender: '',
    height: '',
    mass: '',
    eye_color: '',
    url: '',
  });
  const [loadState, setLoadState] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const location = useLocation();
  const detail: string | null = new URLSearchParams(location.search).get('detail');

  const getDetail = async (query: string) => {
    setLoadState(true);

    const response: ICard | string = await getCardByParams(query);
    typeof response === 'string'
      ? setError(response)
      : setDataState({
          name: response.name,
          gender: response.gender,
          height: response.height,
          mass: response.mass,
          eye_color: response.eye_color,
          url: response.url,
        });

    setLoadState(false);
  };

  useEffect(() => {
    if (detail) {
      getDetail(detail).then(() => {});
    }
  }, [detail]);

  return (
    <div className="w-full h-full">
      {loadState ? (
        <p className="text-3xl font-semibold italic">Loading ...</p>
      ) : error ? (
        <p className="text-3xl font-semibold italic">{error}</p>
      ) : (
        <CardDescription
          name={dataState.name}
          gender={dataState.gender}
          height={dataState.height}
          mass={dataState.mass}
          eye_color={dataState.eye_color}
          url={dataState.url}
        />
      )}
    </div>
  );
};
export default DetailPage;
