import React from 'react';
import { Card } from '../Card/Card';

export const CardList = ({ houses }) => {

  if(!houses.length) {
    return (
      <div>Loading...</div>
    )
  }

  const eachHouse = houses.map((household, index) => {
    return <Card key={index} {...household} />
  })


  return (
    <div className='Container'>
      { eachHouse }
    </div>
  )
};
