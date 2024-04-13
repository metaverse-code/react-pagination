import React from 'react';
import Pagination from './Pagination';
import items from './data'; // Import the array of items

const MyComponent = () => {
  return (
    <div>
      <Pagination items={items} />
    </div>
  );
};

export default MyComponent;
