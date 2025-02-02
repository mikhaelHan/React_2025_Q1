import React from 'react';
import CardsList from '../../widgets/CardsList';

class Main extends React.PureComponent {
  render() {
    return (
      <div className="max-w-[1280px] my-0 mx-auto text-center">
        <div className="w-full h-full flex flex-col gap-1">
          <h1 className="text-4xl font-extrabold">Class component !</h1>
          <CardsList query={''} />
        </div>
      </div>
    );
  }
}

export default Main;
