import { memo } from 'react';

export const Small = memo( ({value}) => {

    console.log('object Small rendered :(');

  return (
    <small>{ value }</small>
  )
});

 