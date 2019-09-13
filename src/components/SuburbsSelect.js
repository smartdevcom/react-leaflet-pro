import React from 'react';

export const SuburbsItem = (item, isHighlighted) => (
   <div
      className={`autocomplete__item ${isHighlighted ? 'autocomplete__item--highlighted' : ''}`}
      key={`${item.localityName}${item.postcode}`}
   >
      {item.localityName} ({item.postcode})
   </div>
);

export const AddressItem = (item, isHighlighted) => (
   <div className={`autocomplete__item ${isHighlighted ? 'autocomplete__item--highlighted' : ''}`} key={`${item.id}`}>
      {item.address}
   </div>
);

export const Menu = children => (children.length ? <div className='autocomplete__menu'>{children}</div> : <div />);
