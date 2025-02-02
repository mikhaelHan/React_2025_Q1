import React, { ReactNode } from 'react';

class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error.message);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="p-8 w-full h-full flex justify-center">
          <h1 className="text-5xl font-medium">Error Boundary is working !</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
