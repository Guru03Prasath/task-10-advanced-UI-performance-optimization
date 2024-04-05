// LargeList.js
import React from 'react';

function LargeList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default LargeList;














