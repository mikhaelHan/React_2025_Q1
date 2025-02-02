import React from 'react';

interface AppState {
  count: number;
}

class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  public handlerCount = () => {
    this.setState(() => ({ count: this.state.count + 1 }));
  };

  render() {
    return (
      <div>
        <p className="mt-4">Вы кликнули {this.state.count} раз</p>
        <button className="mt-10" onClick={this.handlerCount}>
          Нажми на меня
        </button>
      </div>
    );
  }
}

export default App;
