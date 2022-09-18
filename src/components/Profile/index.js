import React from 'react'

export default function Profiles({Leaderboard}) {
  return (

    <div id="profile">
        {Item(Leaderboard)}
    </div>
  )

  function Item(data){
    return (
        <>
        {
            data.map((value, index) =>(
            <div className='flex'key={index}>
            <div className='item'>
                <div className='info'>
                    <h3 className='name-text-dark'>{value.name}</h3>
                </div>
            </div>
            <div className='item'>
                <span>{value.score}</span>
            </div>
        </div>
            ))
        }
        </>

        
    )
  }
}
