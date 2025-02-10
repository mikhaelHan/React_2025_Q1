import React from 'react';
import { Link } from 'react-router';
import { ICard } from '../../../models/api.ts';

const CardDescription: React.FC<ICard> = (props: ICard) => {
  const { name, gender, height, mass, eye_color, url } = props;

  return (
    <div className="px-4 py-12 flex flex-col justify-center gap-3">
      <div className="border-4 border-black rounded-[2rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={!url ? url : '/star-wars.jpg'} alt="star-wars" />
      </div>
      <p className="text-4xl font-semibold italic">{name}</p>
      <div
        style={{ boxShadow: `inset 0rem 0rem 1rem ${eye_color === 'blue-gray' ? 'violet' : eye_color}` }}
        className="rounded-[1.5rem] px-4 flex justify-around text-xl italic font-medium"
      >
        <p>
          Gender: <span className="font-extrabold">{gender}</span>
        </p>
        <p>
          Height: <span className="font-extrabold">{height}</span>
        </p>
        <p>
          Mass: <span className="font-extrabold">{mass}</span>
        </p>
      </div>
      <p className="text-2xl text-blue-950 italic">
        <Link to="/">← Back</Link>
      </p>
    </div>
  );
};

export default CardDescription;
