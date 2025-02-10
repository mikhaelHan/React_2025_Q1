import React from 'react';
import { ICard } from '../../../models/api.ts';
import { Link, useLocation } from 'react-router';

const Card: React.FC<ICard> = (props: ICard) => {
  const { name, gender, height, mass, eye_color, url } = props;

  const location = useLocation();
  const toValue =
    location.pathname === '/frontpage=2'
      ? '/'
      : `/frontpage=2?detail=${encodeURIComponent(url.split('/').reverse()[1])}`;

  return (
    <Link to={toValue}>
      <div
        className="flex flex-col py-4 px-8 gap-0.5 rounded-[1rem]"
        style={{ boxShadow: `inset 0rem 0rem 1rem ${eye_color === 'blue-gray' ? 'violet' : eye_color}` }}
      >
        <h3 className="text-3xl font-semibold italic">{name}</h3>
        <div className="flex justify-around text-xl font-medium">
          <p>
            Gender: <span className="font-black">{gender}</span>
          </p>
          <p>
            Height: <span className="font-black">{height}</span>
          </p>
          <p>
            Mass: <span className="font-black">{mass}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
