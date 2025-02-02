import React from 'react';
import { ICard } from '../../../models/api.ts';
import Card from '../../dummies/Card';
import { getCards, storageService } from './CardsListService.ts';

interface CardsListProps {
  query: string | undefined;
}

interface CardsListState {
  isLoad: boolean;
  cardsList: ICard[];
}

class CardsList extends React.PureComponent<CardsListProps, CardsListState> {
  constructor(props: CardsListProps) {
    super(props);
    this.state = {
      isLoad: true,
      cardsList: [],
    };
  }

  fetchCards = async (query: string) => {
    const cardsList = await getCards(query);
    this.setState({ cardsList: cardsList, isLoad: false });
  };

  async componentDidMount() {
    const query = storageService();
    await this.fetchCards(query);
  }

  async componentDidUpdate(prevProps: CardsListProps) {
    if (this.props.query && this.props.query !== prevProps.query) {
      this.setState({ isLoad: true });
      await this.fetchCards(this.props.query);
    }
  }

  render() {
    const { isLoad, cardsList } = this.state;

    return (
      <div className="p-4 w-full">
        {isLoad ? (
          <p className="text-4xl font-semibold italic">Loading ...</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {cardsList.map((el: ICard, ind: number) => {
              return (
                <li key={ind}>
                  <Card name={el.name} gender={el.gender} height={el.height} mass={el.mass} eye_color={el.eye_color} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CardsList;
