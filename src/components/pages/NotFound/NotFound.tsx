import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <div className="flex items-center gap-8">
        <div className="w-28 h-28">
          <img src="/404-page_logo.png" alt="404-page" />
        </div>
        <p className="text-2xl font-semibold text-gray-600">
          Sorry, something <br />
          went wrong((
        </p>
      </div>
    </div>
  );
};

export default NotFound;
