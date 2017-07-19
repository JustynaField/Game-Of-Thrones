import React from 'react';

export const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words}) => {

  return (
    <div className='Card'>
      <h2>{name}</h2>
      <h3>Founded: {founded ? founded : 'N/A'}</h3>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Coat Of Arms: {coatOfArms}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Words: {words ? words : 'N/A'}</p>
    </div>
  )
}
