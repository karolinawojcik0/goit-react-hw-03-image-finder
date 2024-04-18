import React from 'react';

export const Button = ({ onClick, disabled }) => {
  return (
    <>
      <button className="loadMore" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    </>
  );
};
