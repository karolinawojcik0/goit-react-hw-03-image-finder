import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Button = ({ onClick, disabled }) => {
  return (
    <>
      <button className="loadMore" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    </>
  );
};
