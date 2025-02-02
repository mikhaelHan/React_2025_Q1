import React from 'react';

interface SearchProps {
  onSearchChange: (query: string) => void;
}

interface SearchState {
  query: string;
  isError: boolean;
}

class Search extends React.PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      query: '',
      isError: false,
    };
    this.inputOnChange = this.inputOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.throwError = this.throwError.bind(this);
  }

  public inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ query: value });
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { query } = this.state;
    const { onSearchChange } = this.props;
    onSearchChange(query);
    this.setState(() => ({ query: '' }));
  };

  public throwError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { query, isError } = this.state;

    if (isError) throw new Error('Oops, something went wrong...');

    return (
      <div className="p-4 w-full">
        <div className="p-4 flex justify-between gap-8">
          <form className="flex gap-8" onSubmit={this.handleSubmit}>
            <input
              onChange={this.inputOnChange}
              value={query}
              placeholder="Search..."
              className="py-2 px-4 text-2xl border-2 border-black rounded-[2rem]"
              type="search"
              size={30}
            />
            <input
              value="Search"
              type="submit"
              className="cursor-pointer py-2 px-12 text-2xl border-2 rounded-[2rem]
               border-black text-black bg-white hover:bg-black hover:text-white hover:border-white"
            />
          </form>
          <button
            onClick={this.throwError}
            type="button"
            className="cursor-pointer py-2 px-12 text-2xl border-2 rounded-[2rem]
             border-black text-black bg-white hover:bg-black hover:text-white hover:border-white"
          >
            Error
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
