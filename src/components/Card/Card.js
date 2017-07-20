import React from 'react';
import './Card.css';

export const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words, members}) => {

  const swornMembers = members.map((member, i) => {
    return <p key={i}>{member}</p>
  })


  return (
    <div className='flip-container'>
      <div className='flipper'>
        <div className='Card front'>
          <h2>{name}</h2>
          <h3>Founded: {founded ? founded : 'N/A'}</h3>
          <p>Seats: {seats}</p>
          <p>Titles: {titles}</p>
          <p>Coat Of Arms: {coatOfArms}</p>
          <p>Ancestral Weapons: {ancestralWeapons}</p>
          <p>Words: {words ? words : 'N/A'}</p>
        </div>

        <div className='Card back'>
          <h2>Sworn Members:</h2>
          <div className='members'>{swornMembers}</div>

        </div>
      </div>
    </div>
  )
}
