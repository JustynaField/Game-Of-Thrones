import React from 'react';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';

export const CardList = ({ houses }) => {

  if(!houses.length) {
    return (
        <Loader />
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
