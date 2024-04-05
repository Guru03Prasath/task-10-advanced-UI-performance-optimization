// VirtualizedLargeList.js
import React from 'react';
import { FixedSizeList as List } from 'react-window';

function VirtualizedLargeList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width={300}
    >
      {Row}
    </List>
  );
}

export default VirtualizedLargeList;