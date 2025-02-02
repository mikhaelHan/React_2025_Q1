import React from 'react';
import CardsList from '../../widgets/CardsList';
import Search from '../../widgets/Search';

interface MainState {
  query: string;
}

class Main extends React.PureComponent<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      query: '',
    };
  }

  public handleSearchChange = (query: string) => {
    this.setState({ query: query });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="max-w-[1280px] my-0 mx-auto text-center">
        <div className="w-full h-full flex flex-col gap-1">
          <h1 className="text-4xl font-extrabold">Class component !</h1>
          <Search onSearchChange={this.handleSearchChange} />
          <CardsList query={query} />
        </div>
      </div>
    );
  }
}

export default Main;
