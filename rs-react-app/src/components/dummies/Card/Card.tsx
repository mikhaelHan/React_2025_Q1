import React from 'react';
import { ICard } from '../../../models/api.ts';

class Card extends React.PureComponent<ICard> {
  render() {
    const { name, gender, height, mass, eye_color } = this.props;

    return (
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
    );
  }
}

export default Card;

//box-shadow: 0rem 0rem 0.2rem 0.2rem #000000;
